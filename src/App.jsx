
import LoginForm from './components/Forms/LoginForm'
import Header from './components/Header'
import MatchCardSlider from './components/cards/MatchSlider'
import Rankings from './components/rankings/Rankings'

function App() {
  return (
    <>
    {/* <LoginForm/> */}
    <Header/>
    <MatchCardSlider/>
    <div className='flex flex-col justify-center items-end'>

    <Rankings/>
    </div>
    </>
  );
}

export default App;
