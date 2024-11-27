// components/house-information/HouseDetails.tsx
'use client'
import { useEffect, useState } from "react";
import { fetchInfoOnHouses } from "@/api/fetchhousedetails";
import { House } from "@/app/HouseTypes";
import Price from "./Price";
import HouseImage from "./HouseImage";
import Adress from "./Adress";
import SvgBox from "./SvgBox";
import AllNumberInfo from "./AllNumberInfo";

interface HouseDetailsPageProps {
  house: House;  // Her skal du hente et konkret hus
}


export default function AllDetails({ id }: { id: string }) {
  const [houseData, setHouseData] = useState<House | null>(null); // Typen House

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInfoOnHouses(id);
      setHouseData(data);
    };

    fetchData();
  }, [id]);

  if (!houseData) {
    return <div>Indlæser husdata...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <HouseImage house={houseData}/>
      <div className="flex flex-col items-center justify-center w-[60em]">
        <section className="flex flex-row items-center justify-between w-full mt-7">
          <Adress adress1={houseData.adress1} postalcode={houseData.postalcode} city={houseData.city}/>
          <SvgBox/>
          <Price price={houseData.price} />
        </section>
        <div className="w-full border-t-2 border-[#D3DEE8] mt-7">
          <section className="mt-6">
            <AllNumberInfo/>
          </section>
        </div>

      </div>
    </div>
  );
}