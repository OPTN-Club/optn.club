<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

const localhost = window.location.hostname === 'localhost';
</script>

<template>
  <div class="wrapper">
    <div class="z-10">
      <AppHeader />
      <div class="grow mx-4 md:mx-9 lg:mx-14">
        <router-view />
      </div>
      <AppFooter />
    </div>
    <!-- <div v-if="localhost" class="fixed top-2 left-2 bg-black opacity-70 px-3 py-2 w-14 text-center font-bold">
      <div class="sm:hidden">XS</div>
      <div class="hidden sm:block md:hidden">Sm</div>
      <div class="hidden md:block lg:hidden">Med</div>
      <div class="hidden lg:block xl:hidden">Lg</div>
      <div class="hidden xl:block 2xl:hidden">XL</div>
      <div class="hidden 2xl:block 3xl:hidden">2XL</div>
      <div class="hidden 3xl:block">3XL</div>
    </div> -->
  </div>
</template>
