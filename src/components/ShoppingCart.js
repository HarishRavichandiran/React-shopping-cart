import React, { useState } from 'react';
import ProductCard from './ProductCard';

const productsData = [
  { id: 1, name: 'Iphone 11', description: 'Good Smart Phone', rate: 1200, stars: 4.5 },
  { id: 2, name: 'IPHONE 13', description: 'Best Product ', rate: 2000, stars: 3.8 },
  { id: 3, name: 'IPhone 3', description: 'Oldest I phone', rate: 150, stars: 4.2 },
  { id: 4, name: 'Mac book 4', description: 'Best for Designing', rate: 2100, stars: 4.2 },
  { id: 5, name: 'Samsung note 5', description: 'Oldest Android', rate: 80, stars: 4.2 },
  { id: 6, name: 'Xiaomi note 6', description: 'Made in China', rate: 80, stars: 4.2 },
  { id: 7, name: 'Realmi 7', description: 'Made in China', rate: 90, stars: 4.2 },
  { id: 8, name: 'Moto G6', description: 'Best ever', rate: 70, stars: 4.2 },
  { id: 9, name: 'Nokia Lumia 19', description: 'Windows on your phone', rate: 200, stars: 4.2 },
  { id: 10, name: 'Thinkpad L15', description: 'Business class Beast', rate: 500, stars: 4.2 },
  { id: 11, name: 'Huggies Diaper', description: 'For your Baby', rate: 3, stars: 4.2 }
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const isInCart = (product) => {
    return cart.some(item => item.id === product.id);
  };

  return (
    <div>
      <h2>Available Products</h2>
      <div className="product-grid-container">
        <div className="product-grid">
          {productsData.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
              removeFromCart={removeFromCart} 
              isInCart={isInCart(product)} 
            />
          ))}
        </div>
      </div>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
