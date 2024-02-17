import React from 'react';
import RAWG from '@/lib/axios';
import { GameCardProps, GameSeriesProps } from '@/lib/types';
import GameSeriesCard from './GameSeriesCard';

const GameSeriesContainer = async ({ slug }: { slug: string }) => {
  const gameSeriesData = await RAWG.get(`games/${slug}/game-series`).then(
    (res) => res.data.results,
  );
  const requiredData = gameSeriesData.map((gameSeries: GameSeriesProps) => {
    return {
      id: gameSeries.id,
      name: gameSeries.name,
      slug: gameSeries.slug,
      background_image: gameSeries.background_image,
    };
  });
  return (
    <>
      <h2 className="text-primary/90 text-2xl mb-2 mt-3 font-semibold">
        Game Series
      </h2>
      <section className="flex flex-wrap gap-3">
        {requiredData.map((gameSeries: GameCardProps) => (
          <GameSeriesCard key={gameSeries.id} {...gameSeries} />
        ))}
      </section>
    </>
  );
};

export default GameSeriesContainer;
