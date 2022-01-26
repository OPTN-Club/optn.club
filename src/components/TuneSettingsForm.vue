<template>
  <form>
    <section>
      <h2>Tires</h2>
      <div class="row">
        <NumberInput v-model="form.tires.front" label="Front" required min="0.0" step="0.01" />
        <NumberInput v-model="form.tires.rear" label="Rear" required min="0.0" step="0.01" />
        <UnitSelect v-model="form.tires.units" label="Units" type="pressure" />
      </div>
    </section>
    <section>
      <h2>Gearing</h2>
      <NumberInput v-model="form.gears[0]" label="Final Drive" required min="0.0" step="0.01" />
      <div class="gears-grid">
        <NumberInput
          v-for="(value, index) in gears"
          :key="index"
          v-model="form.gears[index + 1]"
          :label="`${index + 1}${suffix(index + 1)}`"
          step="0.01"
        />
      </div>
    </section>

    <section>
      <h2>Alignment</h2>
      <h3>Camber</h3>
      <div class="row">
        <NumberInput v-model="form.camber.front" label="Front" required min="0.0" step="0.01" />
        <NumberInput v-model="form.camber.rear" label="Rear" required min="0.0" step="0.01" />
      </div>
      <h3>Toe</h3>
      <div class="row">
        <NumberInput v-model="form.toe.front" label="Front" required min="0.0" step="0.01" />
        <NumberInput v-model="form.toe.rear" label="Rear" required min="0.0" step="0.01" />
      </div>
      <h3>Front Caster</h3>
      <div class="row">
        <NumberInput v-model="form.caster" label="Angle" required min="0.0" step="0.01" />
      </div>
    </section>

    <section>
      <h2>Antiroll Bars</h2>
      <div class="row">
        <NumberInput v-model="form.arb.front" label="Front" required min="0.0" step="0.1" />
        <NumberInput v-model="form.arb.rear" label="Rear" required min="0.0" step="0.1" />
      </div>
    </section>

    <section>
      <h2>Springs</h2>
      <h3>Tension</h3>
      <div class="row">
        <NumberInput v-model="form.springs.front" label="Front" required min="0.0" step="0.1" />
        <NumberInput v-model="form.springs.rear" label="Rear" required min="0.0" step="0.1" />
        <UnitSelect v-model="form.springs.units" label="Units" type="force" />
      </div>
      <h3>Ride Height</h3>
      <div class="row">
        <NumberInput v-model="form.rideHeight.front" label="Front" required min="0.0" step="0.1" />
        <NumberInput v-model="form.rideHeight.rear" label="Rear" required min="0.0" step="0.1" />
        <UnitSelect v-model="form.rideHeight.units" label="Units" type="height" />
      </div>
    </section>
    <section>
      <h2>Damping</h2>
      <h3>Rebound Stiffness</h3>
      <div class="row">
        <NumberInput v-model="form.damping.front" label="Front" required min="0.0" step="0.1" />
        <NumberInput v-model="form.damping.rear" label="Rear" required min="0.0" step="0.1" />
      </div>
      <h3>Bump Stiffness</h3>
      <div class="row">
        <NumberInput v-model="form.bump.front" label="Front" required min="0.0" step="0.1" />
        <NumberInput v-model="form.bump.rear" label="Rear" required min="0.0" step="0.1" />
      </div>
    </section>
    <section>
      <h2>Aero</h2>
      <h3>Downforce</h3>
      <div class="row">
        <NumberInput v-model="form.aero.front" label="Front" required min="0.0" step="0.1" />
        <NumberInput v-model="form.aero.rear" label="Rear" required min="0.0" step="0.1" />
        <UnitSelect v-model="form.aero.units" label="Units" type="force" />
      </div>
    </section>

    <section>
      <h2>Brakes</h2>
      <h3>Braking Bias</h3>
      <div class="row">
        <NumberInput v-model="form.brake.bias" label="Balance" required min="0" max="100" step="1" />
      </div>
      <h3>Braking Force</h3>
      <div class="row">
        <NumberInput
          v-model="form.brake.pressure"
          label="Pressure"
          required
          min="0"
          max="200"
          step="1"
        />
      </div>
    </section>

    <section>
      <h2>Differential</h2>
      <h3>Front</h3>
      <div class="row">
        <NumberInput
          v-model="form.diff.front.accel"
          label="Acceleration"
          min="0"
          max="100"
          step="1"
        />
        <NumberInput
          v-model="form.diff.front.decel"
          label="Deceleration"
          min="0"
          max="100"
          step="1"
        />
      </div>
      <h3>Rear</h3>
      <div class="row">
        <NumberInput
          v-model="form.diff.rear.accel"
          label="Acceleration"
          min="0"
          max="100"
          step="1"
        />
        <NumberInput
          v-model="form.diff.rear.decel"
          label="Deceleration"
          min="0"
          max="100"
          step="1"
        />
      </div>
      <h3>Center</h3>
      <div class="row">
        <NumberInput v-model="form.diff.center" label="Balance" min="0" max="100" step="1" />
      </div>
    </section>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import NumberInput from './NumberInput.vue';
import UnitSelect from './UnitSelect.vue';

const suffixes = ['th', 'st', 'nd', 'rd'];

function suffix(n: number) {
  const d = (n | 0) % 100;
  return d > 3 && d < 21 ? 'th' : suffixes[d % 10] || 'th';
}

const form = reactive({
  tires: {
    front: '',
    rear: '',
    units: 'psi' as 'psi' | 'bar',
  },
  gears: ['', '', '', '', '', '', '', '', '', '', ''],
  camber: {
    front: '',
    rear: '',
  },
  toe: {
    front: '',
    rear: '',
  },
  caster: '',
  arb: {
    front: '',
    rear: '',
  },
  springs: {
    front: '',
    rear: '',
    units: 'lbs' as 'lbs' | 'kgf' | 'n/mm',
  },
  rideHeight: {
    front: '',
    rear: '',
    units: 'in' as 'in' | 'cm',
  },
  damping: {
    front: '',
    rear: '',
  },
  bump: {
    front: '',
    rear: '',
  },
  aero: {
    front: '',
    rear: '',
    units: 'lbs' as 'lbs' | 'kgf' | 'n/mm',
  },
  brake: {
    bias: '50',
    pressure: '100'
  },
  diff: {
    front: {
      accel: '',
      decel: '',
    },
    rear: {
      accel: '',
      decel: '',
    },
    center: '50',
  }
});

const gears = computed(() => form.gears.slice(1));

</script>
