'use client'
import Searchfield from "./components/Searchfield";
import DanskernesHjem from "./components/DanskernesHjem";
import FourHomes from "./components/FourHomes";
import NewsLetter from "./components/NewLetter";
import ThreeEmployee from "./components/ThreeEmployee";
import Opdates from "./components/Opdates";

export default function Home() {

  return (
    <main className="bg-[#F8F8FB]">
        <>
          <Searchfield />
          <DanskernesHjem />
          <FourHomes />
          <NewsLetter/>
          <ThreeEmployee/>
          <Opdates/>
        </>

    </main>
  );
}