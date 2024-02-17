import About from '@/components/GameDetailsComponents/About';
import Details from '@/components/GameDetailsComponents/Details';
import Rating from '@/components/GameDetailsComponents/Rating';
import Screenshots from '@/components/GameDetailsComponents/Screenshots';
import GameSeriesContainer from '@/components/GameSeries/GameSeriesContainer';
import Main from '@/components/PageComponents/Main';

import RAWG from '@/lib/axios';
import { reverseDate } from '@/lib/helper';
import Image from 'next/image';

async function page({ params }: { params: { slug: string } }) {
  const gameData = await RAWG.get(`games/${params.slug}`).then(
    (res) => res.data,
  );
  const screenshots = await RAWG.get(`games/${params.slug}/screenshots`).then(
    (res) => res.data.results,
  );
  const platforms = await gameData.platforms.map(
    (platform: { platform: { name: string } }) => platform.platform.name,
  );
  const tags = await gameData.tags.map((tag: { name: string }) => tag.name);

  const ratings = await gameData.ratings;

  return (
    <Main>
      <h1 className="text-5xl font-bold mb-3 text-primary hover:text-primary/80 ">
        {gameData.name}
      </h1>
      <Details
        tags={tags.sort()}
        platforms={platforms.sort()}
        released={reverseDate(gameData.released)}
        rating={gameData.rating}
      />
      <Rating ratings={ratings} />

      <Image
        src={gameData.background_image}
        alt={gameData.name}
        width={1920}
        height={1080}
        className="w-full h-auto aspect-auto rounded-lg "
      />
      <About html={gameData.description} />
      <Screenshots screenshots={screenshots} />

      <GameSeriesContainer slug={params.slug} />
    </Main>
  );
}

export default page;
