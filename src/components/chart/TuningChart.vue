<script setup lang="ts">
import ChartRow from './ChartRow.vue';
import { ChartData } from './types';

const data: ChartData = {
  understeer: {
    entry: {
      high: [
        'Reduce front ride height',
        'Increase front aero',
        'Move brake bias back',
        'Decrease rear differential deceleration',
      ],
      medToLow: [
        'Increase caster',
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
        'Increase rear toe-in (negative toe)',
      ],
    },
  },
};
</script>
<template>
  <h1>Tuning Chart</h1>
  <p class="sub-title" />
  <div class="mb-6">
    <p>This chart assumes that your base tune has no glaring issues:</p>
    <ul class="list-disc list-outside ml-7 text-yellow">
      <li><span class="text-ghost-white">Be sure your car doesn't bottom out and doesn't roll excessively during cornering.<br></span></li>
      <li><span class="text-ghost-white">Otherwise this chart will create more issues than it solves.</span></li>
    </ul>
  </div>
  <section class="tune-chart">
    <ChartRow
      label="To Fix Understeer"
      :data="data.understeer"
    />
    <ChartRow
      class="mt-8"
      label="To Fix Oversteer"
      :data="data.oversteer"
    />
  </section>
  <section>
    <div class="heading">
      <h3>General Tips</h3>
    </div>
    <div class="grow">
      <ul class="list-disc list-outside  ml-7 text-yellow">
        <li><span class="text-ghost-white">Don't lower the car too much.  A car touching the ground will never handle properly.</span></li>
        <li><span class="text-ghost-white">Increasing damping is an easy way to make the car react quicker to inputs.</span></li>
        <li>
          <span class="text-ghost-white">
            Generally speaking if you need more than 0.2&deg; of toe there are issues elsewhere in the tune.</span>
        </li>
        <li><span class="text-ghost-white">If you lower the car you will need stiffer springs to avoid bottoming out</span></li>
        <li>
          <span class="text-ghost-white">
            If you increase downforce you will need stiffer springs to compensate,
            as well as stiffer damping so the car doesn't feel too heavy in corners.
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
.asterisk {
  @apply
    text-red
    font-bold
    text-lg
    leading-4;
}

.tune-chart {
  @apply
    flex
    flex-col
    items-stretch
    text-ghost-white;
}

.chart-row {
  @apply
    flex
    flex-col
    items-stretch
    gap-6
    /* bg-light-mist
    bg-opacity-5 */
    ;
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
    rounded
    bg-light-mist
    bg-opacity-5
    p-4
    md:p-6
    min-w-[230px];
}

.ts-corner-content {
  @apply
    flex
    flex-wrap
    lg:flex-nowrap
    rounded
    grow
    gap-4
    md:gap-6
    ;
}

.ts-speed {
  @apply
    flex
    flex-col
    grow;
}

/* .ts-speed .ts-border {
  @apply
    ;
} */

/* .ts-panel {
  @apply
    flex
    flex-col
    grow
    max-w-full;
} */

.chart-list {
  @apply
    rounded
    p-4
    md:p-6
    text-ghost-white
    bg-light-mist
    bg-opacity-5
    h-full;
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
    text-center
    mb-4
    md:mb-6
    whitespace-nowrap;
}

.tune-chart h4 {
  @apply text-yellow;
}

</style>
