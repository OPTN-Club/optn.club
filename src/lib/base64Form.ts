import { compressToBase64, decompressFromBase64 } from 'lz-string';
import { mangleValueMap } from './mangle-lookup';
import getDefaultForm from './defaultForm';
import {
  SettingsForm,
} from './types';

// Reverse mangleLookup
// const unmangleKeyMap: Record<string, string> = Object
//   .keys(mangleKeyMap)
//   .reduce(
//     (prev, cur) => ({
//       ...prev,
//       [mangleKeyMap[cur]]: cur,
//     }),
//     {},
//   );

const unmangleValueMap: Record<string, string> = Object
  .keys(mangleValueMap)
  .reduce(
    (prev, cur) => ({
      ...prev,
      [mangleValueMap[cur]]: cur,
    }),
    {},
  );

// function mangleKey(key: string) {
//   return mangleKeyMap[key] || key;
// }

// function unmangleKey(key: string) {
//   return unmangleKeyMap[key] || key;
// }

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

// Replace the objects keys with abbreviations to save characters, reducing the base64 strings length
// function mangleObject<T>(object: T) {
//   const mangled: Record<string, any> = {};
//   const keys = Object.keys(object) as (keyof T)[];

//   keys.forEach((key) => {
//     const value = object[key];
//     const isObject = typeof value === 'object' && !Array.isArray(value);
//     const mangledKey = mangleKey(key as string);
//     const mangledValue = mangleValue(value);

//     if (isObject) {
//       mangled[mangledKey] = mangleObject(object[key]);
//     } else {
//       mangled[mangledKey] = mangledValue;
//     }
//   });

//   return mangled;
// }

// Replace the objects keys with abbreviations to save characters, reducing the base64 strings length
// function unmangleObject<T>(mangled: Record<string, never>, target: T): T {
//   const keys = Object.keys(mangled);

//   keys.forEach((key) => {
//     const value = mangled[key];
//     const isObject = typeof value === 'object' && !Array.isArray(value);
//     const unmangledKey = unmangleKey(key) as keyof T;
//     const unmangledValue = unmangleValue(value);

//     if (isObject) {
//       target[unmangledKey] = unmangleObject(mangled[key], target[unmangledKey]);
//     } else {
//       target[unmangledKey] = unmangledValue as never;
//     }
//   });

//   return target;
// }

export function flattenObject<T extends object>(object: T, path: string[] = []): Record<string, never> {
  const keys = Object.keys(object);
  // console.log('keys', keys);
  const flattened: Record<string, never> = {};

  keys.forEach((key) => {
    const value = object[key as keyof T];
    const isObject = typeof value === 'object' && !Array.isArray(value);
    const valuePath = [...path, key];
    const flattenedKey = valuePath.join('.');

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const flattenedValue = flattenObject(value, valuePath);
      Object.keys(flattenedValue).forEach((valueKey) => {
        flattened[valueKey] = flattenedValue[valueKey];
      });
    } else {
      flattened[flattenedKey] = value as never;
    }
  });

  return flattened;
}

const flattenedKeys = Object.keys(flattenObject(getDefaultForm()));
flattenedKeys.sort();

export function unflattenObjectInto<T extends object>(source: Record<string, never>, target: T, path: string[] = []) {
  const keys = Object.keys(target);
  keys.forEach((key) => {
    const valuePath = [...path, key];
    const targetValue = target[key as keyof T];

    const isObject = typeof targetValue === 'object' && !Array.isArray(targetValue);

    if (targetValue && isObject) {
      target[key as keyof T] = unflattenObjectInto(source, targetValue, valuePath);
    } else {
      const flattenedKey = valuePath.join('.');
      const sourceValue = source[flattenedKey];
      target[key as keyof T] = sourceValue;
    }
  });

  return target;
}

const serializedDefaultForm = serializeFlatObject(flattenObject(getDefaultForm()));

/**
 * The form is flattened to a single level object, then the keys are alphabetized,
 * which is then used to create an array of values.  The values are mangled (shortened).
 * This results in a much shorter encoded string.
 */
export function getBase64FromForm(form: SettingsForm): string {
  const flattened = flattenObject(form);
  const serialized = serializeFlatObject(flattened);

  if (serialized === serializedDefaultForm) return '';

  const compressed = compressToBase64(serialized);
  return compressed;
}

export function getFormFromBase64(base64Tune: string): SettingsForm {
  const json = decompressFromBase64(base64Tune);
  if (!json) {
    throw new Error('Decompressed string is empty');
  }
  const flattened = deserializeFlatObject(json);
  const form = unflattenObjectInto(flattened, getDefaultForm());
  if (!form || !Object.keys(form).length) {
    throw new Error('Undefined or empty object.');
  }

  return form;
}

function serializeFlatObject(form: Record<string, never>): string {
  const keys = Object.keys(form);
  keys.sort();

  const values: unknown[] = [];
  keys.forEach((key) => {
    values.push(mangleValue(form[key]));
  });

  return JSON.stringify(values);
}

function deserializeFlatObject(value: string): Record<string, never> {
  const values = JSON.parse(value) as never[];

  /**
   * Added Tire Profile Size
   * If a link is before this was added, we need to
   * insert the values into the parsed array
   */
  if (values.length === 98) {
    values.splice(38, 0, 's' as never, 's' as never);
  }

  const flattenedForm: Record<string, never> = {};
  flattenedKeys.forEach((key, index) => {
    console.log(key, index);
    flattenedForm[key] = unmangleValue(values[index]) as never;
  });
  return flattenedForm;
}
