import { createRouter, createWebHistory } from 'vue-router';
import CarSettingsForm from '../components/CarSettingsForm.vue';
import TuneCalculator from '../components/tune-calculator/TuneCalculator.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: CarSettingsForm },
    { path: '/calculator', component: TuneCalculator },
  ],
});

export default router;
