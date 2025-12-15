import { Game } from "@/hooks/useGames";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <div className="mb-5 overflow-hidden rounded-4 shadow-pri">
      <img src={game.background_image} />
      <h2 className="p-3">{game.name}</h2>
    </div>
  );
}
