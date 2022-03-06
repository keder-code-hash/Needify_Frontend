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
import MyLoginPage from './components/LogIn';
import MyRegister from './components/Register';
import ContactForm from './components/ContactPage';
import MyLatestNews from './components/LatestNews';
import Layout from './components/ngodashboard/DashBoardLayout';
import Sidebar from './components/ngodashboard/Sidebar';

import DetailsData from './components/ngodashboard/Details';
import EventsDetails from './components/ngodashboard/Events';
function App() {
  return (
    <div className="App">
      <MyNavbar/>

        <switch>
          <Routes>
            <Route exact path="/" element={[<MyLandingPage />,<RecentDatas/>,<OurServices/>,<MyTeam/>,<MyLatestNews/>, <ContactForm/>]} />
            <Route path="recent" element={<RecentDatas />} />
            <Route path="login" element={<MyLoginPage />} />
            <Route path="register" element={<MyRegister/>} />

            <Route path="ngodash" element={<Layout />} />
          </Routes> 
        </switch>

      <MyFooter/>
    </div>
  );
}

export default App;