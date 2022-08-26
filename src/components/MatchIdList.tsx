import * as React from "react";
import { useSummonerName } from "../hooks/useSummonerName";
import { useMatchIds } from "../hooks/useMatchIds";
import { useMatch } from "../hooks/useMatch";
import { SummonerCard } from "./SummonerCard";

interface IMatchIdListProps {
  summonerName: string;
  id: string;
  image: string;
  level: number;
  summonerRole: string;
}

export const MatchIdList = (props: IMatchIdListProps) => {
  const { summoner } = useSummonerName(props.summonerName);
  const matchIds = useMatchIds(summoner?.puuid);
  const match = useMatch(matchIds.length ? matchIds[0] : undefined);

  const summonerMatch = match?.info.participants.find(
    (p) => p.puuid === summoner?.puuid
  );

  return (
    <SummonerCard
      summonerName={props.summonerName}
      championName={summonerMatch?.championName || ""}
      summonerRole={props.summonerRole}
      // role={summonerMatch?.role || ""}
    />
  );
};
