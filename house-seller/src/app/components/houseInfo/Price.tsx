// components/house-information/Price.tsx
export default function Price({ price }: { price: number }) {
    return (
      <div>
        <h2 className="font-bold text-2xl">Kr {price.toLocaleString()}</h2>
      </div>
    );
  }
  