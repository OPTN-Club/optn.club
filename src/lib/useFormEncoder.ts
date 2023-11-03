import { compressToBase64, decompressFromBase64 } from 'lz-string';
import {
  computed,
  ref,
  Ref,
  watch,
} from 'vue';

import { mangleValueMap } from './mangle-lookup';

export interface FormEncoderOptions {
  getDefaultForm(): Record<string, never>;
  serialize?: (form: Record<string, never>) => string;
  deserialize?: (encoded: string, flattenedKeys: string[]) => Record<string, never>;
}

export default function useFormEncoder(
  options: Ref<FormEncoderOptions>,
) {
  const serializedDefaultForm = ref('');

  const serializer = computed(() => ({
    getDefaultForm: options.value.getDefaultForm,
    serialize: options.value.serialize || serializeFlatObject,
    deserialize: options.value.deserialize || deserializeFlatObject,
  }));

  const flattenedKeys = ref<string[]>([]);

  watch(options, onVersionUpdated, { immediate: true });

  function onVersionUpdated() {
    const defaultForm = serializer.value.getDefaultForm();
    const keys = Object.keys(flattenObject(defaultForm));
    keys.sort();
    flattenedKeys.value = keys;

    serializedDefaultForm.value = encode(defaultForm);
  }

  function encode(form: Record<string, unknown>): string {
    const flattened = flattenObject(form);
    // console.dir(flattened);
    const serialized = serializer.value.serialize(flattened);

    if (serialized === serializedDefaultForm.value) return '';

    const compressed = compressToBase64(serialized);
    return compressed;
  }

  function decode(encoded?: string): Record<string, unknown> {
    const defaultForm = options.value.getDefaultForm();

    if (!encoded) return defaultForm;

    const json = decompressFromBase64(encoded);
    if (!json) {
      throw new Error('Decompressed string is empty');
    }
    const flattened = serializer.value.deserialize(json, flattenedKeys.value);
    const form = unflattenObjectInto(flattened, defaultForm);
    if (!form || !Object.keys(form).length) {
      throw new Error('Undefined or empty object.');
    }

    return form;
  }

  function flattenObject(object: Record<string, unknown>, path: string[] = []): Record<string, never> {
    const keys = Object.keys(object);
    // console.log('keys', keys);
    const flattened: Record<string, never> = {};

    keys.forEach((key) => {
      const value = object[key];
      const valuePath = [...path, key];
      const flattenedKey = valuePath.join('.');

      if (value && typeof value === 'object' && !Array.isArray(value)) {
        const flattenedValue = flattenObject(value as Record<string, unknown>, valuePath);
        Object.keys(flattenedValue).forEach((valueKey) => {
          flattened[valueKey] = flattenedValue[valueKey];
        });
      } else {
        flattened[flattenedKey] = value as never;
      }
    });

    return flattened;
  }

  function unflattenObjectInto(
    source: Record<string, string>,
    target: Record<string, unknown>,
    path: string[] = [],
  ): Record<string, unknown> {
    const keys = Object.keys(target);
    keys.forEach((key) => {
      const valuePath = [...path, key];
      const targetValue = target[key];

      if (targetValue && typeof targetValue === 'object' && !Array.isArray(targetValue)) {
        target[key] = unflattenObjectInto(source, targetValue as Record<string, unknown>, valuePath);
      } else {
        const flattenedKey = valuePath.join('.');
        const sourceValue = source[flattenedKey];
        target[key] = sourceValue;
      }
    });

    return target;
  }

  return {
    encode,
    decode,
  };
}

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

function serializeFlatObject(form: Record<string, never>): string {
  const keys = Object.keys(form);
  keys.sort();

  const values: unknown[] = [];
  keys.forEach((key) => {
    values.push(mangleValue(form[key]));
  });

  return JSON.stringify(values);
}

function deserializeFlatObject(value: string, flattenedKeys: string[]): Record<string, never> {
  const values = JSON.parse(value) as never[];

  if (values.length !== flattenedKeys.length) {
    throw new Error('Invalid form');
  }

  const flattenedForm: Record<string, never> = {};
  flattenedKeys.forEach((key, index) => {
    // console.log(key, index);
    flattenedForm[key] = unmangleValue(values[index]) as never;
  });
  return flattenedForm;
}

export function deserializeFlatObjectV1(value: string, flattenedKeys: string[]): Record<string, never> {
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
    // console.log(key, index);
    flattenedForm[key] = unmangleValue(values[index]) as never;
  });
  return flattenedForm;
}
