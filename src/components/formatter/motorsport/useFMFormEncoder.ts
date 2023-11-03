import { compressToBase64, decompressFromBase64 } from 'lz-string';
import {
  computed,
  ref,
  watch,
} from 'vue';

import { mangleValueMap } from '../../../lib/mangle-lookup';
import { FormattingFormProps } from '../../../lib/types';

import { getFMDefaultForm } from './FMSetup';

export default function useFMFormEncoder<T extends Record<string, never>>(
  props: FormattingFormProps,
  getDefaultForm: (version: string) => T,
) {
  const serializer = ref<FormEncoderOptions<T>>(serializerV1);

  const serializedDefaultForm = ref('');

  const flattenedKeys = ref<string[]>([]);

  watch(() => props.version, onVersionUpdated, { immediate: true });

  function onVersionUpdated() {
    if (props.version === 'v2') {
      serializer.value = serializerV1;
    } else {
      serializer.value = serializerV1;
    }

    const defaultForm = getDefaultForm(props.version);
    const keys = Object.keys(flattenObject(defaultForm));
    keys.sort();
    flattenedKeys.value = keys;

    serializedDefaultForm.value = encode(defaultForm);
  }

  function encode(form: T): string {
    const flattened = flattenObject(form);
    console.dir(flattened);
    const serialized = serializer.value.serialize(flattened);

    if (serialized === serializedDefaultForm.value) return '';

    const compressed = compressToBase64(serialized);
    return compressed;
  }

  function decode(encoded?: string): T {
    const defaultForm = getDefaultForm(props.version);

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

  function flattenObject(object: T, path: string[] = []): Record<string, never> {
    const keys = Object.keys(object);
    // console.log('keys', keys);
    const flattened: Record<string, never> = {};

    keys.forEach((key) => {
      const value = object[key as keyof T];
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

  function unflattenObjectInto(source: Record<string, string>, target: T, path: string[] = []) {
    const keys = Object.keys(target);
    keys.forEach((key) => {
      const valuePath = [...path, key];
      const targetValue = target[key as keyof T];

      const isObject = typeof targetValue === 'object' && !Array.isArray(targetValue);

      if (targetValue && isObject) {
        target[key] = unflattenObjectInto(source, targetValue, valuePath);
      } else {
        const flattenedKey = valuePath.join('.');
        const sourceValue = source[flattenedKey];
        target[key as keyof T] = sourceValue;
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

/**
 * The form is flattened to a single level object, then the keys are alphabetized,
 * which is then used to create an array of values.  The values are mangled (shortened).
 * This results in a much shorter encoded string.
 */

interface FormEncoderOptions<T extends Record<string, never>> {
  getDefaultForm(): T;
  serialize(form: Record<string, never>): string;
  deserialize(encoded: string, flattenedKeys: string[]): Record<string, never>;
}
