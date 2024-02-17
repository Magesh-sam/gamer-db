import { GameSeriesProps } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const GameSeriesCard:FC<GameSeriesProps> = ({  name, slug, background_image }) => {
  return (
      <div className='w-[300px] relative group'>
      <Image src={background_image} alt={name} width={1920} height={1080} placeholder='blur' blurDataURL={background_image} className='rounded-md w-[300px] h-auto aspect-[16/9] group-hover:opacity-90' />
      <Link  href={`/${slug}`} className='absolute bottom-0 left-0 right-0 px-3 py-1  backdrop-blur-md drop-shadow-lg bg-primary/30 group-hover:bg-primary group-hover:text-black transition-all duration-300'>{name}</Link>
    </div>
  )
}

export default GameSeriesCard