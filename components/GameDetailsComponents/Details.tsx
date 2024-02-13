import React, { FC } from 'react'

interface IDetails{
    tags: string[];
    platforms: string[];
    released: string;
    rating: number;
}

const Details:FC<IDetails> = ({tags, platforms, released, rating}) => {
  return (
      <section className='flex flex-col gap-2 text-base text-white/90 mb-3'>
          <div className='flex flex-wrap gap-3'>
              <p className='flex items-center'><span className='mr-2 text-primary/90 font-semibold'>Released:</span> {released}</p> <p ><span className='mr-2 text-primary/90 font-semibold'>Rating:</span> {rating}</p>
          </div>
          <div className='flex flex-wrap gap-x-3 gap-y-1'>
              <p className='text-primary/90 font-semibold'>Tags:</p>
              {
                  tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                  ))
              }
          </div>
          <div className='flex flex-wrap gap-x-3 gap-y-1'>
          <p  className='text-primary/90 font-semibold' >Platforms:</p>
          {
                  platforms.map((platform) => (
                      <span key={platform}>{platform}</span>
                  ))
              }
          </div>
    </section>
  )
}

export default Details