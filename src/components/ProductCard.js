import React from 'react';

const ProductCard = ({ product, addToCart, removeFromCart, isInCart }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Rate: ${product.rate}</p>
      <p>Stars: {product.stars}</p>
      {isInCart ? (
        <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
