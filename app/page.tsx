
import React from 'react'
import RAWG from '@/lib/axios'
import Image from 'next/image';
import TopGamesCarousel from '@/components/ui/TopRatedGames/TopGamesCarousel';
import { TopGamesCardProps } from '@/lib/types';


interface IGame {
  id: number
  name: string
  background_image: string
}

async function page() {
  const topRatedGames: TopGamesCardProps[] = [];

  try {
    const data = await RAWG.get("games");
    const gamesData = await data.data.results
    gamesData.forEach((game:IGame )=> {
      topRatedGames.push({
        id: game.id,
        name: game.name,
        img: game.background_image
      })
    })
  }
  catch (error) {
    console.log(error);
  }

  return (
    <main className='flex flex-col container '>
      <h1 className='text-center text-5xl font-bold my-5 text-primary'>Gamer-DB</h1>
      <section className='container mx-auto'>
      <h2 className='text-2xl font-semibold mb-4 first-letter:text-primary'>Top Rated Games</h2>
        <TopGamesCarousel games={topRatedGames} />
      </section>
     
    </main>
  )
}

export default page