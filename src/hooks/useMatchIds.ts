import axios from "axios";
import React, { useState } from "react";

export function useMatchIds(summonerId: string | undefined) {
  const [matchIds, setMatchIds] = useState([]);

  React.useEffect(() => {
    if (!summonerId) return;
    axios
      .get(
        `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerId}/ids?start=0&count=20&api_key=RGAPI-066180a1-54af-4e2f-a288-0ac39f7b08f5`
      )
      .then((response) => setMatchIds(response.data));
  }, [summonerId]);

  return (matchIds ?? []) as string[];
}
