import Example from '@/pages/Example';
import Main from '@/pages/Main';
import Docs from '@/pages/Docs';

// Example Pages
import ExampleMain from '@/pages/examples/main.vue';
import SpeechSynth from '@/pages/examples/SpeechSynth';
import ColorFilter from '@/pages/examples/ColorFilter';
import ScaleManager from '@/pages/examples/ScaleManager';
import Controls from '@/pages/examples/Controls';

export const routes = [
  { path: '/', name: 'home', component: Main, title: 'Main', icon: 'home' },
  { path: '/docs', name: 'docs', component: Docs, title: 'Docs', icon: 'code' },
  {
    path: '/examples',
    component: Example,
    name: 'examples',
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
];
