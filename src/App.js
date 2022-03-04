import './App.css';

import { Routes, Route, Link } from "react-router-dom";

import MyNavbar from './components/navbar';
import MyFooter from './components/footer';
import OurServices from './components/OurServices';
import RecentDatas from './components/RecentData';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyLandingPage from './components/LandingHomePage';
import MyTeam from './components/MeetOurTeam';
<<<<<<< HEAD
import MyLatestNews from './components/LatestNews';
=======
import Message from './components/ngodashboard';

>>>>>>> a362f9a57e4e0ad9341897c207a8032d8730e0c1

function App() {
  return (
    <div className="App">
      <MyNavbar/>
<<<<<<< HEAD
      <MyLandingPage/>
      <RecentDatas/>
      <OurServices/>
      <MyTeam/>
      <MyLatestNews/>
=======

        <Routes>
          <Route exact path="/" element={[<MyLandingPage />,<RecentDatas/>,<OurServices/>,<MyTeam/>]} />
          <Route path="recent" element={<RecentDatas />} />
          <Route path="ngodash" element={<Message />} />
        </Routes> 

>>>>>>> a362f9a57e4e0ad9341897c207a8032d8730e0c1
      <MyFooter/>
    </div>
  );
}

export default App;