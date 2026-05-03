<script setup lang="ts">
// 18 petals with varied sizes, positions, durations and delays for a natural feel
const petals = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${((i * 5.7) + 2) % 100}%`,
  size: `${6 + ((i * 3) % 8)}px`,
  duration: `${8 + ((i * 1.3) % 10)}s`,
  delay: `${-((i * 1.7) % 12)}s`,
  wobble: `${1.5 + ((i * 0.4) % 3)}s`,
  rotation: `${(i * 47) % 360}deg`,
}));
</script>

<template>
  <div
    class="petals-container"
    aria-hidden="true"
  >
    <div
      v-for="petal in petals"
      :key="petal.id"
      class="petal"
      :style="{
        left: petal.left,
        width: petal.size,
        height: petal.size,
        animationDuration: petal.duration,
        animationDelay: petal.delay,
        '--wobble-duration': petal.wobble,
        '--initial-rotation': petal.rotation,
      }"
    />
  </div>
</template>
