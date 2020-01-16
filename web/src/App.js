import React, {useState} from 'react';
import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
//componenete -> APP é uma função que retorna contudo (HTML, CSS, JS) "isolado" timeline do facebook, não afeta o resto da aplicação
//estado -> informação que o componente vai manipular, imutabilidade
//propriedade -> atributos html (titulos), informação que o componente pai passa para o filho

function App() { //componente pai
   return ( 
   
   <div id="app">
     <aside>
       <strong>Registar</strong>
       <form>
       <div class="input-block">
         <label htmlFor="github_username">username Github</label>
         <input name="github_username" id="github_username" required/>
         </div>

         <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
         </div>

         <div className="input-group">
         <div class="input-block">
            <label htmlFor="latitude">latitude</label>
            <input name="latitude" id="latitude" required/>
         </div>

         <div class="input-block">
            <label htmlFor="longitude">longitude</label>
            <input name="longitude" id="longitude" required/>
         </div>
         </div>
         <button type="submit">Save</button>
       </form>
     </aside>

     <main>
       <ul>
         <li className="dev-item">
           <header>
             <img src="https://avatars1.githubusercontent.com/u/9994919?s=460&v=4" alt=""/>
             <div className="user-info">
              <strong>Leandro Sousa</strong>
              <span>ReactJS, React Native, Node.js</span>
              <p>Cenas muito maradex</p>
              <a href="https://github.com/leandrofrs">Perfil github</a>
             </div>
           </header>
         </li> 
         <li className="dev-item">
           <header>
             <img src="https://avatars1.githubusercontent.com/u/9994919?s=460&v=4" alt=""/>
             <div className="user-info">
              <strong>Leandro Sousa</strong>
              <span>ReactJS, React Native, Node.js</span>
              <p>Cenas muito maradex</p>
              <a href="https://github.com/leandrofrs">Perfil github</a>
             </div>
           </header>
         </li>         
         <li className="dev-item">
           <header>
             <img src="https://avatars1.githubusercontent.com/u/9994919?s=460&v=4" alt=""/>
             <div className="user-info">
              <strong>Leandro Sousa</strong>
              <span>ReactJS, React Native, Node.js</span>
              <p>Cenas muito maradex</p>
              <a href="https://github.com/leandrofrs">Perfil github</a>
             </div>
           </header>
         </li>         
         <li className="dev-item">
           <header>
             <img src="https://avatars1.githubusercontent.com/u/9994919?s=460&v=4" alt=""/>
             <div className="user-info">
              <strong>Leandro Sousa</strong>
              <span>ReactJS, React Native, Node.js</span>
              <p>Cenas muito maradex</p>
              <a href="https://github.com/leandrofrs">Perfil github</a>
             </div>
           </header>
         </li>
       </ul>
     </main>
   </div>
  );
}

export default App;
