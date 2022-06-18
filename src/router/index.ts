import { createRouter, createWebHashHistory } from 'vue-router';
import CarSettingsForm from '../components/CarSettingsForm.vue';
import MakesAndModels from '../components/MakesAndModels.vue';
import TuneCalculator from '../components/tune-calculator/TuneCalculator.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/formatter' },
    { path: '/formatter/:base64Tune?', component: CarSettingsForm },
    { path: '/calculator', component: TuneCalculator },
    { path: '/cars', component: MakesAndModels },
    { path: '/:pathMatch(.*)*', redirect: '/formatter' },
  ],
});

export default router;
