<script setup lang="ts">
import { ChartData } from './types';
import ChartRow from './ChartRow.vue';

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
  <section>
    <h1>Tuning Troubleshooting Chart</h1>
  </section>
  <section class="tune-chart">
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
  </section>
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
    flex-col
    items-stretch
    gap-4;
}

@screen md {
  .chart-row {
    @apply
      flex-row;
  }

  /* .ts-corner + .ts-corner,
  .ts-speed + .ts-speed {
    @apply
      ml-4;
  } */
}

.ts-corner {
  @apply
    flex
    flex-col
    grow
    min-w-[230px];
}

.ts-corner-content {
  @apply
    flex
    flex-wrap
    lg:flex-nowrap
    items-stretch
    border
    border-optn-blue-500
    rounded-xl
    p-4
    grow
    gap-4;
}

.ts-speed {
  @apply
    flex
    flex-col
    grow
    ;
}

.ts-speed .ts-border {
  @apply
    bg-optn-blue-800
    text-white;
}

.ts-panel {
  @apply
    flex
    flex-col
    grow
    max-w-full;
}

.chart-list {
  @apply
    bg-optn-blue-dark
    rounded-xl
    p-4
    text-offwhite
    ;
}

.chart-list li + li {
  @apply
    mt-4;
}

.tune-chart p {
  @apply
    text-white;
}

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
