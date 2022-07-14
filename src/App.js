import React from 'react';
import Header from './components/layout/Header.js'
import Meals from './components/meals/Meals.js';
import Cart from './components/cart/Cart.js';

function App() {
  return (
    <React.Fragment>
      <Cart/>
      <Header />
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
