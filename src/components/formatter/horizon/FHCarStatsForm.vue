<script setup lang="ts">
import { computed, watch } from 'vue';

import { useGlobalUnits } from '../../../lib/useGlobalUnits';
import EnumSelect from '../../EnumSelect.vue';
import MakeModelSelect from '../../MakeModelSelect.vue';
import NumberInput from '../../NumberInput.vue';

import { FHPIClass, fhPiClassMap } from './FHSetup';
import { useFHSetupForm } from './useFHSetupForm';

const { form } = useFHSetupForm();
const globalUnits = useGlobalUnits();

const units = computed(() => {
  if (globalUnits.value.globalUnit === 'Imperial') {
    return {
      power: 'hp',
      torque: 'ft-lbs',
      weight: 'lbs',
      speed: 'mph',
    };
  }

  return {
    power: 'hp', // Imperial horsepower; we'll use it for metric anyway because that's what most players do
    torque: 'Nm',
    weight: 'kg',
    speed: 'kph',
  };
});

watch(() => form.stats.classification, (current) => {
  form.stats.pi = fhPiClassMap[current];
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
            :type="FHPIClass"
            rootClass="upgrade-select"
          />
          <NumberInput
            v-model="form.stats.pi"
            label="PI"
            rootClass="upgrade-select"
          />
          <NumberInput
            v-model="form.stats.hp"
            label="Power"
            rootClass="upgrade-select"
          >
            <template #suffix>
              {{ units.power }}
            </template>
          </NumberInput>
          <NumberInput
            v-model="form.stats.torque"
            label="Torque"
            rootClass="upgrade-select"
          >
            <template #suffix>
              {{ units.torque }}
            </template>
          </NumberInput>
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
