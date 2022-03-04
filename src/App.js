import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/navbar';
import MyFooter from './components/footer';
import OurServices from './components/OurServices';
import RecentDatas from './components/RecentData';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyLandingPage from './components/LandingHomePage';
import MyTeam from './components/MeetOurTeam';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <MyLandingPage/>
      <RecentDatas/>
      <OurServices/>
      <MyTeam/>
      <MyFooter/>
    </div>
  );
}

export default App;
