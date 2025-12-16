import useData from "./useData";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export default function usePlatforms() {
  const { data: platforms, error } = useData<Platform>(
    "/platforms/lists/parents"
  );

  return { platforms, error };
}
