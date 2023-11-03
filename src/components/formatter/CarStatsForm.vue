<script setup lang="ts">
import { computed, watch } from 'vue';

import { PIClass } from '../../lib/types';
import { useFormattingForm } from '../../lib/useFormattingForm';
import EnumSelect from '../EnumSelect.vue';
import MakeModelSelect from '../MakeModelSelect.vue';
import NumberInput from '../NumberInput.vue';

const { form, globalUnit } = useFormattingForm();
/*
Class X – 999 PI
Class P – 901-998 PI
Class R – 801-900 PI
Class S – 701-800 PI
Class A – 601-700 PI
Class B – 501-600 PI
Class C – 401-500 PI
Class D – 301-400 PI
Class E – 0-300 PI
*/
const piClassMap: Record<PIClass, number> = {
  [PIClass.D]: 500,
  [PIClass.C]: 600,
  [PIClass.B]: 700,
  [PIClass.A]: 800,
  [PIClass.S1]: 900,
  [PIClass.S2]: 998,
  [PIClass.X]: 999,
};

const units = computed(() => {
  if (globalUnit.value === 'Imperial') {
    return {
      torque: 'ft-lbs',
      weight: 'lbs',
      speed: 'mph',
    };
  }
  return {
    torque: 'Nm',
    weight: 'kg',
    speed: 'kph',
  };
});

watch(() => form.stats.classification, (current) => {
  form.stats.pi = piClassMap[current];
});

</script>
<template>
  <section>
    <div class="heading">
      <h2>Car</h2>
      <p>Which beast have you tamed?</p>
    </div>
    <div class="grow">
      <MakeModelSelect
        v-model:make="form.make"
        v-model:model="form.model"
      />
      <div class="content">
        <h3>Statistics</h3>
        <p class="text-sm mb-6">Optional, though helpful for others.</p>
        <div class="set-upgrades">
          <EnumSelect
            v-model="form.stats.classification"
            label="Class"
            :type="PIClass"
            rootClass="upgrade-select"
          />
          <NumberInput
            v-model="form.stats.pi"
            label="PI"
            rootClass="upgrade-select"
          />
          <NumberInput
            v-model="form.stats.hp"
            label="HP"
            rootClass="upgrade-select"
          />
          <NumberInput
            v-model="form.stats.torque"
            label="Torque"
            rootClass="upgrade-select"
          >
            <template #suffix>
              {{ units.torque }}
            </template>
          </NumberInput>
          <!-- <UnitSelect
            v-model="form.stats.weight."
            type="weight"
            class="rounded-l-none"
            :disabled="form.tune.aero.na"
          /> -->
        </div>
        <div class="set-upgrades">
          <NumberInput
            v-model="form.stats.weight"
            label="Weight"
          >
            <template #suffix>{{ units.weight }}</template>
          </NumberInput>
          <NumberInput
            v-model="form.stats.balance"
            label="Balance"
          >
            <template #suffix>%</template>
          </NumberInput>
        </div>
        <div class="set-upgrades">
          <NumberInput
            v-model="form.stats.zeroToSixty"
            label="0-60"
          >
            <template #suffix>sec</template>
          </NumberInput>
          <NumberInput
            v-model="form.stats.zeroToHundred"
            label="0-100"
          >
            <template #suffix>sec</template>
          </NumberInput>
          <NumberInput
            v-model="form.stats.topSpeed"
            label="Top Speed"
          >
            <template #suffix>
              {{ units.speed }}
            </template>
          </NumberInput>
        </div>
      </div>
    </div>
  </section>
</template>
