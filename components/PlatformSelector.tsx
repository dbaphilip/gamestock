import usePlatforms from "@/hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: string) => void;
}

export default function PlatformSelector({ onSelectPlatform }: Props) {
  //
  const { platforms, error } = usePlatforms();
  //

  if (error) return null;

  return (
    <select
      className="form-select fs-3 shadow-pri"
      onChange={(e) => onSelectPlatform(e.target.value)}
    >
      <option value="">Choose platform</option>

      {platforms.map((platform) => (
        <option key={platform.id} value={JSON.stringify(platform)}>
          {platform.name}
        </option>
      ))}
    </select>
  );
}
