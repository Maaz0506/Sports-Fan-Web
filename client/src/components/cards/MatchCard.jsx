import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

const MatchCard = () => {
  const [details, setDetails] = useState([]);
  const [matchStats, setMatchStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

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
        setIsLoading(true)
        const response = await axios.request(options);
        setMatchStats(response.data.matchHeader.result);
        setDetails(response.data.matchHeader);
        setIsLoading(false)
      } catch (error) {
        setIsLoading(true)
        console.error(error);
      }
    };
    handleResult();
  }, []);

  return (
      isLoading?(
        <p>Loading..</p>
      ):(
        <div className="bg-white shadow-md rounded-md p-4 m-2">
        {details?.map((names, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold">
              {names.team1.name} vs {names.team2.name}
            </h2>
          </div>
        ))}
        {matchStats?.map((result, index) => (
          <div key={index}>
            <p className="text-lg">{result.winningTeam} victorious</p>
          </div>
        ))}
      </div>
    )
      )
        }
    

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
