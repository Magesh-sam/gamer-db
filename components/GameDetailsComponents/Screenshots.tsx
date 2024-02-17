import { IScreenschots } from '@/lib/types';
import Image from 'next/image';
import React, { FC } from 'react';

const Screenshots: FC<IScreenschots> = ({ screenshots }) => {
  return (
    <section className="flex flex-wrap gap-x-3 gap-y-2 mt-3">
      {screenshots.map((screenshot) => (
        <Image
          src={screenshot.image}
          width={screenshot.width}
          height={screenshot.height}
          key={screenshot.id}
          alt={`screenshot-${screenshot.id}`}
          className="rounded-md w-[300px] aspect-[16/9]  hover:opacity-80 hover:scale-90 hover:z-50 hover:cursor-crosshair  transition-all duration-500 "
        />
      ))}
    </section>
  );
};

export default Screenshots;
