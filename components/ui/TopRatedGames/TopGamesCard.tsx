import { TopGamesCardProps } from "@/lib/types";
import Image from "next/image";
import React from "react";

function TopGamesCard({ name, img }: TopGamesCardProps) {
  return (
    <div className="relative rounded-md  h-48 sm:h-60 md:h-80 lg:h-[400px] ">
      <Image
        src={img}
        alt={name}
        fill
        className="w-full h-auto object-fill object-center "
        placeholder="blur"
        blurDataURL={img}
      />
      <div className="absolute bottom-0 left-0 right-0 px-3 py-1    backdrop-blur-md drop-shadow-lg w-full">
        <h3 className="text-white font-bold text-center ">{name}</h3>
      </div>
    </div>
  );
}

export default TopGamesCard;
