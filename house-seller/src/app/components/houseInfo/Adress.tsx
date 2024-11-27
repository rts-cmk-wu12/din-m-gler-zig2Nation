// components/house-information/Adress.tsx
export default function Adress({ adress1, postalcode, city }: { adress1: string | number, postalcode: number, city: string }) {
    return (
      <div>
        <article className=" flex flex-col items-center justify-start gap-2">
          <h2 className="font-bold">{adress1.toLocaleString()}</h2>
          <div className="flex flex-row gap-2 w-full">
            <p className="font-bold text-start">{postalcode}</p>
            <h3 className="font-bold">{city}</h3>
          </div>
        </article>
      </div>
    );
  }
  