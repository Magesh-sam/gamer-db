'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { NewUpcomingGameCardProps } from '@/lib/types';
import TopGamesCard from './NewUpcomingGameCard';
import Autoplay from 'embla-carousel-autoplay';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import { useRef } from 'react';

function NewUpcomingGameCarousel({ games }: { games: NewUpcomingGameCardProps[] }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  return (
    <Carousel
      plugins={[plugin.current, WheelGesturesPlugin()]}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {games?.map((game) => (
          <CarouselItem className="  " key={game.id}>
            <TopGamesCard {...game} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-primary hover:bg-primary/80 text-black hover:text-black" />
      <CarouselNext className="bg-primary hover:bg-primary/80 text-black hover:text-black" />
    </Carousel>
  );
}

export default NewUpcomingGameCarousel;
