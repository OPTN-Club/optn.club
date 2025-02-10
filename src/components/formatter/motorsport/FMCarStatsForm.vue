<script setup lang="ts">
import { computed, watch } from 'vue';

import { getUnitsForGlobalUnit } from '../../../lib/conversions';
import { useGlobalUnits } from '../../../lib/useGlobalUnits';
import EnumSelect from '../../EnumSelect.vue';
import InputControl from '../../InputControl.vue';
import NumberInput from '../../NumberInput.vue';

import { FMPIClass, fmPiClassMap } from './FMSetup';
import { useFMSetupForm } from './useFMSetupForm';

const { form } = useFMSetupForm();
const globalUnits = useGlobalUnits();
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

const units = computed(() => getUnitsForGlobalUnit(globalUnits.value.globalUnit));

watch(() => form.stats.classification, (current) => {
  form.stats.pi = fmPiClassMap[current];
});

const balance = computed(() => Number(form.stats.balance) || 0);

const balanceRear = computed(() => (form.stats.balance ? (100 - balance.value).toString() : ''));

</script>
<template>
  <section class="items-stretch">
    <div class="heading">
      <h2>Car</h2>
      <p>Which beast have you tamed?</p>
    </div>
    <div class="grow">
      <div class="content">
        <div class="set-upgrades">
          <InputControl
            v-model="form.year"
            type="number"
            label="Year"
            class="w-56"
          />
        </div>
        <div class="set-upgrades">
          <InputControl
            v-model="form.make"
            label="Make"
            class="w-56"
          />
          <InputControl
            v-model="form.model"
            label="Model"
            class="w-56"
          />
        </div>
      </div>
      <div class="content">
        <h3>Statistics</h3>
        <p class="text-sm mb-6">Optional, though helpful for others.</p>
        <div class="set-upgrades">
          <EnumSelect
            v-model="form.stats.classification"
            label="Class"
            :type="FMPIClass"
            rootClass="upgrade-select"
          />
          <NumberInput
            v-model="form.stats.pi"
            label="PI"
            rootClass="upgrade-select"
          />
          <NumberInput
            v-model="form.stats.carPoints"
            label="Car Points"
            rootClass="upgrade-select"
          />
        </div>
        <div class="set-upgrades">
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
            label="Balance Front"
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
