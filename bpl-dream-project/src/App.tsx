import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Players from "./components/players/Players";
import type { Iplayer } from "./types/playerType";
import Footer from "./components/Footer";

const playerFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const playerPromise = playerFetch();

function App() {
  const [coin, setCoin] = useState<number>(5000);
  const [selectePlayers, setSelectPlayers] = useState<Iplayer[]>([]);

  return (
    <>
      <Nav coin={coin} />
      <Banner />
      <Suspense fallback={<h2>Loading.......</h2>}>
        <Players
          playerPromise={playerPromise}
          coin={coin}
          setCoin={setCoin}
          selectePlayers={selectePlayers}
          setSelectPlayers={setSelectPlayers}
        />
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;
