import Home from './components/Home/Home';
import SocialMediaBar from "./components/SocialMediaBar/SocialMediaBar";
import "./App.scss"; 
import IeProblem from './IE problem.gif'
import { isIE } from 'react-device-detect';

function App() {
  if (isIE)
    return (
      <div className="ieMessage">
        <img src={IeProblem} alt="Sad face"></img>
        <h1>Hi there. You’re using an outdated browser</h1>
        <p>For a safer and faster user experience use a modern browser like Chrome or Edge.</p>
      </div>
    )
  return (
    <div className="App">
      <SocialMediaBar></SocialMediaBar>
     <Home></Home>
    </div>
  );
}
export default App;
