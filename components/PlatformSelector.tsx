import usePlatforms from "@/hooks/usePlatforms";

export default function PlatformSelector() {
  //
  const { platforms, error } = usePlatforms();
  //
  return (
    <select className="form-select fs-3 shadow-pri">
      <option value="">Choose platform</option>
      {platforms.map((platform) => (
        <option value={JSON.stringify(platform)}>{platform.name}</option>
      ))}
    </select>
  );
}
