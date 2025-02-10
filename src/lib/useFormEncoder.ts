import { compressToBase64, decompressFromBase64 } from 'lz-string';

import { mangleValueMap } from './mangle-lookup';

const VALUE_COUNT_BEFORE_TIRE_PROFILE_UPDATE = 98;
const VALUE_COUNT_BEFORE_MOTOR_AND_BATTERY_UPDATE = 100;
const TIRE_PROFILE_SIZE_INDEX = 38;
const MOTOR_AND_BATTERY_INDEX = 24;

export interface FormEncoderOptions {
  getDefaultForm(): GenericForm;
  serialize?: (flattenedObj: FlattenedObject) => string;
  deserialize?: (encoded: string, flattenedKeys: string[]) => FlattenedObject;
}

export interface GenericForm {
  [key: string]: string | number | string[] | number[] | boolean | GenericForm;
}

export interface FlattenedObject {
  [key: string]: string | number | string[] | number[] | boolean;
}

export default function useFormEncoder<T>(blankFormFactory: () => T) {
  function getBlankForm(): GenericForm {
    const blankForm = blankFormFactory();
    return blankForm as unknown as GenericForm;
  }

  const flattenedBlankForm = flattenForm(getBlankForm());

  const flattenedKeys = Object.keys(flattenedBlankForm);
  flattenedKeys.sort();

  const serializedDefaultForm = serializeFlatObject(flattenedBlankForm);

  function encode(form: T): string {
    const flattened = flattenForm(form as GenericForm);
    // console.dir(flattened);
    const serialized = serializeFlatObject(flattened);

    if (serialized === serializedDefaultForm) return '';

    const compressed = compressToBase64(serialized);
    return compressed;
  }

  function decode(encoded?: string): T {
    const defaultForm = getBlankForm();

    if (!encoded) return defaultForm as T;

    const json = decompressFromBase64(encoded);
    if (!json) {
      console.error('Decompressed string is empty');
      return defaultForm as T;
    }
    const flattened = deserializeFlatObject(json, flattenedKeys);
    const form = unflattenFormInto(flattened, defaultForm);
    if (!form || !Object.keys(form).length) {
      throw new Error('Undefined or empty object.');
    }

    return form as T;
  }

  function flattenForm(object: GenericForm, path: string[] = []): FlattenedObject {
    const keys = Object.keys(object);
    const flattened: FlattenedObject = {};

    keys.forEach((key) => {
      const value = object[key];
      const valuePath = [...path, key];
      const flattenedKey = valuePath.join('.');
      if (typeof value === 'boolean' || typeof value === 'string' || typeof value === 'number' || Array.isArray(value)) {
        flattened[flattenedKey] = value;
      } else {
        const flattenedValue = flattenForm(value, valuePath);
        Object.keys(flattenedValue).forEach((valueKey) => {
          flattened[valueKey] = flattenedValue[valueKey];
        });
      }
    });

    return flattened;
  }

  function unflattenFormInto(source: FlattenedObject, target: GenericForm, path: string[] = []): GenericForm {
    const keys = Object.keys(target);
    keys.forEach((key) => {
      const valuePath = [...path, key];
      const targetValue = target[key];

      if (
        typeof targetValue === 'boolean' ||
        typeof targetValue === 'string' ||
        typeof targetValue === 'number' ||
        Array.isArray(targetValue)
      ) {
        const flattenedKey = valuePath.join('.');
        const sourceValue = source[flattenedKey];
        target[key] = sourceValue;
      } else {
        target[key] = unflattenFormInto(source, targetValue, valuePath);
      }
    });

    return target;
  }

  return {
    encode,
    decode,
  };
}

const unmangleValueMap: Record<string, string> = Object.keys(mangleValueMap).reduce(
  (prev, cur) => ({
    ...prev,
    [mangleValueMap[cur]]: cur,
  }),
  {},
);

function mangleValue(value: unknown) {
  if (typeof value === 'boolean') return value ? 't' : 'f';
  if (typeof value === 'string' && value in mangleValueMap) return mangleValueMap[value];
  return value;
}

function unmangleValue<T>(value: string | number) {
  if (value === 't') return true;
  if (value === 'f') return false;
  if (typeof value === 'string' && value in unmangleValueMap) {
    return unmangleValueMap[value];
  }
  return value;
}

/**
 * The form is flattened to a single level object, then the keys are alphabetized,
 * which is then used to create an array of values.  The values are mangled (shortened).
 * This results in a much shorter encoded string.
 */

function serializeFlatObject(flattenedObj: FlattenedObject): string {
  const keys = Object.keys(flattenedObj);
  keys.sort();

  const values: unknown[] = [];
  keys.forEach((key) => {
    values.push(mangleValue(flattenedObj[key]));
  });

  return JSON.stringify(values);
}

function deserializeFlatObject(value: string, flattenedKeys: string[]): FlattenedObject {
  const values = JSON.parse(value) as never[];

  /**
   * Added Tire Profile Size
   * If a link is before this was added, we need to
   * insert the values into the parsed array
   */
  if (values.length === VALUE_COUNT_BEFORE_TIRE_PROFILE_UPDATE) {
    values.splice(TIRE_PROFILE_SIZE_INDEX, 0, 's' as never, 's' as never);
  }

  /**
   * Added Motor and Battery
   */
  if (values.length === VALUE_COUNT_BEFORE_MOTOR_AND_BATTERY_UPDATE) {
    values.splice(MOTOR_AND_BATTERY_INDEX, 0, 'na' as never);
  }

  const flattenedForm: FlattenedObject = {};
  flattenedKeys.forEach((key, index) => {
    flattenedForm[key] = unmangleValue(values[index]) as never;
  });

  return flattenedForm;
}
