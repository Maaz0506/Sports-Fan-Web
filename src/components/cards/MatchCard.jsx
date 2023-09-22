import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

const MatchCard = ({ matchData }) => {
  const [score, setScore] = useState([]);
  const [matchStats, setMatchStats] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/scard",
      headers: {
        "X-RapidAPI-Key": "c33ccecd3emshc0154b04d0db2e3p1f72d2jsn6a6517789dbb",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };
    const handleResult = async () => {
      try {
        const response = await axios.request(options);
        setScore(response.data);
        setMatchStats(response.data[2][1]);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    handleResult();
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
    // date: PropTypes.string.isRequired,
    // location: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
  }).isRequired,
};

export default MatchCard;
