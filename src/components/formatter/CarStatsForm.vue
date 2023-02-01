<script setup lang="ts">
import { computed, watch } from 'vue';
import { useFormattingForm } from '../../lib/useFormattingForm';
import { PIClass } from '../../lib/types';
import EnumSelect from '../EnumSelect.vue';
import MakeModelSelect from '../MakeModelSelect.vue';
import NumberInput from '../NumberInput.vue';
import InputControl from '../InputControl.vue';
import UnitSelect from '../UnitSelect.vue';

const { form, globalUnit } = useFormattingForm();

const piClassMap: Record<PIClass, number> = {
  [PIClass.D]: 500,
  [PIClass.C]: 600,
  [PIClass.B]: 700,
  [PIClass.A]: 800,
  [PIClass.S1]: 900,
  [PIClass.S2]: 998,
  [PIClass.X]: 999,
};

const weightUnit = computed(() => (globalUnit.value === 'Imperial' ? 'lbs' : 'kg'));
const speedUnit = computed(() => (globalUnit.value === 'Imperial' ? 'mph' : 'kph'));

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
          <div class="flex items-end control">
            <NumberInput
              v-model="form.stats.torque"
              label="Torque"
              rootClass="upgrade-select"
            >
              <template #suffix>
                ft-lbs
              </template>
            </NumberInput>
            <!-- <UnitSelect
              v-model="form.stats.weight."
              type="weight"
              class="rounded-l-none"
              :disabled="form.tune.aero.na"
            /> -->
          </div>
        </div>
        <div class="set-upgrades">
          <NumberInput
            v-model="form.stats.weight"
            label="Weight"
            rootClass="upgrade-select"
          >
            <template #suffix>{{ weightUnit }}</template>
          </NumberInput>
          <NumberInput
            v-model="form.stats.balance"
            label="Balance"
            rootClass="upgrade-select"
          >
            <template #suffix>%</template>
          </NumberInput>
        </div>
        <div class="set-upgrades">
          <NumberInput
            v-model="form.stats.zeroToSixty"
            label="0-60"
            rootClass="upgrade-select"
          />
          <NumberInput
            v-model="form.stats.zeroToHundred"
            label="0-100"
          />
          <NumberInput
            v-model="form.stats.topSpeed"
            label="Top Speed"
            rootClass="upgrade-select"
          >
            <template #suffix>
              {{ speedUnit }}
            </template>
          </NumberInput>
        </div>
      </div>
    </div>
  </section>
</template>
