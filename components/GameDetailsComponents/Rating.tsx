import { IRating } from '@/lib/types';
import React, { FC } from 'react';

const Rating: FC<IRating> = ({ ratings }) => {
  const w1 = `${Math.floor(ratings[0].percent)}`;
  const w2 = `${Math.floor(ratings[1].percent)}`;
  const w3 = `${Math.floor(ratings[2].percent)}`;
  return (
    <div className=" flex  w-full   mb-3 overflow-x-auto ">
      <span
        title={`${w1}%`}
        style={{ width: `${w1}rem` }}
        className={' text-sm p-1   bg-green-500'}
      >
        Exceptional{' '}
      </span>
      <span
        title={`${w2}%`}
        style={{ width: `${w2}rem` }}
        className={'   text-sm p-1  bg-yellow-500'}
      >
        Recommended{' '}
      </span>
      <span
        title={`${w3}%`}
        style={{ width: `${w3}rem` }}
        className={'    text-sm p-1  bg-red-500'}
      >
        Meh
      </span>
  
    </div>
  );
};

export default Rating;
