import React, { Suspense } from 'react';
import RAWG from '@/lib/axios';
import { NewUpcomingGameCardProps } from '@/lib/types';
import NewUpcomingGameCarousel from '@/components/ui/NewUpcomingGames/NewUpcomingGameCarousel';
import GameCardContainer from '@/components/ui/GameCard/GameCardContainer';

interface IGame {
  id: number;
  name: string;
  background_image: string;
}

async function page() {
  const newUpcomingGames: NewUpcomingGameCardProps[] = [];

  try {
    const data = await RAWG.get('games', {
      params: {
        "dates": `${new Date().getFullYear()}-10-10,${new Date().getFullYear()+1}-10-10`,
        "ordering": "-added",
        "page_size":"7"
      },
    });
    const gamesData = await data.data.results;
    gamesData.forEach((game: IGame) => {
      newUpcomingGames.push({
        id: game.id,
        name: game.name,
        img: game.background_image,
      });
    });
  } catch (error) {
    console.log("error",error);
  }
  return (
    <main className="flex flex-col container mt-14 ">
      <h1 className="text-center text-5xl font-bold my-5 text-primary">
        Gamer-DB
      </h1>

      <section className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4 f  irst-letter:text-primary">
          New Upcoming Games!
        </h2>
       
        <Suspense fallback={<div>Loading...</div>}>
          

          <NewUpcomingGameCarousel games={newUpcomingGames} />
          
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          

          <GameCardContainer/>
          
        </Suspense>
      </section>
    </main>
  );
}

export default page;
