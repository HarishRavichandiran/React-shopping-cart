import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import './styles/styles.css'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ShoppingCart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
