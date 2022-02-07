<script setup lang="ts">import { computed } from 'vue';
import { formatTune } from '../lib/generator';
import { SettingsForm } from '../lib/types';

const props = defineProps<{
  form: SettingsForm;
}>();

const text = computed(() => formatTune(props.form.tune).join('\n'));

</script>
<template>
  <section>
    <div class="column actions">
      <!-- <button type="submit" class="large w-full mb-4">Generate</button> -->
      <textarea :value="text" readonly class="formatted-text" rows="10" cols="25"></textarea>
      <button type="button" class="w-full mt-4 mb-10">Copy To Clipboard</button>
    </div>
  </section>
</template>
