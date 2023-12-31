import axios from "axios";
import { useEffect, useState } from "react";
const Rankings = () => {
  const [rankings, setRankings] = useState([]);
  const [format, setFormat] = useState("odi");
  const [rankingsType, setRankingsType] = useState("teams");

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/${rankingsType}`,
      params: { formatType: format },
      headers: {
        "X-RapidAPI-Key": "683352a4e5msh1fd0bf5d197cfeep1fa887jsn54c414f1b212",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };
    const handleRankings = async () => {
      try {
        const response = await axios.request(options);
        setRankings(response.data.rank);
        console.log(response.data.rank);
      } catch (error) {
        console.error(error);
      }
    };
    handleRankings();
  }, [format, rankingsType]);

  return (
    <div className="flex flex-col items-center w-[25%] h-full">
      <div className="items-center py-1 rounded-t-xl">
        <h1 className="text-black text-lg font-bold">RANKINGS</h1>
      </div>
      <div className="flex flex-col justify-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white gap-2 p-4">
        <div className="flex gap-6">
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white text-md font-semibold px-4 py-2 rounded-xl transition-colors duration-300 ${
              format === "test" ? "bg-black text-white" : ""
            }`}
            onClick={() => {
              setFormat("test");
            }}
          >
            Test
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white text-md font-semibold px-4 py-2 rounded-xl transition-colors duration-300 ${
              format === "odi" ? "bg-black text-white" : ""
            }`}
            onClick={() => {
              setFormat("odi");
            }}
          >
            ODI
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white text-md font-semibold px-4 py-2 rounded-xl transition-colors duration-300 ${
              format === "t20" ? "bg-black text-white" : ""
            }`}
            onClick={() => {
              setFormat("t20");
            }}
          >
            T20I
          </button>
        </div>
        <div className="flex gap-4 text-white font-semibold justify-between">
          <button
            onClick={() => {
              setRankingsType("teams");
            }}
            className={`bg-blue-500 hover:bg-blue-600 text-white text-md font-semibold px-2 py-2 rounded-xl transition-colors duration-300 ${
              rankingsType === "teams" ? "bg-black text-white" : ""
            } `}
          >
            Teams
          </button>
          <button
            onClick={() => {
              setRankingsType("batsmen");
            }}
            className={`bg-blue-500 hover:bg-blue-600 text-white text-md font-semibold px-2 py-2 rounded-xl transition-colors duration-300 ${
              rankingsType === "batsmen" ? "bg-black text-white" : ""
            } `}
          >
            Batting
          </button>
          <button
            onClick={() => {
              setRankingsType("bowlers");
            }}
            className={`bg-blue-500 hover:bg-blue-600 text-white text-md font-semibold px-2 py-2 rounded-xl transition-colors duration-300 ${
              rankingsType === "bowlers" ? "bg-black text-white" : ""
            } `}
          >
            Bowling
          </button>
          <button
            onClick={() => {
              setRankingsType("allrounders");
            }}
            className={`bg-blue-500 hover:bg-blue-600 text-white text-md font-semibold px-2 py-2 rounded-xl transition-colors duration-300 ${
              rankingsType === "allrounders" ? "bg-black text-white" : ""
            } `}
          >
            ALR
          </button>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-2 rounded-t-xl flex justify-between overflow-x-hidden">
          <p className="text-white">Rank</p>
          <p className="text-white">Team</p>
          <p className="text-white">Rating</p>
        </div>
        {rankings.slice(0, 10).map((rank, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-600 to-blue-800 py-2 rounded-b-xl flex justify-between gap-3 items-center"
          >
            <p className="text-white">{rank.rank}</p>
            <p className="text-white">{rank.name}</p>
            <p className="text-white">{rank.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rankings;
