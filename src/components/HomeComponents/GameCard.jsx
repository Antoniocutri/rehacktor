import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return (
    <Link
      to={`/detail/${game.id}`}
      className="group relative h-[220px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-300"/>

      <p className="absolute bottom-3 w-full text-center text-white font-semibold text-sm px-2 drop-shadow ">
        {game.name}
      </p>
    </Link>
  );
}
