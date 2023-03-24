import React from 'react';

const Card = ({ img_name, name }) => {
  return (
    <div className=''>
      <img className='h-auto max-w-full rounded-lg' src={img_name} alt={name} />
      <div className='px-6 py-4'>
        <div className='mb-2 text-2xl font-bold'>{name}</div>
      </div>
    </div>
  );
};

export default Card;
