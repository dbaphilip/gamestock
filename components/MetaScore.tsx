interface Props {
  score: number;
}

export default function MetaScore({ score }: Props) {
  //
  const skin = score > 89 ? "success" : score > 79 ? "warning" : "danger";
  //
  return (
    <span className={`shadow-pri badge fs-5 text-bg-${skin}`}>{score}</span>
  );
}
