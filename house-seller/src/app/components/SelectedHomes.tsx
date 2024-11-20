import { useEffect, useState } from "react";

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

  return (
    <section className="bg-[#F8F8FB] flex flex-col items-center justify-center mt-[10em]">
      {/* Overskrift */}
      <div className="flex flex-col items-center justify-center mt-20">
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
          <article key={home.id} className="p-4 bg-gray-100 shadow-md">
            {/* Billede for boligen */}
            <img
              src={home.images[0]?.url} // Hent første billede fra images-arrayet
              alt={home.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            {/* Bolig titel, sted og pris */}
            <article className="flex flex-col gap-2">
                <h3 className="font-bold text-lg">{home.title}</h3>
                <p className="text-gray-700 font-bold text-[0.5]">{home.adress1}</p>
                <p className="text-[#333333]">{home.postalcode} {home.city}</p>
                <div>
                    <div className="flex gap-2">
                        <p className="font-bold">{home.type}</p>
                        <p>Ejerudgift: {home.gross}kr</p>
                    </div>
                    <div className="flex">
                        <div>
                            <p>{home.energylabel}</p>
                            <p>{home.rooms}</p>
                        </div>
                        <p className="text-gray-700 mt-2">{home.price} DKK</p>
                    </div>
                </div>
            </article>
          </article>
        ))}
      </div>

      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Se alle boliger
      </button>
    </section>
  );
}
