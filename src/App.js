import './App.css';

import { Routes, Route, Link } from "react-router-dom";

import MyNavbar from './components/navbar';
import MyFooter from './components/footer';
import OurServices from './components/OurServices';
import RecentDatas from './components/RecentData';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyLandingPage from './components/LandingHomePage';
import MyTeam from './components/MeetOurTeam';
import Message from './components/ngodashboard';
import LoginPage from './components/LogIn.Jsx';

function App() {
  return (
    <div className="App">
      <MyNavbar/>

        <Routes>
          <Route exact path="/" element={[<MyLandingPage />,<RecentDatas/>,<OurServices/>,<MyTeam/>]} />
          <Route path="recent" element={<RecentDatas />} />
          <Route path="ngodash" element={<Message />} />
          <Route path="Login" element={<LoginPage />} />
        </Routes> 

      <MyFooter/>
    </div>
  );
}

export default App;