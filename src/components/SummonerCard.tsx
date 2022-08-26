import * as React from "react";
import { useMatch } from "../hooks/useMatch";
import { useMatchIds } from "../hooks/useMatchIds";
import { useSummonerName } from "../hooks/useSummonerName";

interface ISummonerCardProps {
  summonerName: string;
  championName: string;
  summonerRole: string;
  // role: string;
}

const getChampionImage = (championName: string): string => {
  return `http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${championName}.png`;
};

export const SummonerCard = (props: ISummonerCardProps) => {
  const summonerHookResponse = useSummonerName(props.summonerName);

  const { summoner } = summonerHookResponse;
  const matchId = useMatchIds(summoner?.puuid)[0];
  const matchStats = useMatch(matchId);

  React.useEffect(() => {
    if (summoner !== undefined) {
      console.log("Summoner found", summoner);
    }
  }, [summoner]);

  if (!summoner) {
    return <div>no summoner!</div>;
  }

  return (
    <div className="cardContainer">
      <div>
        <img
          src={getChampionImage(props.championName ?? "")}
          alt="Logo"
          className="Image"
        />
        <p className="cardTitle">Summoner Name</p>
        <p className="cardContent">{props.summonerName}</p>
        <p className="cardTitle">Role</p>
        <p>{props.summonerRole}</p>
        <p className="cardContent"></p>
        {/* <p className="cardContent">{props.role}</p> */}
        <div>
          {/* <h4>{summoner.puuid}</h4> */}
          <p className="cardTitle">Level</p>
          <p className="cardContent"> {summoner.summonerLevel}</p>
          <p className="cardTitle"> Champion</p>
          <p> {props.championName} </p>
        </div>
      </div>
    </div>
  );
};
