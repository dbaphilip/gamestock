import { Game } from "@/hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import MetaScore from "./MetaScore";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <div className="mb-5 overflow-hidden rounded-4 shadow-pri">
      <img src={game.background_image} />

      <PlatformIconList
        platforms={game.parent_platforms.map(({ platform }) => platform)}
      />

      <h2 className="px-3">{game.name}</h2>

      <div className="d-flex justify-content-end">
        <MetaScore score={game.metacritic} />
      </div>
    </div>
  );
}
