import React from 'react';
import Header from './components/layout/Header.js'
import Meals from './components/meals/Meals.js';
import Cart from './components/cart/Cart.js';
import { useState } from 'react';
import CartProvider from './store/CartProvider.js';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown &&  <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
