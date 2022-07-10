<script setup lang="ts">
import { watch } from 'vue';
import { useFormattingForm } from '../../lib/useFormattingForm';
import { PIClass } from '../../lib/types';
import EnumSelect from '../EnumSelect.vue';
import MakeModelSelect from '../MakeModelSelect.vue';
import NumberInput from '../NumberInput.vue';
import InputControl from '../InputControl.vue';

const { form } = useFormattingForm();

const piClassMap: Record<PIClass, number> = {
  [PIClass.D]: 500,
  [PIClass.C]: 600,
  [PIClass.B]: 700,
  [PIClass.A]: 800,
  [PIClass.S1]: 900,
  [PIClass.S2]: 998,
  [PIClass.X]: 999,
};

watch(() => form.stats.classification, (current) => {
  form.stats.pi = piClassMap[current];
});

</script>
<template>
  <section>
    <h2>Car</h2>
    <MakeModelSelect v-model:make="form.make" v-model:model="form.model" />
    <div class="set">
      <div class="flex items-center">
        <h3>Statistics</h3>
        <p class="text-sm">Optional</p>
      </div>
      <div class="set-upgrades flex-col items-start">
        <div class="row">
          <EnumSelect
            v-model="form.stats.classification"
            label="Class"
            :type="PIClass"
          />
          <NumberInput
            v-model="form.stats.pi"
            label="PI"
          />
          <NumberInput
            v-model="form.stats.hp"
            label="HP"
          />
          <NumberInput
            v-model="form.stats.torque"
            label="Torque"
          />
        </div>
        <div class="row">
          <NumberInput
            v-model="form.stats.weight"
            label="Weight"
          />
          <NumberInput
            v-model="form.stats.balance"
            label="Balance"
          >
            <span class="ml-1">%</span>
          </NumberInput>
        </div>
        <div class="row">
          <NumberInput
            v-model="form.stats.zeroToSixty"
            label="0-60"
          />
          <NumberInput
            v-model="form.stats.zeroToHundred"
            label="0-100"
          />
          <NumberInput
            v-model="form.stats.topSpeed"
            label="Top Speed"
          />
          <InputControl
            v-model="form.stats.shareCode"
            label="Share Code"
          />
        </div>
      </div>
    </div>
  </section>
</template>
