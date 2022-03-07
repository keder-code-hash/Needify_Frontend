import './App.css';
import { BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import MyNavbar from './components/navbar';
import MyFooter from './components/footer';
import OurServices from './components/OurServices';
import RecentDatas from './components/RecentData';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyLandingPage from './components/LandingHomePage';
import MyTeam from './components/MeetOurTeam';   
import MyRegister from './components/Register';
import ContactForm from './components/ContactPage';
import MyLatestNews from './components/LatestNews'; 
import Sidebar from './components/ngodashboard/Sidebar';
import TableFormatData from './components/ngodashboard/Details';
import Layout from './components/ngodashboard/DashBoardLayout';
import SignIn from './components/LogIn'
import SignUp from './components/Register'
 
 
export default function App() {
  return (
    <Router>
      <div>          
        <MyNavbar/>

        <Switch>
          <Route exact path="/">
            <MyLandingPage />,<RecentDatas/>,<OurServices/>,<MyTeam/>,<MyLatestNews/>, <ContactForm/>
          </Route> 
          <Route path="/login" >
           <SignIn/>
          </Route>
          <Route path="/register" >
           <SignUp/>
          </Route>
          <Route path="/ngodash">
            <Layout />
          </Route>
        </Switch>

        <MyFooter/>
      </div>
    </Router> 
  );
}
 
 