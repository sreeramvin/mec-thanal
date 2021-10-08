import './App.css';
import Home from './Pages/Home/Home.js'
import About from './Pages/About/About'
import Events from './Pages/Events/Events'
import Gallery from './Pages/Gallery/Gallery'
import Team from './Pages/Team/Team'
import ContactUs from './Pages/Contact/Contact'
import TopSection from './Components/Top-section/Top-section'
import Footer from './Components/Home/Footer/Footer'
import ScrollToTop from './utils/ScrollToTop'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    
    <Router>
      <TopSection  headerShown = {true} />
       <ScrollToTop/>
      <div>
      
        <Switch>
          <Redirect exact from="/" to="/Home" />
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Gallery">
            <Gallery />
          </Route>
          <Route path="/Events">
            <Events />
          </Route>
          
          <Route path="/Team">
            <Team />
          </Route>
          <Route path="/Contact">
            <ContactUs />
          </Route>

        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
