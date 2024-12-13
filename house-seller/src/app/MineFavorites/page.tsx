'use client';
import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Link from "next/link";
import { redirect } from "next/navigation";
import RemoveButton from "../components/MineFavorites/RemoveButton";
import Search from "../components/MineFavorites/Search";
import Home from "../page";

interface Home {
  id: string;
  title: string;
  location: string;
  cost: number;
  price: number;
  images: { url: string }[];
  adress1: string | number;
  city: string;
  postalcode: number;
  type: string;
  gross: number;
  energylabel: string;
  rooms: number;
  livingspace: number;
}

export default function MineFavorites() {
  const [favorites, setFavorites] = useState<Home[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("dm_token="))
        ?.split("=")[1];

      if (token) {
        setIsLoggedIn(true);

        try {
          const userResponse = await fetch("https://dinmaegler.onrender.com/users/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!userResponse.ok) throw new Error("Failed to fetch user data");

          const userData = await userResponse.json();
          const favoriteIds = userData.homes || [];

          const homesResponse = await fetch("https://dinmaegler.onrender.com/homes");
          const allHomes = await homesResponse.json();

          const favoriteHomes = allHomes.filter((home: Home) => favoriteIds.includes(home.id));
          setFavorites(favoriteHomes);
        } catch (error) {
          console.error("Error fetching favorites:", error);
        }
      } else {
        redirect("/Login");
      }
    };

    fetchFavorites();
  }, []);

  const energyLabelClass = (label: string) => {
    switch (label.toUpperCase()) {
      case "A":
        return "bg-green-400";
      case "B":
        return "bg-yellow-400";
      case "C":
        return "bg-orange-400";
      case "D":
        return "bg-red-400";
      default:
        return "bg-gray-200";
    }
  };

  if (!isLoggedIn) return null;


  return (
    <>
      <Banner title="Mine favorit boliger"/>
      <div className="bg-[#F8F8FB] flex flex-col items-center justify-center mt-[2em] w-full mb-16">
        <Search />
        <div className="flex flex-col gap-4 w-[60em] mt-6">
          {favorites.map((home) => (
            <article key={home.id} className="p-4 bg-white shadow-md relative flex flex-row">
              <div className="w-[20em]">
                <img
                  src={home.images[0]?.url}
                  alt={home.title}
                  className="w-full h-48 object-contain mb-4 rounded"
                />
              </div>
              <div className="flex flex-col h-full gap-4 flex-1">
                <Link href={`/house/${home.id}`}>
                  <h3 className="font-bold text-lg">{home.title}</h3>
                  <p className="font-bold text-lg">{home.adress1}</p>
                </Link>
                <p>
                  {home.postalcode} {home.city}
                </p>
                <div className="flex items-center pb-2 mt-2">
                  <h4 className="font-bold text-lg">{home.type}</h4>
                  <span className="mx-2">•</span>
                  <p className="truncate">Ejerudgift: {home.cost.toLocaleString()} kr</p>
                </div>
              </div>
              <section className="mt-4 flex flex-col justify-between w-[25em]">
                <div className="flex items-start gap-12">
                  <div
                    className={`px-2 py-1 rounded text-white w-8 text-center h-8 ${energyLabelClass(
                      home.energylabel
                    )}`}
                  >
                    {home.energylabel}
                  </div>
                  <div className="flex">
                    <p>{home.rooms} værelser</p>
                    <span className="mx-2">•</span>
                    <p>{home.livingspace}m²</p>
                  </div>
                
                <p className="font-bold truncate">{home.price.toLocaleString()} kr</p>
                </div>
                <RemoveButton/>
              </section>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
