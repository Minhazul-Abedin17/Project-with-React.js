import { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/playerType";
import PlayerCard from "./PlayerCard";

interface IAvail {
  players: Iplayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectePlayers: Iplayer[];
  setSelectPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}
const AvailablePlayers = ({
  players,
  coin,
  setCoin,
  selectePlayers,
  setSelectPlayers,
}: IAvail) => {
  return (
    <div className="grid grid-cols-3 gap-14 mt-5">
      {players.map((player: Iplayer, index: number) => {
        return (
          <PlayerCard
            key={index}
            player={player}
            coin={coin}
            setCoin={setCoin}
            selectePlayers={selectePlayers}
            setSelectPlayers={setSelectPlayers}
          />
        );
      })}
    </div>
  );
};
export default AvailablePlayers;