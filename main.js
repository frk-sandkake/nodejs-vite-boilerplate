import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <figure>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <figcaption><em>vite docs</em></figcaption>
    </figure>
    <figure>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <figcaption><em>mozillas JS docs</em></figcaption>
    </figure>
    <h1>Setup guides for vite-projects!</h1>
    <p><em>for Vanilla JS, using command-lines in terminal</em></p>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <article>
    <h2>Creating a new vite-project with npm</h2>
    <h3>Step1: Open folder in terminal</h3>
    <p>
    Open your terminal/powershell/cli and <code>cd .&#92path&#92to&#92folder&#92</code>  to the folder/directory you want to create your new vite-project. 
    </p>
    <p> 
    <code> .&#92 </code> is a path-shortcut, refering to the directory you're in now. 
    <details>
    <summary>See example with path-shortcut:</summary>
     <pre>
        <code>
            cd .&#92folder&#92folder_to_create_new_vite-project&#92  
           // same as: cd C:&#92Users&#92user_profile&#92folder&#92folder_to_create_new_vite-project&#92
        </code>
    </pre>
    </details> 
    </p>
    <h3>Step 2: Creating the new vite project</h3>
    <p>
    Running <code>npm create vite@latest</code> in your terminal will make a new folder.
    <br><br>
    Follow the instructions in terminal to create your new vite project: 
    </p>
    <pre>
        <code>
            Project name: // write name of your project, will also name the folder
            Select a framework: // press enter to choose Vanilla 
            Select a variant: // press enter to choose JavaScript
            // before finishing the instructions, do step 3..  
        </code>
    </pre>
    <h3>Step 3: Open the project in your favorite code editor</h3>
    <p>You will now see that vite has created this:</p>
        <table>
     <caption>Personal pronouns</caption>
      <tr>
       <td colspan="3">&nbsp;</td>
       <th scope="col">Content</th>
       <th scope="col">Use</th>
      </tr>
      <tr>
       <th rowspan=1" scope="rowgroup">Folders</th>
       <th colspan="2" scope="row">public</th>
       <td>vite.svg</td>
       <td>it's vitesjs logo</td>
      </tr>
       <tr>
       <th rowspan="7" scope="rowgroup">Files</th>
       <th colspan="2" scope="row">.gitignore</th>
       <td>we</td>
       <td>we</td>
      </tr>
      <tr>
       <th colspan="2" scope="row">counter.js</th>
       <td>you</td>
       <td>you</td>
      </tr>
      <tr>
       <th colspan="2" scope="row">index.html</th>
       <td>they</td>
       <td>they</td>
      </tr>
      <tr>
       <th colspan="2" scope="row">main.js</th>
       <td>you</td>
       <td>you</td>
      </tr>
      <tr>
       <th rowspan="1" scope="rowgroup">package.json</th>
       <th class="symbol" scope="row">♂</th>
       <td>he</td>
       <td>him</td>
      </tr>
      <tr>
       <th class="symbol" scope="row">style.css</th>
       <td>she</td>
       <td>her</td>
      </tr>
      <tr>
       <th class="symbol" scope="row">javascript.svg</th>
       <td>it</td>
       <td>it</td>
      </tr>
     
    </table>
    
    <pre>
        <code>
            // delete this from ./npm-vite-boilerplate/main.js
            import { setupCounter } from './counter.js'
        </code>
    </pre>
    </article>
    <article>
    <h2>Installing tailwindcss, postcss and autoprefixer</h2>
    <pre>
        <code>
         npm install -d tailwindcss postcss autoprefixer
            // check for packages in package.json, under dependencies or devDependencies
        </code>
    </pre>  
    <pre>
        <code>
         npx tailwindcss init -p
           // Created Tailwind CSS config file: tailwind.config.cjs
           // Created PostCSS config file: postcss.config.cjs
           // change .cjs to .js and remove "type": "module",
        </code>
    </pre>
    </article>
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
