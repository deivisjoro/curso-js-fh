import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { environmentsComponent } from './src/concepts/01-environments';
import { callbacksComponent } from './src/concepts/02-1-callbacks';
import { callbacksHellComponent } from './src/concepts/02-2-callbacks-hell';
import { promisesComponent } from './src/concepts/03-1-promises';
import { promisesHellComponent } from './src/concepts/03-2-promises-hell';
import { promisesLinkComponent } from './src/concepts/03-3-promises-link';
import { promisesAllComponent } from './src/concepts/03-4-promises-all';
import { promisesRaceComponent } from './src/concepts/03-5-promises-race';
import { asyncComponent } from './src/concepts/04-1-async';
import { asyncAwaitComponent } from './src/concepts/04-2-async-await';
import { asyncAwaitNoSecuentialComponent } from './src/concepts/04-3-async-await-no-secuential';
import { forAwaitComponent } from './src/concepts/04-4-for-await';
import { generatorFunctionComponent } from './src/concepts/05-1-generator-function';
import { generatorFunctionAsyncComponent } from './src/concepts/05-2-generator-function-async';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite! con Vanilla</h1>
    <div class="card">
      
    </div>
  </div>
`;

const element = document.querySelector('.card');
// environmentsComponent(element);
// callbacksComponent(element);
// callbacksHellComponent(element);
// promisesComponent(element);
// promisesHellComponent(element);
// promisesLinkComponent(element);
// promisesAllComponent(element);
// promisesRaceComponent(element);
// asyncComponent(element);
// asyncAwaitComponent(element);
// asyncAwaitNoSecuentialComponent(element);
// forAwaitComponent(element);
// generatorFunctionComponent(element);
generatorFunctionAsyncComponent(element);