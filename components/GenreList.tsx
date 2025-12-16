"use client";

import useGenres, { Genre } from "@/hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

export default function GenreList({ onSelectGenre }: Props) {
  //
  const { genres } = useGenres();

  return (
    <>
      {genres.map((genre) => (
        <p className="fs-4" key={genre.id}>
          <a
            onClick={() => onSelectGenre(genre)}
            className="text-secondary"
            href="#"
          >
            <img
              className="me-2 object-fit-cover rounded-2"
              style={{ width: "64px" }}
              src={genre.image_background}
              alt=""
            />

            <span>{genre.name}</span>
          </a>
        </p>
      ))}
    </>
  );
}
