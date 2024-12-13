import Image from "next/image";
import { House } from "@/app/HouseTypes";

interface HouseImageProps {
  house: House;  // Vi tager hele House objektet som prop
}

export default function HouseImage({ house }: HouseImageProps) {
  
  const firstImage = house.images[0];

  if (!firstImage) {
    return <div>Der er ingen billeder til dette hus.</div>; // Hvis der ikke er billeder
  }

  return (
    <div className="w-full h-[30em]">
        <Image
          src={firstImage.url} 
          alt={firstImage.alt || "Hus billede"}
          width={1900} 
          height={200}
          className="h-[30em]"
        />
    </div>

  );
}
