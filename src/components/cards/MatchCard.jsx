import PropTypes from "prop-types";

const MatchCard = ({ matchData }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 m-2">
      <h2 className="text-xl font-semibold">
        {matchData.team1} vs {matchData.team2}
      </h2>
      {/* <p className="text-sm text-gray-500">
        {matchData.date} - {matchData.location}
      </p> */}
      <p className="text-lg">{matchData.result}</p>
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
