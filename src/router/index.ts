import { createRouter, createWebHistory } from 'vue-router';

import AppHome from '../components/AppHome.vue';
import TuningChart from '../components/chart/TuningChart.vue';
import FHFormatter from '../components/formatter/horizon/FHFormatter.vue';
import FH6Formatter from '../components/formatter/horizon6/FH6Formatter.vue';
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
            version: route.params.version,
            encodedForm: route.params.encodedForm,
          }),
        },
        {
          name: 'formatter-fm8',
          path: 'forza/motorsport/:version/:encodedForm?',
          component: FMFormatter,
          props: (route) => ({
            version: route.params.version,
            encodedForm: route.params.encodedForm,
          }),
        },
        {
          name: 'formatter-fh6',
          path: 'forza/horizon6/:version/:encodedForm?',
          component: FH6Formatter,
          props: (route) => ({
            version: route.params.version,
            encodedForm: route.params.encodedForm,
          }),
        },
        {
          path: ':encodedForm?',
          redirect: (to) => ({
            name: 'formatter-fh5',
            params: {
              version: 'v1',
              encodedForm: to.params.encodedForm,
            },

          }),
        },
      ],
    },
    { name: 'tuningchart', path: '/chart', component: TuningChart },
    { name: 'cars', path: '/cars', component: MakesAndModels },
  ],
});

export default router;
