
import React from 'react'; 
import '../App.css';

import Card from '../components/Card'; // Assuming Card is in the components folder

const products = [
  { name: "Product 1", price: 100, rating: 4.3 },
  { name: "Product 2", price: 200, rating: 3.9 },
  { name: "Product 3", price: 300, rating: 4.5 },
  { name: "Product 4", price: 400, rating: 4.7 },
  { name: "Product 5", price: 500, rating: 3.8 },
  { name: "Product 6", price: 600, rating: 4.0 },
  { name: "Product 7", price: 600, rating: 4.1 },
  { name: "Product 8", price: 600, rating: 4.6},
];

const Cart = () => {
  


  
  const totalCartValue = products.reduce((total, item) => total + item.price, 0);
  return (
    <div className="containerStyle">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold  text-color1">Your Cart</h1>
        <h1 className="text-2xl font-bold text-color1">Products in Cart</h1>
        <div className='total'>
        Totalvalue:  ₹{totalCartValue}
      </div>
      </div>
    
      
      <div className="flex flex-row flex-wrap gap-6 justify-center">
        {products.map((product, index) => (
          
          <Card
            key={index}
            item={ {product} } 
            
           
          />
        ))}
      </div>
      
    </div>
  );
};

export default Cart;
