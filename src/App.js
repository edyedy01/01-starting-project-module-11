import React from 'react';
import Header from './components/layout/Header.js'
import Meals from './components/meals/Meals.js';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
