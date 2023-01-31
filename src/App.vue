<template>
  <div class="wrapper">
    <div class="header-image z-0">
      <img
        class="invisible"
        src="/images/OPTN_header_car.png"
        alt="OPTN Car"
      >
    </div>
    <div class="z-10">
      <AppHeader />
      <div class="grow mt-56 mx-4 md:mx-9 lg:mx-14">
        <router-view />
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>
