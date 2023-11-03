<script setup lang="ts">
import { reactive, watch } from 'vue';

import { useFormattingForm } from '../../lib/useFormattingForm';
import InputControl from '../InputControl.vue';

const { form } = useFormattingForm();

const shareCodes = reactive({
  tune: '',
  vinyl: '',
});

watch(() => form.stats.shareCode, (current) => {
  const codes = current.split(',');
  shareCodes.tune = codes[0] || '';
  shareCodes.vinyl = codes[1] || '';
}, { immediate: true });

watch(shareCodes, (current) => {
  const combined = `${current.tune},${current.vinyl}`;
  form.stats.shareCode = combined;
});
</script>

<template>
  <section>
    <div class="heading">
      <h2>Sharing is caring</h2>
      <p>Get credit for your hard work</p>
    </div>

    <div class="grow">
      <div class="content">
        <div class="set-upgrades">
          <InputControl
            v-model="shareCodes.tune"
            label="Tune Share Code"
            note="(optional)"
          />
          <InputControl
            v-model="shareCodes.vinyl"
            label="Livery Share Code"
            note="(optional)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
