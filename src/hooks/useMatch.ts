import axios from "axios";
import React, { useState } from "react";
import { ISummoner } from "./useSummonerName";

export interface IMatchSummoner extends ISummoner {
  summonerName: string;
  // role: string;
  championName: string;
  kills: number;
  deaths: number;
  assists: number;
}
export interface IMatch {
  summonerId: string;
  championName: string;
  info: { participants: IMatchSummoner[] };
}

export function useMatch(matchId: string | undefined) {
  const [match, setMatch] = useState();

  React.useEffect(() => {
    if (!matchId) {
      return;
    }
    axios
      .get(
        `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=RGAPI-066180a1-54af-4e2f-a288-0ac39f7b08f5`
      )
      .then((response) => {
        setMatch(response.data);
      })
      .catch((err) => console.log("fetch error"));
  }, [matchId]);

  return match ? (match as IMatch) : undefined;
}
