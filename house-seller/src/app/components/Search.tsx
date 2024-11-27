'use client';
import { IoMdArrowDropdown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface PriceData {
    id: string | number;
    price: number;
    size: number;
    address: string;
    images: { url: string }[]; // Array af billeder
    title: string;
    gross: number;
    adress1: string | number;
    postalcode: number;
    city: string;
    type: string;
    energylabel: string;
    rooms: number;
    livingspace: number;
    
}

export default function Search() {
    const [maxPrice, setMaxPrice] = useState<number>(12000000); // Maksimumpris starter ved 10 millioner
    const [homes, setHomes] = useState<PriceData[]>([]); // Viser filtrerede boliger
    const [allHomes, setAllHomes] = useState<PriceData[]>([]); // Gemmer alle boliger
    const router = useRouter()

    // Funktion til at hente alle boliger én gang
    const fetchAllHomes = () => {
        fetch("https://dinmaegler.onrender.com/homes", { method: "GET" })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data: PriceData[]) => {
                setAllHomes(data); // Gem alle boliger i state
                setHomes(data); // Start med at vise alle boliger
                console.log("Fetched all homes:", data);
            })
            .catch((err) => {
                console.error("Fetch error:", err);
            });
    };

    // Filtrér boliger baseret på sliderens værdi
    const filterHomes = () => {
        const filtered = allHomes.filter((home) => home.price <= maxPrice);
        setHomes(filtered);
    };

    useEffect(() => {
        fetchAllHomes(); // Hent alle boliger ved første render
    }, []);

    useEffect(() => {
        filterHomes(); // Filtrér boliger, når maxPrice ændres
    }, [maxPrice, allHomes]);


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
        <section className="mt-[7em] w-[60em]">
            {/* Søgeoverskrift */}
            <div className="flex gap-1 font-bold text-2xl">
                <p className="border-b-4 border-black">Søg</p>
                <h5> efter dit drømmehus</h5>
            </div>

            {/* Pris Slider */}
            <div className="w-[55em] mt-7 ">
                <form className="w-[30em] flex flex-row items-center justify-start">
                    <div className="flex flex-row items-center justify-center gap-4">
                        <label htmlFor="propertyType">
                            <span className="text-[#333333] font-medium">Ejendomstype</span>
                            <div className="relative mt-2">
                                <input
                                    type="text"
                                    placeholder="Ejendomstype"
                                    className="rounded border-2 border-[#D3DEE8] text-[#333333] h-[3em] p-2 w-[18em] pr-10"
                                />
                                <IoMdArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#D3DEE8] h-8 w-10" />
                            </div>
                        </label>

                        <label htmlFor="priceSlider" className="text-[#333333] flex flex-col h-[6em]">
                            Pris-interval
                            <input
                                type="range"
                                id="priceSlider"
                                min="0"
                                max="12000000"
                                step="100000"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className="w-[30em] mt-9 appearance-none accent-[#7B7B7B] bg-[#D3DEE8] h-[0.1em]"
                            />
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-[#7B7B7B]">0 kr.</span>
                                <span className="text-[#7B7B7B]">{maxPrice.toLocaleString()} kr.</span>
                            </div>
                        </label>
                    </div>
                    
                </form>
            </div>

            {/* Resultater */}
            <div className="mt-8">
                {homes.length > 0 ? (
                    <ul className="grid grid-cols-2 grid-rows-4 gap-4">
                        {homes.map((home) => (
                            <li key={home.id} className="border p-4 shadow-md" onClick={() => router.push(`/house/${home.id}`)}>
                                <article>
                                    <div className="relative">
                                        <img
                                            src={home.images[0]?.url} // Hent første billede fra images-arrayet
                                            alt={home.title}
                                            className="w-full h-48 object-cover mb-4 rounded"
                                        />
                                        <div className="absolute top-3 right-3 bg-gray-200 rounded-full p-2">
                                            <CiHeart className="text-gray-10000 w-6 h-6" />
                                        </div>
                                    </div>
                                        <h2 className="text-gray-700 font-bold text-[0.5] mt-4">{home.adress1}</h2>
                                        <p className="text-[#333333] mt-4">{home.postalcode} {home.city}</p>
                                        <div className="flex gap-2 mt-4">
                                            <p className="font-bold">{home.type}</p>
                                            <p>Ejerudgift: {home.gross}kr</p>
                                        </div>

                                    <div className="flex justify-between mt-3 items-center gap-32 border-t-2 border-[#D3DEE8]">
                                        <div className="mt-5 flex flex-row items-center justify-between w-full">
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
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Ingen boliger fundet under {maxPrice.toLocaleString()} kr.</p>
                )}
            </div>
        </section>
    );
}
