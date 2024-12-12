'use client'
import Searchfield from "./components/Searchfield";
import DanskernesHjem from "./components/DanskernesHjem";
import ThreeHomes from "./components/ThreeHomes";
import NewsLetter from "./components/Letter";
import ThreeEmployee from "./components/ThreeEmployee";
import Opdates from "./components/Opdates";

export default function Home() {

  return (
    <main className="bg-[#F8F8FB]">
        <>
          <Searchfield />
          <DanskernesHjem />
          <ThreeHomes />
          <NewsLetter/>
          <ThreeEmployee/>
          <Opdates/>
        </>

    </main>
  );
}