'use client'
import Søgefelt from "./components/Searchfield";
import DanskernesHjem from "./components/DanskernesHjem";
import SelectedHomes from "./components/SelectedHomes";
import NewsLetter from "./components/Letter";
import Employee from "./components/Employee";
import Opdates from "./components/Opdates";

export default function Home() {

  return (
    <main className="bg-[#F8F8FB]">
        <>
          <Søgefelt />
          <DanskernesHjem />
          <SelectedHomes />
          <NewsLetter/>
          <Employee/>
          <Opdates/>
        </>

    </main>
  );
}