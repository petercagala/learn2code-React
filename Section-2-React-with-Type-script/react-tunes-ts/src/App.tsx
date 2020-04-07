import React from 'react';
import logo from './img/logo.svg';
import './App.scss';
import { Switch, Link, NavLink, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
      {/* NavLink je specialna verzia Link komponentu 
      NavLink: pridava class="active", ak sme na vygenerovanej podstranke
      */}
        <nav>
          <NavLink to='/' exact>Home Page</NavLink>
          <NavLink to='/tunes'>Tunes</NavLink>
          <NavLink to='/about'>About</NavLink>
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
           <Route path="/" render={() => <h1>Home page</h1>} exact></Route>
            <Route path="/tunes" render={() => (
                <div>
                  <p>
                      <Link to="/">Go Home</Link>
                  </p>
                  <p>
                    <a href="/">Go home with refresh: a  element</a>
                  </p>
                  <h1>Tunes</h1>
                </div>
            )
            }></Route>
          <Route path="/about" render={() => <h1>About</h1>}></Route>
        </Switch>
      </main>

      <footer>
         <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}


export default App;
