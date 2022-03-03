import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/navbar';
import MyFooter from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyLandingPage from './components/LandingHomePage';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <MyLandingPage/>
      <MyFooter/>
    </div>
  );
}

export default App;
