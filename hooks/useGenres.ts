"use client";

import apiClient from "@/services/api-client";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
}

interface GenresResponse {
  count: number;
  results: Genre[];
}

export default function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    apiClient
      .get<GenresResponse>("/genres")
      .then((res: AxiosResponse) => setGenres(res.data.results));
  }, []);

  return { genres };
}
