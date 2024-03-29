import { GameCardProps } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function GameCard({ slug, name, background_image, genres }: GameCardProps) {
  return (
    <div className="flex flex-col max-w-[300px]">
      <Link
        href={`/${slug}`}
        className="mt-3 text-xl text-primary hover:text-primary/80"
      >
        <Image
          src={background_image || '/placeholder.webp'}
          alt="gamer db logo"
          width={300}
          height={230}
          className=" rounded-sm object-fill w-[300px] h-[230px]"
          placeholder="blur"
          blurDataURL={background_image || '/placeholder.webp'}
        />
        <span className="mt-2">{name}</span>
      </Link>

      {genres?.length > 0 && (
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 mb-3">
          {genres.map((genre) => (
            <Link
              key={genre.id}
              href={genre.slug}
              className="hover:underline underline-offset-4 hover:text-primary text-white/75"
            >
              {genre.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default GameCard;
