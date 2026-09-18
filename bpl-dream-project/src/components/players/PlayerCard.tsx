import { type Dispatch, type SetStateAction } from "react";
import { FaUser, FaGlobe } from "react-icons/fa";
import type { Iplayer } from "../../types/playerType";
import { Bounce, toast } from "react-toastify";

interface PlayerCardProps {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectePlayers: Iplayer[];
  setSelectPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}
const PlayerCard = ({
  player,
  coin,
  setCoin,
  selectePlayers,
  setSelectPlayers,
}: PlayerCardProps) => {

  const isSelected = selectePlayers.some(
    (p) => p.Playername === player.Playername
  );

  const handleSelectPlayer = () => {
    if (isSelected) {
      toast.error(`${player.Playername} is already selected!`);
      return;
    }


    const newPrice = coin - player.price;

    if (newPrice >= 0) {
      setCoin(newPrice);
      setSelectPlayers((prev) => [...prev, player]); // সঠিক উপায়ে লিস্টে প্লেয়ার যোগ

      toast.success(`${player.Playername} is purchased successfully`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error("Do not have enough coin to purchase", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <figure className="relative h-64 overflow-hidden bg-base-200">
        <img
          src={player.playerimg}
          alt={player.Playername}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-content shadow-lg">
            {player.playerType}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-4 left-5 text-white">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <FaUser className="text-sm" />
            {player.Playername}
          </h2>
        </div>
      </figure>

      <div className="card-body gap-4 p-5">
        <div className="flex items-center gap-2 text-sm text-base-content/70">
          <FaGlobe className="text-primary" />
          <span>{player.origin}</span>
        </div>

        <div className="divider my-0"></div>

        <div>
          <p className="mb-3 text-sm font-semibold text-base-content/60">
            PLAYING STYLE
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/50">Batting</p>
              <p className="mt-1 text-sm font-semibold">
                {player.battingStyle}
              </p>
            </div>

            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/50">Bowling</p>
              <p className="mt-1 text-sm font-semibold">
                {player.bowlingStyle}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between gap-3 border-t border-base-300 pt-4">
          <div>
            <p className="text-xs text-base-content/50">PLAYER PRICE</p>
            <h3 className="text-xl font-extrabold text-primary">
              ${player.price.toLocaleString()}
            </h3>
          </div>

          <button
            onClick={handleSelectPlayer}
            disabled={isSelected}
            className="btn btn-primary rounded-xl px-5 transition-all hover:scale-105"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;