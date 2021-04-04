import './App.css';
import Home from './Pages/Home/Home.js'
import Events from './Pages/Events/Events'
import Gallery from './Pages/Gallery/Gallery'
import Team from './Pages/Team/Team'
import ContactUs from './Pages/Contact/Contact'
import TopSection from './Components/Top-section/Top-section'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <TopSection/>
        <Switch>
          <Redirect exact from="/" to="/Home" />
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Events">
            <Events />
          </Route>
          <Route path="/Gallery">
            <Gallery />
          </Route>
          <Route path="/Team">
            <Team />
          </Route>
          <Route path="/Contact">
            <ContactUs />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App;
