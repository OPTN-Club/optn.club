import { Ref, watch } from 'vue';

import { convertTo } from './conversions';
import { FrontAndRearWithUnits, UnitOfMeasure } from './types';

export function useConvertFrontRearUnits<U extends UnitOfMeasure>(frontRear: Ref<FrontAndRearWithUnits<U>>, precision = 0) {
  watch(() => frontRear.value.units, (current) => {
    frontRear.value.front = convertTo(frontRear.value.front, current, precision);
    frontRear.value.rear = convertTo(frontRear.value.rear, current, precision);
  });
}

export function useConvertUnits<U extends UnitOfMeasure>(
  amount: Ref<string>,
  unit: Ref<U>,
) {
  watch(unit, (current) => {
    amount.value = convertTo(amount.value, current);
  });
}
