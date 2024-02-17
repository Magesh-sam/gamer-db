import Main from '@/components/PageComponents/Main';
import LoadMoreSkeleton from '@/components/Skeletons/LoadMoreSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <Main className="flex flex-col container items-center ">
      <Skeleton className="h-10 w-full mt-24 mb-4" />

      <Skeleton className="h-5 w-full mb-4" />

      <Skeleton className="w-full h-48" />
      <LoadMoreSkeleton />
    </Main>
  );
}
