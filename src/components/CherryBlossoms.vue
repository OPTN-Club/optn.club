<script setup lang="ts">
const rand = (min: number, max: number) => Math.random() * (max - min) + min;

// 28 petals with fully randomised properties for a natural, non-repeating feel
const petals = Array.from({ length: 28 }, (_, i) => {
  const duration = rand(10, 19);
  return {
    id: i,
    left: `${rand(0, 100)}vw`,
    size: `${rand(8, 18)}px`,
    duration: `${duration}s`,
    // Negative delay so petals are already mid-fall on load; spread across the full duration
    delay: `${-rand(0, duration)}s`,
    drift: `${rand(-80, 80).toFixed(1)}px`,
    sway: `${rand(20, 60).toFixed(1)}px`,
    swayDuration: `${rand(2, 5)}s`,
    opacity: `${rand(0.35, 0.8)}`,
    blur: Math.random() > 0.75 ? '1px' : '0px',
    rotate: `${rand(0, 360)}deg`,
  };
});
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
        '--duration': petal.duration,
        '--delay': petal.delay,
        '--drift': petal.drift,
        '--sway': petal.sway,
        '--sway-duration': petal.swayDuration,
        '--opacity': petal.opacity,
        '--blur': petal.blur,
        '--rotate': petal.rotate,
      }"
    />
  </div>
</template>
