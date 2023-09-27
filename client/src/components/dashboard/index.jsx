import Header from "../Header"
import MatchCardSlider from "../cards/MatchSlider"
import Rankings from "../rankings/Rankings"
const Dashboard = () => {
  return (
    <>
    
   <Header />
   <MatchCardSlider />
   <div className="flex flex-col justify-center items-end">
     <Rankings />
   </div>
   </>
  )
}

export default Dashboard
