import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import TuneFormatter from '../components/formatter/TuneFormatter.vue';
import MakesAndModels from '../components/MakesAndModels.vue';
import TuningChart from '../components/chart/TuningChart.vue';
import TuneCalculator from '../components/tune-calculator/TuneCalculator.vue';

const history = import.meta.env.NODE_ENV === 'github'
  ? createWebHashHistory(import.meta.env.BASE_URL)
  : createWebHistory(import.meta.env.BASE_URL);

const router = createRouter({
  history,
  routes: [
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
    { path: '/', redirect: '/formatter' },
  ],
});

export default router;
