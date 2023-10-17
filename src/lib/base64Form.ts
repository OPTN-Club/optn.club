import { compressToBase64, decompressFromBase64 } from 'lz-string';
import { mangleValueMap } from './mangle-lookup';
import getDefaultForm from './defaultForm';
import getDefaultFormV1, { SettingsFormV1 } from './SettingsFormV1';

const unmangleValueMap: Record<string, string> = Object
  .keys(mangleValueMap)
  .reduce(
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

interface FormSerializer {
  serialize(form: Record<string, never>): string;
  deserialize(encoded: string, flattenedKeys: string[]): Record<string, never>;
}

export default class Base64FormEncoder {
  serializer: FormSerializer = serializerV1;

  private _serializedDefaultForm: string = '';

  private flattenedKeys: string[] = [];

  constructor(private version: string) {
    this.updateVersion(version);
  }

  updateVersion(version: string) {
    if (version === 'v2') {
      this.serializer = serializerV1;
    }
    const defaultForm = this.getDefaultForm();

    this.flattenedKeys = Object.keys(this.flattenObject(defaultForm));
    this.flattenedKeys.sort();

    this._serializedDefaultForm = this.encode(defaultForm);
  }

  getDefaultForm() {
    if (this.version === 'v2') {
      return getDefaultForm(this.version);
    }

    return getDefaultFormV1();
  }

  encode(form: SettingsFormV1): string {
    const flattened = this.flattenObject(form);
    const serialized = this.serializer.serialize(flattened);

    if (serialized === this._serializedDefaultForm) return '';

    const compressed = compressToBase64(serialized);
    return compressed;
  }

  decode(encoded?: string): SettingsFormV1 {
    const defaultForm = this.getDefaultForm();

    if (!encoded) return defaultForm;

    const json = decompressFromBase64(encoded);
    if (!json) {
      throw new Error('Decompressed string is empty');
    }
    const flattened = this.serializer.deserialize(json, this.flattenedKeys);
    const form = this.unflattenObjectInto(flattened, defaultForm);
    if (!form || !Object.keys(form).length) {
      throw new Error('Undefined or empty object.');
    }

    return form;
  }

  flattenObject<T extends object>(object: T, path: string[] = []): Record<string, never> {
    const keys = Object.keys(object);
    // console.log('keys', keys);
    const flattened: Record<string, never> = {};

    keys.forEach((key) => {
      const value = object[key as keyof T];
      const valuePath = [...path, key];
      const flattenedKey = valuePath.join('.');

      if (value && typeof value === 'object' && !Array.isArray(value)) {
        const flattenedValue = this.flattenObject(value, valuePath);
        Object.keys(flattenedValue).forEach((valueKey) => {
          flattened[valueKey] = flattenedValue[valueKey];
        });
      } else {
        flattened[flattenedKey] = value as never;
      }
    });

    return flattened;
  }

  unflattenObjectInto<T extends object>(source: Record<string, never>, target: T, path: string[] = []) {
    const keys = Object.keys(target);
    keys.forEach((key) => {
      const valuePath = [...path, key];
      const targetValue = target[key as keyof T];

      const isObject = typeof targetValue === 'object' && !Array.isArray(targetValue);

      if (targetValue && isObject) {
        target[key as keyof T] = this.unflattenObjectInto(source, targetValue, valuePath);
      } else {
        const flattenedKey = valuePath.join('.');
        const sourceValue = source[flattenedKey];
        target[key as keyof T] = sourceValue;
      }
    });

    return target;
  }
}

const serializerV1: FormSerializer = {
  serialize: serializeFlatObjectV1,
  deserialize: deserializeFlatObjectV1,
};

function serializeFlatObjectV1(form: Record<string, never>): string {
  const keys = Object.keys(form);
  keys.sort();

  const values: unknown[] = [];
  keys.forEach((key) => {
    values.push(mangleValue(form[key]));
  });

  return JSON.stringify(values);
}

function deserializeFlatObjectV1(value: string, flattenedKeys: string[]): Record<string, never> {
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
