import { createRouter, createWebHashHistory } from 'vue-router';
import CarSettingsForm from '../components/CarSettingsForm.vue';
import MakesAndModels from '../components/MakesAndModels.vue';
import TuneCalculator from '../components/tune-calculator/TuneCalculator.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'formatter', path: '/formatter/:base64Tune(.*)?', component: CarSettingsForm },
    { name: 'calculator', path: '/calculator', component: TuneCalculator },
    { name: 'cars', path: '/cars', component: MakesAndModels },
    { name: 'redirection', path: '/:pathMatch(.*)*', redirect: '/formatter' },
  ],
});

export default router;
