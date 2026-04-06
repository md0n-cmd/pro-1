import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  results: Game[];
}

const useGames = (selectedGenre: string | null, searchText: string) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchGamesResponse>("/games", { 
        signal: controller.signal,
        params: { 
          genres: selectedGenre,
          search: searchText // Sends search query to RAWG
        } 
      })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [selectedGenre, searchText]); // Re-fetches when either change

  return { games, error, isLoading };
};

export default useGames;