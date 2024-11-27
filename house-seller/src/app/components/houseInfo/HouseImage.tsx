import Image from "next/image";
import { House } from "@/app/HouseTypes";

interface HouseImageProps {
  house: House;  // Vi tager hele House objektet som prop
}

export default function HouseImage({ house }: HouseImageProps) {
  // Tjek om huset har billeder, og vis kun det første
  const firstImage = house.images[0]; // Hent det første billede

  if (!firstImage) {
    return <div>Der er ingen billeder til dette hus.</div>; // Hvis der ikke er billeder
  }

  return (
    <div className="w-full h-[30em]">
        <Image
          src={firstImage.url}  // URL'en til det første billede
          alt={firstImage.alt || "Hus billede"}  // Hvis der ikke er alt-tekst, bruges en standard
          width={1900}            // Billedets bredde
          height={200}           // Billedets højde
          className="h-[30em]"  // Flyt billedet op med 5% af containerens højde
        />
    </div>

  );
}
