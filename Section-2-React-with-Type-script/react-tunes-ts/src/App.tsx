import React from 'react';

// styles, assets
import logo from './img/logo.svg';
import './App.scss';

// component
import { Switch, Link, NavLink, Route } from 'react-router-dom';
import TheNavigation from "./components/TheNavigation";

// views
import Home from "./views/Home";
import Tunes from "./views/Tunes";
import About from "./views/About";

function App() {
  return (
    <div className="App">
      <header>
      {/* NavLink je specialna verzia Link komponentu 
      NavLink: pridava class="active", ak sme na vygenerovanej podstranke
      */}
        <nav>
          <TheNavigation brand="main" howMany={56}/>
        </nav>
      </header>

      {/* Hlavny obsah podstranky sa ma zobrazit tu: importnem Rout, ktory vie reagovat na adresu:
          Bud tam bachnem dalsi komponent, alebo nejaky vyrenderujem
      */}
      <main className="content">
      {/* Switch zobrazi prvu, pre ktoru podmienka plati, cize musis pridat exact atribut 
      exact : znamena, ze len vtedy, ak je to presne cesta, teda v tomto pripdate presne lomitko
      ak v adrese chcem zachytit aj nieco ine, ako znenie adresy, nepouzi exact
      */}
        <Switch>
           <Route path="/" component={Home} exact></Route>
            <Route path="/tunes" component={Tunes}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </main>

      <footer>
        <TheNavigation brand="footerBrand" howMany={45}/>
      </footer>

    </div>
  );
}


export default App;
