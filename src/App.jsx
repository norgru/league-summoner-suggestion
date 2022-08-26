import "./styles.css";
import { useState } from "react";
import { SummonerCard } from "./components/SummonerCard";
import { MatchIdList } from "./components/MatchIdList";
import { topPlayers } from "./utils/topPlayers";

export default function App() {
  const [SummonersList, SetSummonersList] = useState([]);
  const [SummonerInput, SetSummonerInput] = useState("");
  const [Summoner2Input, SetSummoner2Input] = useState("");
  const [Summoner3Input, SetSummoner3Input] = useState("");
  const [Summoner4Input, SetSummoner4Input] = useState("");
  const [NewRandomList, SetNewRandomList] = useState([]);
  const [SummonerRoles, setSummonerRoles] = useState({
    summoner1Role: "",
    summoner2Role: "",
    summoner3Role: "",
    summoner4Role: ""
  });

  function threeRandom() {
    const threePlayers = [];
    for (let i = 0; i < 3; i++) {
      threePlayers.push(
        topPlayers[Math.floor(Math.random() * topPlayers.length)]
      );
    }
    return threePlayers;
  }

  const totalRoles = ["TOP", "MID", "CARRY", "SUPPORT", "JUNGLE"];
  const chosenRoles = [
    SummonerRoles.summoner1Role,
    SummonerRoles.summoner2Role,
    SummonerRoles.summoner3Role,
    SummonerRoles.summoner4Role
  ];

  var absentRole = totalRoles.filter((e) => !chosenRoles.includes(e));

  const setUsers = () => {
    const newSummonerList = [
      SummonerInput,
      Summoner2Input,
      Summoner3Input,
      Summoner4Input
    ];
    SetSummonersList(newSummonerList);
    console.log(chosenRoles);
    console.log(absentRole);

    // const newResultsList = [Summoner1Result, Summoner2Result, Summoner3Result];
    // SetSummonersList(newResultsList);
  };

  const giveSuggestions = () => {
    SetNewRandomList(threeRandom());
  };

  function getRegionValue() {
    var selectedValue = document.getElementById("regionList").value;
    console.log(selectedValue);
  }

  return (
    <div className="App">
      <header>
        <img src="img/esportrlogo.png" width="53px" alt="esportr logo" />

        <img
          id="heading"
          width="100px"
          src="img/esportrtext.png"
          alt="esportr logo text"
        />
      </header>

      <div id="secondheadercontainer">
        <h2 className="secondHeader">Enter the players of your current team</h2>
      </div>

      <div className="formPart">
        <div className="playersDiv">
          <div>
            <h3 className="formText">Player 1</h3>
            <input
              type="text"
              className="inputBoxes"
              onChange={(e) => SetSummonerInput(e.target.value)}
            />

            <select
              className="dropDownRoles"
              id="selectRole"
              onChange={() => {
                setSummonerRoles({
                  ...SummonerRoles,
                  summoner1Role: document.getElementById((id = "selectRole"))
                    .value
                });
              }}
            >
              <option value="">SELECT</option>
              <option value="TOP">TOP</option>
              <option value="MID">MID</option>
              <option value="CARRY">CARRY</option>
              <option value="SUPPORT">SUPPORT</option>
              <option value="JUNGLE">JUNGLE</option>
            </select>
          </div>
          <div>
            <h3 className="formText">Player 2</h3>
            <input
              type="text"
              className="inputBoxes"
              onChange={(e) => SetSummoner2Input(e.target.value)}
            />
            <select
              className="dropDownRoles"
              id="selectRole2"
              onChange={() => {
                setSummonerRoles({
                  ...SummonerRoles,
                  summoner2Role: document.getElementById((id = "selectRole2"))
                    .value
                });
              }}
            >
              <option value="">SELECT</option>
              <option value="TOP">TOP</option>
              <option value="MID">MID</option>
              <option value="CARRY">CARRY</option>
              <option value="SUPPORT">SUPPORT</option>
              <option value="JUNGLE">JUNGLE</option>
            </select>
          </div>
          <div>
            <h3 className="formText">Player 3</h3>
            <input
              type="text"
              className="inputBoxes"
              onChange={(e) => SetSummoner3Input(e.target.value)}
            />
            <select
              className="dropDownRoles"
              id="selectRole3"
              onChange={() => {
                setSummonerRoles({
                  ...SummonerRoles,
                  summoner3Role: document.getElementById((id = "selectRole3"))
                    .value
                });
              }}
            >
              <option value="">SELECT</option>
              <option value="TOP">TOP</option>
              <option value="MID">MID</option>
              <option value="CARRY">CARRY</option>
              <option value="SUPPORT">SUPPORT</option>
              <option value="JUNGLE">JUNGLE</option>
            </select>
          </div>
          <div>
            <h3 className="formText">Player 4</h3>
            <input
              type="text"
              className="inputBoxes"
              onChange={(e) => SetSummoner4Input(e.target.value)}
            />
            <select
              className="dropDownRoles"
              id="selectRole4"
              onChange={() => {
                setSummonerRoles({
                  ...SummonerRoles,
                  summoner4Role: document.getElementById((id = "selectRole4"))
                    .value
                });
              }}
            >
              <option value="">SELECT</option>
              <option value="TOP">TOP</option>
              <option value="MID">MID</option>
              <option value="CARRY">CARRY</option>
              <option value="SUPPORT">SUPPORT</option>
              <option value="JUNGLE">JUNGLE</option>
            </select>
          </div>
        </div>
        <div className="regionPart">
          <h3>Region</h3>

          <select
            id="regionList"
            className="dropDown"
            onChange="getRegionValue();"
          >
            <option value="EUW">EUW</option>
            <option value="NA">NA</option>
          </select>

          <div id="buttonDiv">
            <button
              type="button"
              value="Submit selections"
              id="submitButton"
              onClick={setUsers}
            >
              Set Users
            </button>
          </div>
        </div>
      </div>
      <div className="cardContainers">
        {SummonersList.map((newSummonerList, idx) => (
          <MatchIdList
            summonerRole={SummonerRoles[`summoner${idx + 1}Role`]}
            summonerName={newSummonerList}
          />
        ))}
      </div>
      <h2>Suggested Summoners</h2>
      <div className="resultContainers">
        {NewRandomList.map((item, idx) => (
          <MatchIdList summonerRole={absentRole} summonerName={item} />
        ))}
      </div>
      <div id="buttonDiv">
        <button
          type="button"
          value="Submit selections"
          id="submitButton"
          onClick={giveSuggestions}
        >
          Shuffle Suggestions
        </button>
      </div>
    </div>
  );
}
