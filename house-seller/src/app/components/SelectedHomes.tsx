import { useEffect, useState } from "react";
import Link from "next/link";

// Definerer type for boligdata
interface Home {
  id: string;
  title: string;
  location: string;
  price: number;
  images: { url: string }[]; // Array af billeder
  adress1: string | number;
  city: string;
  postalcode: number;
  type: string;
  gross: number;
  energylabel: string;
  rooms: number;
  livingspace: number;
  
}

export default function SelectedHomes() {
  const [homes, setHomes] = useState<Home[]>([]);

  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const response = await fetch("https://dinmaegler.onrender.com/homes", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Error fetching homes");
        }

        const data = await response.json();
        console.log("Fetched Homes:", data);

        setHomes(data.slice(0, 4)); // Vis kun de første 4 boliger
      } catch (error) {
        console.error("Error fetching homes:", error);
      }
    };

    fetchHomes();
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

  return (
    <section className="bg-[#F8F8FB] flex flex-col items-center justify-center mt-[10em]">
      {/* Overskrift */}
      <div className="flex flex-col items-center justify-center gap-7 mb-[4em]">
        <h2 className="text-2xl font-bold">Udvalgte Boliger</h2>
        <div>
          <p className="w-[38em]">
            There are many variations of passages of Lorem Ipsum available but the this in
          </p>
          <p className="text-center">majority have suffered alteration in some</p>
        </div>
      </div>

      {/* Grid med boliger */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {homes.map((home) => (
          <article key={home.id} className="p-4 bg-white shadow-md">
            {/* Billede for boligen */}
            <img
              src={home.images[0]?.url} // Hent første billede fra images-arrayet
              alt={home.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            {/* Bolig titel, sted og pris */}
            <article className="flex flex-col gap-2">
            <Link href={`/house/${home.id}`}>
                <h3 className="font-bold text-lg">{home.title}
                  <p className="text-gray-700 font-bold text-[0.5] hover:underline">{home.adress1}
                    
                    
                  </p>
                </h3>
              </Link>
                <p className="text-[#333333]">{home.postalcode} {home.city}</p>

              <div>
                <div className="flex gap-2">
                  <p className="font-bold">{home.type}</p>
                  <p>Ejerudgift: {home.gross}kr</p>
                </div>
                <div className="flex justify-between mt-3 items-center gap-32">
                  <div className="flex flex-row items-center">
                    {/* Energimærket */}
                    <div
                      className={`w-6 h-6 flex items-center justify-center text-white font-bold rounded ${energyLabelClass(
                        home.energylabel
                      )}`}
                    >
                      {home.energylabel}
                    </div>
                    <p className="ml-[1em]">{home.rooms} værelser</p>
                    <p className="ml-[0.3em]">{home.livingspace}m²</p>
                  </div>
                  <p className="text-gray-700 font-semibold text-[1.2em]">{home.price.toLocaleString()}</p>
                </div>
              </div>
            </article>
          </article>
        ))}
      </div>

      <Link
        href="/houses"
        className="mt-20 px-4 py-2 bg-[#162A41] text-white rounded w-[13em] h-14 flex items-center justify-center"
      >
        Se alle boliger
      </Link>


    </section>
  );
}
