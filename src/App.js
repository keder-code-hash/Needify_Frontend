import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/navbar';
import MyFooter from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <MyFooter/>
    </div>
  );
}

export default App;
