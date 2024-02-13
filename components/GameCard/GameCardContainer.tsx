'use client';
import RAWG from '@/lib/axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import GameCard from './GameCard';
import axios from 'axios';
import LoadMoreSkeleton from '@/components/Skeletons/LoadMoreSkeleton';

const APIKEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
interface IGameCard {
  id: number;
  name: string;
  background_image: string;
  slug: string;
  genres: {
    id: number;
    slug: string;
    name: string;
  }[];
}

const fetchGames = async ({ pageParam }: { pageParam: number }) => {
  return axios
    .get(
      `https://api.rawg.io/api/games?key=${APIKEY}&page=${pageParam}&page_size=40`,
    )
    .then((res) => res.data);
};

function GameCardContainer() {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: fetchGames,
    refetchOnWindowFocus: false,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
  });

  if (isLoading) {
    return <LoadMoreSkeleton />;
  }
  if (isError) {
    return (
      <p
        className="bg-red-400 text-black  font-semibold
     w-full text-center px-3 py-2 "
      >
        Error: {error.message}
      </p>
    );
  }

  return (
    <div className="flex flex-col">
      {data?.pages.map((page, i) => (
        <div className="flex flex-wrap gap-5 mt-5" key={i}>
          {page.results.map((game: IGameCard) => (
            <>
              <GameCard
                key={game.id}
                id={game.id}
                slug={game.slug}
                img={game.background_image}
                name={game.name}
                genres={game.genres}
              />
            </>
          ))}
        </div>
      ))}
      {isFetchingNextPage && <LoadMoreSkeleton />}
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        className="mx-auto bg-primary text-black px-3 py-1 rounded-md my-3"
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
      </button>

      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default GameCardContainer;
