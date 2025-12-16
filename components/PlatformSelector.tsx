import usePlatforms from "@/hooks/usePlatforms";

export default function PlatformSelector() {
  //
  const { platforms, error } = usePlatforms();
  //

  if (error) return null;

  return (
    <select className="form-select fs-3 shadow-pri">
      <option value="">Choose platform</option>
      {platforms.map((platform) => (
        <option key={platform.id} value={JSON.stringify(platform)}>
          {platform.name}
        </option>
      ))}
    </select>
  );
}
