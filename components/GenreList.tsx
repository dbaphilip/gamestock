"use client";

import useGenres from "@/hooks/useGenres";

export default function GenreList() {
  const { genres } = useGenres();

  return (
    <>
      {genres.map((genre) => (
        <p className="fs-4" key={genre.id}>
          <img
            className="me-2 object-fit-cover rounded-2"
            style={{ width: "64px" }}
            src={genre.image_background}
            alt=""
          />
          {genre.name}
        </p>
      ))}
    </>
  );
}
