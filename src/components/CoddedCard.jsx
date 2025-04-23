import React from 'react';

import '../App.css';

const Card = ({item}) => {
 let bgcolor='';
 switch(item.product.rating)

{
    case 'Ordered':bgcolor='bg-yellow-300';
    break;
    case 'Returned':bgcolor='bg-red-600';
    break;
    case 'Received' :bgcolor='bg-green-700';
    break;
    default:bgcolor='bg-gray-600';
    break;
}




  return (
    <div className={`flex flex-col gap-2 items-start justify-start p-4 rounded-md card-color1 dim ${bgcolor}`}>
      <div className='text text-xl font-semibold'>
        {item.product.name}
      </div>
      <div className='text'>
        PRICE : ₹{item.product.price}
      </div>
   

      <div className='status'>
      STATUS: {item.product.rating}
      </div>

    
       

    
      </div>
  );
};

export default Card;
