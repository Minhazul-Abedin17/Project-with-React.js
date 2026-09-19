import  { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/playerType";
import { TbTrash } from "react-icons/tb";

interface ISelectedPlayersProps {
  selectePlayers: Iplayer[];
  setSelectPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayers = ({
  selectePlayers,
  setSelectPlayers,
  coin,
  setCoin,
}: ISelectedPlayersProps) => {

  const handleRemovePlayer = (player: Iplayer) => {
  
    const restPlayers = selectePlayers.filter(
      (selectePlayer) => selectePlayer.Playername !== player.Playername
    );
    setSelectPlayers(restPlayers);
    const afterDelete = coin + player.price
    setCoin(afterDelete)
  };

  if (!selectePlayers || selectePlayers.length === 0) {
    return (
      <div className="mt-10 text-center text-lg font-semibold text-gray-500">
        No players selected yet!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-7 mt-6">
      {selectePlayers.map((player: Iplayer, index: number) => {
        return (
          <div
            key={player.Playername || index}
            className="flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl py-2 px-4"
          >
            <div className="flex gap-2 items-center">
              <img
                src={player.playerimg}
                alt={player.Playername}
                className="h-[60px] w-[60px] rounded-2xl object-cover"
              />
              <div>
                <h2 className="font-bold text-2xl">{player.Playername}</h2>
                <p className="text-gray-500">{player.playerType}</p>
              </div>
            </div>
            <span
              className="text-red-500 font-bold text-2xl cursor-pointer hover:text-red-700 transition-colors"
              onClick={() => handleRemovePlayer(player)}
            >
              <TbTrash />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayers;