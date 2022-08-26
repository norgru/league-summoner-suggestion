import axios from "axios";
import React, { useState } from "react";

export interface ISummoner {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

interface ISummonerHookResponse {
  summoner?: ISummoner;
  errorMessage?: string;
  loading: boolean;
}

/*
  useSummonerName( props )
    props -> summonerName: string
    returns -> ISummonerHookResponse { summoner?: ISummoner }
*/

export function useSummonerName(summonerName: string): ISummonerHookResponse {
  const [_summoner, setSummoner] = useState<ISummoner | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    if (summonerName !== undefined) {
      setIsLoading(true);
      axios
        .get(
          `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-066180a1-54af-4e2f-a288-0ac39f7b08f5`
        )
        .then((response) => {
          setSummoner(response.data);
        });
    }
  }, [summonerName]);

  return {
    summoner: _summoner,
    loading: isLoading
  };

  //return summoner ? (summoner as ISummoner) : undefined;
  //return { summoner: ISummoner, errorMessage?: string, loading: boolean }
}
