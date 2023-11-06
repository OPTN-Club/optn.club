<script setup lang="ts">
import { useRouter } from 'vue-router';

import GlobalUnitSelect from '../../GlobalUnitSelect.vue';

import FMCarStatsForm from './FMCarStatsForm.vue';
import FMFormattedTuneTextarea from './FMFormattedTuneTextarea.vue';
import FMPerformanceUpgradesForm from './FMPerformanceUpgradesForm.vue';
import FMTuneSetupForm from './FMTuneSetupForm.vue';
import { useFMFormattingFormProvider } from './useFMFormattingForm';

const props = defineProps<{
  version: string;
  encodedForm?: string;
}>();

const {
  globalUnit,
  convertOnUnitChange,
} = useFMFormattingFormProvider(props);

const router = useRouter();
</script>

<template>
  <h1>Forza Motorsport<br> TUNE FORMATTER</h1>
  <p class="sub-title">
    Create and share your tune.
    This tool will automatically create an easy-to-read
    format you can share on our subreddit.
  </p>

  <div class="flex flex-col md:flex-row items-start">
    <!-- <pre>
      Peformance:

      Fuel and Air
        Exhaust
        Air Filter
        Restrictor Plate
        Fuel System
        Ignition
        Single Turbo
        Intercooler
      Engine
        Oil and Cooling
        Flywheel
        Camshaft
        Valves
        Displacement
        Pistons and Compression
      Platform and Handling
        Brakes
        Chassis Reinforcement and Roll Cage
        Ballast
        Front Anti-roll Bars
        Rear Anti-roll Bars
        Spring and Dampers
        Weight Reduction
      Tires
        Front Tire Width
        Rear Tire Width
        Tire Compound
      Wheels
        Free entry
      Drivetrain
        Clutch
        Transmission
        Differential
        Driveline
      Aero and Appearance
        Rear Wing
        Front Bumper
        Rear Bumper
        Hood
      Conversion
        Engine Swap
        Drivetrain Swap

      Tune Setup:

      Tires
      Gearing
      Alignment
      Anti-roll Bars
      Springs
      Damping
      Suspension Geometry
      Aero
      Brake
      Differential
      Steering Wheel
    </pre> -->
    <form class="grow">
      <GlobalUnitSelect
        v-model:global-unit="globalUnit"
        v-model:convertOnUnitChange="convertOnUnitChange"
      />
      <FMCarStatsForm />
      <FMPerformanceUpgradesForm />
      <FMTuneSetupForm />
    </form>
    <FMFormattedTuneTextarea />
  </div>
</template>
