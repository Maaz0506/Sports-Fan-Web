import LoginForm from './components/Forms/LoginForm'
import Signup from './components/Forms/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard';
import News from './components/News';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<LoginForm/>}  />
          <Route  path='/register' element={<Signup/>}  />
          <Route  path='/dashboard' element={<Dashboard/>}  />
          <Route  path='/news' element={<News/>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
