import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import { render } from 'react-dom';

import './styles/app.scss';

import Greetings from './components/Greetings';

const App = () => (
  <div className="wrapper">
    <header>
      <h1>Webpack Study App</h1>
    </header>
    <section>
      <Greetings/>
    </section>
    <footer>
      <p>- Davi Alves</p>
    </footer>
  </div>
);

render(<App />, document.getElementById('root'));