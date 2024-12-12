'use client';
import Image from "next/image";
import Search from "../components/MineFavorites/Search";
import HouseFavorite from "../components/MineFavorites/HouseFavorite";
import { useEffect, useState } from "react";

export default function MineFavorites() {

  return(
    <>
            <div className="relative h-[10em]">
                {/* Baggrundsbillede med mørk overlay */}
                <Image
                    src="/Mask-Group.png"
                    alt="account login baggrundsbillede af et hus"
                    width={1700}
                    height={300}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

                {/* Tekst, der vises oven på billedet */}
                <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                    <h2 className="text-5xl font-bold">Mine favoritboliger</h2>
                </article>
            </div>

            <div className="w-full flex flex-col items-center justify-center mt-8">
                <Search />
            </div>
        </>
  )
}