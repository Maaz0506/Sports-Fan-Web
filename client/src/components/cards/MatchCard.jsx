import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

const MatchCard = () => {
  const [score, setScore] = useState([]);
  const [matchStats, setMatchStats] = useState([]);

  const options = {
    method: "GET",
    url: "https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/scard",
    headers: {
      "X-RapidAPI-Key": "683352a4e5msh1fd0bf5d197cfeep1fa887jsn54c414f1b212",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const handleResult = async () => {
      try {
        const response = await axios.request(options);
        setScore(response.data);
        setMatchStats(response.data[2][1]);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    // handleResult();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-md p-4 m-2">
      <h2 className="text-xl font-semibold">
        {matchStats.team1} vs {matchStats.team2}
      </h2>
      <p className="text-sm text-gray-500">
        {matchStats.date} - {matchStats.location}
      </p>
      <p className="text-lg">{score.result}</p>
    </div>
  );
};

MatchCard.propTypes = {
  matchData: PropTypes.shape({
    team1: PropTypes.string.isRequired,
    team2: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
  }).isRequired,
};

export default MatchCard;
