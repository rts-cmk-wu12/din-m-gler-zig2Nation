'use client'
import Søgefelt from "./components/Searchfield";
import DanskernesHjem from "./components/DanskernesHjem";
import SelectedHomes from "./components/SelectedHomes";

import { useState } from "react";
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoggin = (() => {
    setIsLoggedIn(true)
  })
  return (
    <main>

        <>
          <Søgefelt />
          <DanskernesHjem />
          <SelectedHomes />
        </>

    </main>
  );
}