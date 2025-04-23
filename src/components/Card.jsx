import React from 'react';
import { useLocation } from 'react-router-dom'; 
import '../App.css';

const Card = ({item}) => {
  const location = useLocation(); 

  const currentRoute = location.pathname;

  return (
    <div className='flex flex-col gap-2 items-start justify-start p-4 rounded-md card-color dim'>
      <div className='text text-xl font-semibold'>
        {item.product.name}
      </div>
      <div className='text'>
        PRICE : ₹{item.product.price}
      </div>
      <div className='text'>
        RATING : {item.product.rating} ⭐
      </div>

    
      {currentRoute === '/orders' ? (
        <button className='button1 bg-red-600 text-white hover:bg-red-700'>
         {item.product.rating} 
        </button>
      ) : currentRoute === '/' ? (
        <button className='button1 bg-green-600 text-white hover:bg-green-700'>
          ADD TO CART
        </button>
      ) : currentRoute === '/Cart' ? (
        <button className='button1 bg-red-600 text-white hover:bg-blue-700'>
           REMOVE
        </button>
      ) : (
        <button className='button1 bg-gray-600 text-white hover:bg-gray-700'>
          DEFAULT BUTTON
        </button>
      )}
    </div>
  );
};

export default Card;
