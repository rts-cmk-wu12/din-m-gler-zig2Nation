import { useEffect, useState } from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { toggleFavorite } from "@/actions/favorits";

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

export default function FourHomes() {
  const [homes, setHomes] = useState<Home[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const fetchHomes = async () => {
      try {
        console.log("Fetching homes...");
        const response = await fetch("https://dinmaegler.onrender.com/homes", { method: "GET" });
        if (!response.ok) throw new Error("Error fetching homes");

        const data = await response.json();
        console.log("Fetched homes data:", data);
        setHomes(data.slice(0, 4));

        console.log("Fetching user data for favorites...");
        const userResponse = await fetch("https://dinmaegler.onrender.com/users/me", {
          headers: {
            Authorization: `Bearer ${document.cookie
              .split("; ")
              .find((row) => row.startsWith("dm_token="))
              ?.split("=")[1]}`,
          },
        });
        if (userResponse.ok) {
          const userData = await userResponse.json();
          console.log("Fetched user data:", userData);
          setFavorites(userData.homes || []);
        } else {
          console.log("User fetch failed with status:", userResponse.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchHomes();
  }, []);

  const handleFavoriteClick = async (homeId: string) => {
    console.log("Toggling favorite for home ID:", homeId);
    const result = await toggleFavorite(homeId);
    if (result.success) {
      console.log("Updated favorites:", result.favorites);
      setFavorites(result.favorites);
    } else {
      console.error("Failed to toggle favorite:", result.error);
    }
  };

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

  return (
    <section className="bg-[#F8F8FB] flex flex-col items-center justify-center mt-[10em]">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[60em]">
        {homes.map((home) => (
          <article key={home.id} className="p-4 bg-white shadow-md relative">
            <img
              src={home.images[0]?.url}
              alt="billed af boligen"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <button
              onClick={() => handleFavoriteClick(home.id)}
              className="absolute top-2 right-2 p-2 bg-white bg-opacity-70 rounded-full mt-3 mr-3"
              aria-label="Tilføj til favoritter"
            >
              <FaHeart
                className={favorites.includes(home.id) ? "text-red-500" : "text-gray-400"}
              />
            </button>
            <article className="flex flex-col gap-4 border-b-2 border-[#D3DEE8] h-36">
              <Link href={`/house/${home.id}`}>
                <h3 className="font-bold text-lg">{home.title}</h3>
                <p className="font-bold text-lg">{home.adress1}</p>
              </Link>
              <p>{home.postalcode} {home.city}</p>
              <div className="flex items-center gap-4">
                <h4 className="font-bold text-lg">{home.type}</h4>
                <p>Ejerudgift: {home.cost.toLocaleString()} kr</p>
              </div>

            </article>
            <section className="mt-6 flex justify-between">
              <div className={`px-2 py-1 rounded text-white w-8 text-center ${energyLabelClass(home.energylabel)}`}>{home.energylabel}</div>
              <div className="flex justify-between mr-20">
                <p>{home.rooms} værelser</p>
                <span className="mx-2">•</span>
                <p>{home.livingspace}m²</p>
              </div>
              <div>{home.price}</div>
            </section>

          </article>
        ))}
        
      </div>
      <Link
                aria-label="se alle boliger"
              href="/houses"
              className="mt-20 px-4 py-2 bg-[#162A41] text-white rounded w-[13em] h-14 flex items-center justify-center"
            >
              Se alle mæglere
            </Link>
    </section>
  );
}
