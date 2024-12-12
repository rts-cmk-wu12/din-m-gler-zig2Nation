export default function Adresses({ home }: { home: any }) {
    return (
      <section className="flex flex-col">
        <h1 className="font-bold text-green-700">{home.title}</h1>
        <h2>{home.adress1}</h2>
        <div>
          <h3>{home.type}</h3>
          <h4>Ejerudgift</h4>
          <p>{home.gross.toLocaleString()} kr.</p>
        </div>
      </section>
    );
  }
  