import "./App.css";
import Intro from "./component/Intro";
import NavigationBar from "./component/NavigationBar";
import SuperHero from "./component/SuperHero";
import Trending from "./component/Trending";
import "./style/landingPage.css";

function App() {
  return (
    <div>
      <div className="mybg">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>

      <div className="superHero">
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
