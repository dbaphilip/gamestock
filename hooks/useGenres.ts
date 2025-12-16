"use client";

import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default function useGenres() {
  const { data: genres } = useData<Genre>("/genres");

  return { genres };
}
