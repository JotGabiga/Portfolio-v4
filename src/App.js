import Home from "./components/Home/Home";
import SocialMediaBar from "./components/SocialMediaBar/SocialMediaBar";
import "./App.scss";
import IeProblem from "./IE problem.gif";
import { isIE } from "react-device-detect";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  console.log("start");
  console.log(process.env.TEST);
  if (isIE)
    return (
      <div className="ieMessage">
        <img src={IeProblem} alt="Sad face"></img>
        <h1>Hi there. You’re using an outdated browser</h1>
        <p>
          For a safer and faster user experience use a modern browser like
          Chrome or Edge.
        </p>
      </div>
    );
  return (
    <div className="App">
      <SocialMediaBar></SocialMediaBar>
      <Home></Home>
    </div>
  );
}
export default App;
