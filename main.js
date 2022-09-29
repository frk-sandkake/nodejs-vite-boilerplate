import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
     <pre>
        <code>
            // delete this from ./npm-vite-boilerplate/main.js
            import { setupCounter } from './counter.js'
        </code>
    </pre>
    <pre>
        <code>
        // npx tailwindcss init -p
           // Created Tailwind CSS config file: tailwind.config.cjs
           // Created PostCSS config file: postcss.config.cjs
           // change .cjs to .js and remove "type": "module",
        </code>
    </pre>
    <article>
        <h2>Installing dependencied in cloned repo</h2>
        <p></p>
        <pre>
            <code>
                npm install // will install the project and give you node_modules folder
                npm run build // or what's in the package.json. Will give you dist folder                 
            </code>
        </pre>
    </article>
  </div>
`

setupCounter(document.querySelector('#counter'))
