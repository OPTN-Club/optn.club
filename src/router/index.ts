import { createRouter, createWebHashHistory } from 'vue-router';
import CarSettingsForm from '../components/CarSettingsForm.vue';
import TuneCalculator from '../components/tune-calculator/TuneCalculator.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: CarSettingsForm },
    { path: '/calculator', component: TuneCalculator },
  ],
});

export default router;
