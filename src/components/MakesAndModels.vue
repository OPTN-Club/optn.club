<script setup lang="ts">
import importedCars from '../lib/cars';
import motionRatios from '../lib/motion-ratios.json';

// const props = defineProps<{

// }>();

const cars = importedCars.map((car) => ({
  car,
  matches: motionRatios
    .filter((mr) => mr.make === car.make && (
      car.model.includes(mr.model) || mr.model.includes(car.model)
    ))
    .map((mr) => mr.vehicle)
    .join(', '),
}));

</script>
<template>
  <div class="flex">
    <div>
      <div
        v-for="car in cars"
        :key="car.car.fullname"
        class="flex justify-between"
      >
        <div>{{ car.car.fullname }}</div>
        <div>{{ car.matches }}</div>
      </div>
    </div>

    <div class="ml-4">
      <div
        v-for="mr in motionRatios"
        :key="mr.vehicle"
      >
        {{ mr.vehicle }}
      </div>
    </div>
  </div>
</template>
