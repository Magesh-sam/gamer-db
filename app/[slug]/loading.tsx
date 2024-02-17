import Main from '@/components/PageComponents/Main';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

function loading() {
  return (
    <Main>
      <Skeleton className="h-10 w-[40%] mt-24 mb-4" />
      <Skeleton className="h-5 w-[40%] mb-4" />
      <Skeleton className="h-5 w-full mb-4" />
      <Skeleton className="h-5 w-full mb-4" />
      <Skeleton className="h-10 w-full mb-4" />
      <Skeleton className="h-auto aspect-[16/9] w-full mb-4" />

      <Skeleton className="h-20 w-full mt-24 mb-4" />
      <div className="flex flex-wrap gap-x-3 gap-y-1">
        <Skeleton className="w-[280px] h-auto aspect-[16/9]" />
        <Skeleton className="w-[280px] h-auto aspect-[16/9]" />
        <Skeleton className="w-[280px] h-auto aspect-[16/9]" />
        <Skeleton className="w-[280px] h-auto aspect-[16/9]" />
        <Skeleton className="w-[280px] h-auto aspect-[16/9]" />
        <Skeleton className="w-[280px] h-auto aspect-[16/9]" />
        <Skeleton className="w-[280px] h-auto aspect-[16/9]" />
        <Skeleton className="w-[280px] h-auto aspect-[16/9]" />
      </div>
    </Main>
  );
}

export default loading;
