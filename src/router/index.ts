import { createRouter, createWebHistory } from 'vue-router';

import AppHome from '../components/AppHome.vue';
import TuningChart from '../components/chart/TuningChart.vue';
import FHFormatter from '../components/formatter/horizon/FHFormatter.vue';
import FMFormatter from '../components/formatter/motorsport/FMFormatter.vue';
import MakesAndModels from '../components/MakesAndModels.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', path: '/', component: AppHome },
    {
      name: 'formatter',
      path: '/formatter',
      children: [
        {
          name: 'formatter-fh5',
          path: 'forza/horizon5/:version/:encodedForm?',
          component: FHFormatter,
          props: (route) => ({
            game: 'horizon',
            version: route.params.version,
            encodedForm: route.params.encodedForm,
          }),
        },
        {
          name: 'formatter-fm8',
          path: 'forza/motorsport/:version/:encodedForm?',
          component: FMFormatter,
          props: (route) => ({
            game: 'motorsport',
            version: route.params.version,
            encodedForm: route.params.encodedForm,
          }),
        },
      ],
    },
    { name: 'tuningchart', path: '/chart', component: TuningChart },
    { name: 'cars', path: '/cars', component: MakesAndModels },
  ],
});

export default router;
