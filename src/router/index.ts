import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../components/AppHome.vue';
import TuneFormatter from '../components/formatter/TuneFormatter.vue';
import MakesAndModels from '../components/MakesAndModels.vue';
import TuningChart from '../components/chart/TuningChart.vue';
import TuneCalculator from '../components/tune-calculator/TuneCalculator.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', path: '/', component: AppHome },
    {
      name: 'formatter',
      path: '/formatter/:encodedForm?',
      component: TuneFormatter,
      // props: true,
    },
    { name: 'calculator', path: '/calculator', component: TuneCalculator },
    { name: 'tuningchart', path: '/chart', component: TuningChart },
    { name: 'cars', path: '/cars', component: MakesAndModels },
    { name: 'redirection', path: '/:pathMatch(.*)*', redirect: '/formatter' },
  ],
});

export default router;
