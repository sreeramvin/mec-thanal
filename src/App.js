import './App.css';
import Home from './Pages/Home/Home.js'
// import About from './Pages/About/About'
// import Events from './Pages/Events/Events'
// import Gallery from './Pages/Gallery/Gallery'
import Team from './Pages/Team/Team'
// import ContactUs from './Pages/Contact/Contact'yes
// import TopSection from './Components/Top-section/Top-section'
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
       <ScrollToTop/>
      <div>
      
        <Switch>
          <Redirect exact from="/" to="/Home" />
          <Route path="/home">
            <Home />
          </Route>
          
          <Route path="/team">
            <Team />
          </Route>

        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
