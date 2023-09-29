import LoginForm from './components/Forms/LoginForm'
import Signup from './components/Forms/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard';
import News from './components/News';
function App() {
  const apiKey="4626031a21c146728dff95fcec45955d"

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/news' element={<News apiKey={apiKey}  key="sports" pageSize={8} category="sports"/>}/>
          <Route  path='/' element={<LoginForm/>}  />
          <Route  path='/register' element={<Signup/>}  />
          <Route  path='/dashboard' element={<Dashboard/>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
