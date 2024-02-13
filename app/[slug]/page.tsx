import About from '@/components/GameDetailsComponents/About';
import Details from '@/components/GameDetailsComponents/Details';

import RAWG from '@/lib/axios';
import { reverseDate } from '@/lib/helper';
import Image from 'next/image';

async function page({ params }: { params: { slug: string } }) {
  const gameData = await RAWG.get(`games/${params.slug}`).then(
    (res) => res.data,
  );
  const platforms = await gameData.platforms.map(
    (platform: { platform: { name: string } }) => platform.platform.name,
  );
  const tags = await gameData.tags.map((tag: { name: string }) => tag.name);
  return (
    <main className="flex flex-col container mt-20 min-h-screen mb-20 ">
      <h1 className="text-5xl font-bold mb-3 text-primary hover:text-primary/80 ">
        {gameData.name}
      </h1>
      <Details
        tags={tags.sort()}
        platforms={platforms.sort()}
        released={reverseDate(gameData.released)}
        rating={gameData.rating}
      />
      <div className="relative container  flex-1 mb-3">
        <Image
          src={gameData.background_image}
          alt={gameData.name}
          fill
          className="w-full h-auto rounded-lg "
        />
      </div>
      <About html={gameData.description} />
      {/* <Genres genres={gameData.genres}  /> */}
    </main>
  );
}

export default page;
