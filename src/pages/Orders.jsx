import React from 'react'
import CoddedCard from '../components/CoddedCard'; // Assuming you have a Card component
import '../App.css';

const products = [
  { name: "Product 1", price: 100, rating: "Ordered"  },
  { name: "Product 2", price: 200, rating: "Returned" },
  { name: "Product 3", price: 300, rating:"Received" },
  { name: "Product 4", price: 400, rating: "Ordered" },
  { name: "Product 5", price: 500, rating: "Returned" },
  { name: "Product 6", price: 600, rating: "Received" },
  { name: "Product 7", price: 600, rating: "Ordered" },
  { name: "Product 8", price: 600, rating: "Received" },
];

export default function Orders() {
  return (
    <div>
      <div className="containerStyle">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold mb-2 text-color1">Welcome to Our Store</h1>
        <h1 className="text-2xl font-bold text-color1">Home</h1>
      </div>

      
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product, index) => (
          <CoddedCard
            key={index}
            item={{product}}  

      
          />
        ))}
      </div>
    </div>
    </div>
  )
}
