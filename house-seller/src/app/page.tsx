import Søgefelt from "./components/Searchfield";
import DanskernesHjem from "./components/DanskernesHjem";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Søgefelt/>
        <DanskernesHjem/>
      </main>
  );
}
