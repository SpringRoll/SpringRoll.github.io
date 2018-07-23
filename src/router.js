import Vue from 'vue';
import Router from 'vue-router';

import Example from '@/views/Example';
import Main from '@/views/Main';
import Docs from '@/views/Docs';
import CaptionStudio from '@/views/Captions';

// Example views
import ExampleMain from '@/views/examples/main.vue';
import SpeechSynth from '@/views/examples/SpeechSynth';
import ColorFilter from '@/views/examples/ColorFilter';
import ScaleManager from '@/views/examples/ScaleManager';
import Controls from '@/views/examples/Controls';

export const routes = [
  { path: '/', name: 'home', component: Main, title: 'Main', icon: 'home' },
  { path: '/docs', name: 'docs', component: Docs, title: 'Docs', icon: 'code' },
  {
    path: '/captions',
    name: 'captions',
    component: CaptionStudio,
    title: 'Caption Studio',
    icon: 'code'
  },
  {
    path: '/examples',
    name: 'examples',
    component: Example,
    title: 'Examples',
    icon: 'stars',
    children: [
      {
        path: '',
        component: ExampleMain
      },
      {
        path: 'speech-synth',
        name: 'SpeechSynth',
        component: SpeechSynth
      },
      {
        path: 'color-filter',
        name: 'ColorFilter',
        component: ColorFilter
      },
      {
        path: 'resize',
        name: 'Resize',
        component: ScaleManager
      },
      {
        path: 'controls',
        name: 'Controls',
        component: Controls
      }
    ]
  }
];

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Main, title: 'Main', icon: 'home' },
    {
      path: '/docs',
      name: 'docs',
      component: Docs,
      title: 'Docs',
      icon: 'code'
    },
    {
      path: '/captions',
      name: 'captions',
      component: CaptionStudio,
      title: 'Caption Studio',
      icon: 'code'
    },
    {
      path: '/examples',
      component: Example,
      title: 'Examples',
      icon: 'stars',
      children: [
        {
          path: '',
          name: 'examples-home',
          component: ExampleMain
        },
        {
          path: 'speech-synth',
          name: 'SpeechSynth',
          component: SpeechSynth
        },
        {
          path: 'color-filter',
          name: 'ColorFilter',
          component: ColorFilter
        },
        {
          path: 'resize',
          name: 'Resize',
          component: ScaleManager
        },
        {
          path: 'controls',
          name: 'Controls',
          component: Controls
        }
      ]
    }
  ]
});
