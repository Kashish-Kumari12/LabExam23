import logo from './logo.svg';
import './App.css';
import PollDisplay from './PollDisplay';
import UserParticipation from './UserParticipation';
import Task2 from './Task2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThankyouMessage from './ThankyouMessage';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Polling App</h1>
      <PollDisplay/>
      <Routes>
        <Route path="userParticipate" element={<UserParticipation/>}/>
        <Route path="userParticipate/thankyou" element={<ThankyouMessage/>}/>
      </Routes>
      

       
        {/* <Task2/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
