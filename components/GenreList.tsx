"use client";

import useGenres from "@/hooks/useGenres";

export default function GenreList() {
  const { genres } = useGenres();

  return (
    <>
      {genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </>
  );
}
