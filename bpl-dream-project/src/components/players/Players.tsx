import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/playerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProps {
  playerPromise: Promise<Iplayer[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectePlayers: Iplayer[];
  setSelectPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const Players = ({
  playerPromise,
  coin,
  setCoin,
  selectePlayers,
  setSelectPlayers,
}: PlayersProps) => {
  const players = use(playerPromise);
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <div className="container mx-auto my-10">
      {/* Header & Toggle Buttons */}
      <div className="flex justify-between items-center my-5">
        <h2 className="text-2xl font-bold">
          {isActive ? "Available Players" : `Selected Players (${selectePlayers.length})`}
        </h2>
        <div className="join">
          <button
            onClick={() => setIsActive(true)}
            className={`btn join-item ${isActive ? "btn-primary" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setIsActive(false)}
            className={`btn join-item ${!isActive ? "btn-primary" : ""}`}
          >
            Selected ({selectePlayers.length})
          </button>
        </div>
      </div>

      {/* Conditional Rendering */}
      {isActive ? (
        <AvailablePlayers
          players={players}
          coin={coin}
          setCoin={setCoin}
          selectePlayers={selectePlayers}
          setSelectPlayers={setSelectPlayers}
        />
      ) : (
        <SelectedPlayers
          selectePlayers={selectePlayers}
          setSelectPlayers={setSelectPlayers}
          coin={coin}
          setCoin={setCoin}
        />
      )}
    </div>
  );
};

export default Players;