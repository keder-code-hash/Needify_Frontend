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

function App() {
  return (
    <div className="App">
      <MyNavbar/>

        <switch>
          <Routes>
            <Route exact path="/" element={[<MyLandingPage />,<RecentDatas/>,<OurServices/>,<MyTeam/>,<ContactForm/>]} />
            <Route path="recent" element={<RecentDatas />} />
            <Route path="ngodash" element={<Message />} />
            <Route path="login" element={<MyLoginPage />} />
            <Route path="register" element={<MyRegister/>} />
          </Routes> 
        </switch>

      <MyFooter/>
    </div>
  );
}

export default App;