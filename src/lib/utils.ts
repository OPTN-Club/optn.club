import { SelectOption } from './types';

export function stringCompareFunction(a: string, b: string): number {
  const upperA = a.toUpperCase();
  const upperB = b.toUpperCase();
  if (upperA < upperB) return -1;
  if (upperA > upperB) return 1;
  return 0;
}

export function numberCompareFunction(a: number, b: number) {
  return a - b;
}

export function stringOrNumberCompareFunction<T extends string | number>(a: T, b: T): number {
  if (typeof a === 'string' && typeof b === 'string') return stringCompareFunction(a, b);
  if (typeof a === 'number' && typeof b === 'number') return numberCompareFunction(a, b);
  throw new Error('Invalid parameters');
}

type PickByValue<T, ValueType> = Pick<
  T,
  { [Key in keyof T]-?: T[Key] extends ValueType ? Key : never }[keyof T]
>;

export function sortUsingProp<T>(ary: T[], key: keyof PickByValue<T, string | number>, direction: ('asc' | 'desc') = 'asc'): T[] {
  const sorted = [...ary];

  sorted.sort((a, b) => {
    const valueA = direction === 'asc' ? a[key] : b[key];
    const valueB = direction === 'asc' ? b[key] : a[key];
    if (typeof valueA === 'string' && typeof valueB === 'string') return stringCompareFunction(valueA, valueB);
    if (typeof valueA === 'number' && typeof valueB === 'number') return numberCompareFunction(valueA, valueB);
    return 0;
  });
  return sorted;
}

const suffixes = ['th', 'st', 'nd', 'rd'];

export function addSuffix(n: number) {
  const d = (n || 0) % 100;
  return d > 3 && d < 21 ? 'th' : suffixes[d % 10] || 'th';
}

export function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
}

export function enumToOptions<E extends object>(source: E): SelectOption<E[keyof E]>[] {
  return enumKeys(source)
    .map((key) => ({
      value: source[key],
    }));
}

export function ensureArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

export function formatFloat(value: string | number, precision: number, suffix = '', includeSuffix = true) {
  const f = ensureFloat(value);
  if (Number.isNaN(f)) return '';
  return `${f.toFixed(precision)}${includeSuffix ? suffix : ''}`;
}

export function ensureFloat(value: string | number): number {
  return typeof value === 'string' ? parseFloat(value) : value;
}
