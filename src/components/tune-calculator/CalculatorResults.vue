<script setup lang="ts">import { computed } from 'vue';
import { FrontRear, TuneCalculatorResult } from '../../lib/tune-calculator';

const props = defineProps<{
  tune: TuneCalculatorResult;
}>();

function formatFrontRear(value: FrontRear, precision = 1) {
  return {
    front: value.front.toFixed(precision),
    rear: value.rear.toFixed(precision),
  };
}

const formatted = computed(() => ({
  arbs: formatFrontRear(props.tune.arbs),
  springs: formatFrontRear(props.tune.springs),
  rebound: formatFrontRear(props.tune.rebound),
  bump: formatFrontRear(props.tune.bump),
  brakeBalance: props.tune.brakeBalance.toFixed(0),
  centerDiff: props.tune.centerDiff.toFixed(0),
}));

</script>
<template>
  <div class="calculator-results">
    <div class="sticky top-[70px]">
      <h3 class="text-center">Results</h3>

      <table class="hidden sm:table sm:text-lg text-white mx-auto">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Front</th>
            <th>&nbsp;</th>
            <th>Rear</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>ARB's</th>
            <td>{{ formatted.arbs.front }}</td>
            <td>&nbsp;</td>
            <td>{{ formatted.arbs.rear }}</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>Springs</th>
            <td>{{ formatted.springs.front }}</td>
            <td class="unit">kgf</td>
            <td>{{ formatted.springs.rear }}</td>
            <td class="unit">kgf</td>
          </tr>
          <tr>
            <th>Rebound</th>
            <td>{{ formatted.rebound.front }}</td>
            <td>&nbsp;</td>
            <td>{{ formatted.rebound.rear }}</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>Bump</th>
            <td>{{ formatted.bump.front }}</td>
            <td>&nbsp;</td>
            <td>{{ formatted.bump.rear }}</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>Brake Balance</th>
            <td>{{ formatted.brakeBalance }}</td>
            <td colspan="3" class="unit">%</td>
          </tr>
          <tr>
            <th>Center Diff</th>
            <td>{{ formatted.centerDiff }}</td>
            <td colspan="3" class="unit">%</td>
          </tr>
        </tbody>
      </table>
      <table class="sm:hidden sm:text-lg text-white mx-auto">
        <tbody>
          <tr class="header-row">
            <th colspan="3">ARB's</th>
          </tr>
          <tr>
            <th>Front</th>
            <td>{{ formatted.arbs.front }}</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>Rear</th>
            <td>{{ formatted.arbs.rear }}</td>
            <td>&nbsp;</td>
          </tr>
          <tr class="header-row">
            <th colspan="3">Springs</th>
          </tr>
          <tr>
            <th>Front</th>
            <td>{{ formatted.springs.front }}</td>
            <td class="unit">kgf</td>
          </tr>
          <tr>
            <th>Rear</th>
            <td>{{ formatted.springs.rear }}</td>
            <td class="unit">kgf</td>
          </tr>
          <tr class="header-row">
            <th colspan="3">Rebound</th>
          </tr>
          <tr>
            <th>Front</th>
            <td>{{ formatted.rebound.front }}</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>Rear</th>
            <td>{{ formatted.rebound.rear }}</td>
            <td>&nbsp;</td>
          </tr>
          <tr class="header-row">
            <th colspan="3">Bump</th>
          </tr>
          <tr>
            <th>Front</th>
            <td>{{ formatted.bump.front }}</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <th>Rear</th>
            <td>{{ formatted.bump.rear }}</td>
            <td>&nbsp;</td>
          </tr>
          <tr class="header-row">
            <th colspan="3">Brake Balance</th>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>{{ formatted.brakeBalance }}</td>
            <td class="unit">%</td>
          </tr>
          <tr class="header-row">
            <th colspan="3">Center Diff</th>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>{{ formatted.centerDiff }}</td>
            <td class="unit">%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.calculator-results {
  @apply
    bg-fot-blue-darkest
    grow
    /* sticky
    top-[70px] */
    border-b
    border-gray-500
    sm:border-b-0
    sm:relative
    sm:top-0
    sm:ml-8;
}

th, td {
  @apply
    text-right
    px-2
    border-b
    border-gray-500;
}

td.unit {
  @apply
    text-left
    px-0;
}

thead th {
  @apply
    border-0;
}

thead tr:last-child th {
  @apply
    border-b-2;
}

thead th,
tbody tr:last-child th,
tbody tr:last-child td {
  @apply
    border-b-0;
}

.header-row th {
  @apply text-center;
}
</style>
