import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MatchCard from "./MatchCard";

function MatchCardSlider() {
  const matchDataArray = [
    { team1: "Team A", team2: "Team B", result: "Team A won by 20 runs" },
    { team1: "Team C", team2: "Team D", result: "Match tied" },
    { team1: "Team C", team2: "Team D", result: "Match tied" },
    { team1: "Team C", team2: "Team D", result: "Match tied" },
    { team1: "Team C", team2: "Team D", result: "Match tied" },
    { team1: "Team C", team2: "Team D", result: "Match tied" },
    { team1: "Team C", team2: "Team D", result: "Match tied" },
    { team1: "Team C", team2: "Team D", result: "Match tied" },
    { team1: "Team C", team2: "Team D", result: "Match tied" },
  ];
  const [swiper, setSwiper] = useState(null);

  const goToNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className="w-full">
      <Swiper
        slidesPerView={3}
        navigation
        loop
        spaceBetween={20}
        breakpoints={
          {
            // Add breakpoints for responsive design if needed
          }
        }
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {matchDataArray.map((matchData, index) => (
          <SwiperSlide key={index}>
            <MatchCard matchData={matchData} />
          </SwiperSlide>
        ))}
      </Swiper>
      {swiper && swiper.isEnd ? (
        <button
          onClick={goToNextSlide}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        >
          Next
        </button>
      ) : null}
    </div>
  );
}

export default MatchCardSlider;
