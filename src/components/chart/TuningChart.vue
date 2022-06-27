<script setup lang="ts">
import { ChartData } from './types';
import ChartRow from './ChartRow.vue';

const props = defineProps<{

}>();

const data: ChartData = {
  understeer: {
    entry: {
      high: [
        'Reduce front ride height',
        'Increase front aero',
        'Move brake bias back',
        'Decrease rear differential deceleration',
        'Decrease rear differenttial preload**',
      ],
      medToLow: [
        'Increase caster*',
        'Increase toe-out (positive toe)',
        'Reduce front ride height',
      ],
    },
    mid: {
      all: [
        'Soften front springs',
        'Increase front rebound damping',
        'Reduce front ride height',
        'Soften front ARB',
        'Reduce front bump damping',
        'Increase front camber',
      ],
    },
    exit: {
      all: [
        'Increase front rebound damping',
      ],
    },
  },
  oversteer: {
    entry: {
      all: [
        'Increase rear differential deceleration',
        'Increase rear differential preload**',
        'Move brake bias forward',
      ],
    },
    mid: {
      high: [
        'Increase rear damping',
        'Increase rear downforce',
      ],
      medToLow: [
        'Soften rear springs',
        'Soften rear ARB',
        'Reduce rear ride height',
        'Increase rear bump damping',
        'Decrease rear rebound damping',
      ],
    },
    exit: {
      all: [
        'Reduce rear ride height',
        'Increase rear bump damping',
        'Decrease rear rebound damping',
        'Decrease rear differential acceleration',
        'Increase toe-in (negative toe)',
      ],
    },
  },
};

</script>
<template>
  <div class="tune-chart">
    <ChartRow label="To Fix Understeer" :data="data.understeer" />
    <ChartRow
      class="mt-8"
      label="To Fix Oversteer"
      :data="data.oversteer"
    />
    <div class="mt-2">
      <div><span class="asterisk">*</span> Available only in Forza</div>
      <div><span class="asterisk">**</span> Available only in Gran Turismo</div>
    </div>
  </div>
</template>

<style>
.asterisk {
  @apply
    text-optn-red
    font-bold
    text-lg
    leading-4;
}

.tune-chart {
  @apply
    flex
    flex-col
    items-stretch
    text-white
    p-6;
}

.chart-row {
  @apply
    flex
    items-stretch;
}

.ts-corner {
  @apply
    flex
    flex-col;
}

.ts-corner + .ts-corner,
.ts-speed + .ts-speed {
  @apply
    ml-4;
}

.ts-corner-content {
  @apply
    flex
    border
    border-fot-blue
    rounded-xl
    p-4
    h-full
    ;
}

.ts-speed {
  @apply
    flex
    flex-col;
}

.ts-speed .ts-border {
  @apply
    bg-fot-blue-dark;
}

.ts-panel {
  @apply
    flex
    flex-col
    justify-items-stretch
    h-full;
}

.chart-list {
  @apply
    bg-fot-blue-dark
    rounded-xl
    p-6
    text-offwhite
    w-[225px];
}

.chart-list li + li {
  @apply
    mt-4;
}

.tune-chart p {
  @apply
    text-white;
}

.tune-chart h1,
.tune-chart h2,
.tune-chart h3,
.tune-chart h4,
.tune-chart h5 {
  @apply
    text-offwhite
    font-bold
    text-center
    my-2
    whitespace-nowrap;
}
</style>
