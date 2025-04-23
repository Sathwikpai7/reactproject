import React from 'react';
import Card from '../components/Card'; // Assuming you have a Card component
import '../App.css';

const products = [
  { name: "Product 1", price: 100, rating: 4.5 },
  { name: "Product 2", price: 200, rating: 4.0 },
  { name: "Product 3", price: 300, rating: 5.0 },
  { name: "Product 4", price: 400, rating: 4.8 },
  { name: "Product 5", price: 500, rating: 4.2 },
  { name: "Product 6", price: 600, rating: 4.9 },
  { name: "Product 7", price: 600, rating: 4.9 },
  { name: "Product 8", price: 600, rating: 4.9 },
];

const Home = () => {
  return (
    <div className="containerStyle">

      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold mb-2 text-color1">Welcome to Our Store</h1>
        <h1 className="text-2xl font-bold text-color1">Home</h1>
      </div>

      {/* Flex container for wrapping cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product, index) => (
          <Card
            key={index}
            item={{product}}  
            
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
