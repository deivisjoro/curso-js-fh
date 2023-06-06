import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { BreakingbadApp } from "./src/breakingbad/breakingbad.app";

document.querySelector("#app").innerHTML = `
  <div>    
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">App title</h1>
    <div class="card" id="app-content">
      
    </div>
  </div>
`;
const element = document.querySelector('#app-content');
const title = document.querySelector('#app-title');
BreakingbadApp(title, element);
