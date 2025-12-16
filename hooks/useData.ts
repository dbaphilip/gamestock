"use client";

import apiClient from "@/services/api-client";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Platform } from "./usePlatforms";

interface Response<T> {
  count: number;
  results: T[];
}

export default function useData<T>(
  endpoint: string,
  requestConfig: AxiosRequestConfig,
  deps?: any[]
) {
  //
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      apiClient
        .get<Response<T>>(endpoint, { ...requestConfig })
        .then((res: AxiosResponse) => setData(res.data.results))
        .catch((err: AxiosError) => setError(err.message))
        .finally(() => setLoading(false));
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
}
