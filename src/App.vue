
<template>
  <div class="wrapper">
    <AppHeader />
    <TuneSettingsForm />
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { reactive, ref } from 'vue';
import AppHeader from './components/AppHeader.vue'
import NumberInput from './components/NumberInput.vue';
import TuneSettingsForm from './components/TuneSettingsForm.vue';

</script>
