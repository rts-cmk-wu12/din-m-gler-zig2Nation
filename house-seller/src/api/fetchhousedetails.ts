// api/fetchhousedetails.ts
import { House } from "@/app/HouseTypes";

export const fetchInfoOnHouses = async (id: string): Promise<House | null> => {
  try {
    const response = await fetch(`https://dinmaegler.onrender.com/homes/${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Fejl ved hentning af data: ${response.statusText}`);
    }

    const data: House = await response.json(); // Brug House-typen
    console.log(data);
    return data;

    
  } catch (err) {
    console.error("Fejl under hentning af husdata:", err);
    return null;
  }
};
