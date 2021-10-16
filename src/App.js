import './App.css';
import Home from './Pages/Home/Home.js'
// import About from './Pages/About/About'
// import Events from './Pages/Events/Events'
// import Gallery from './Pages/Gallery/Gallery'
import Team from './Pages/Team/Team'
// import ContactUs from './Pages/Contact/Contact'yes
import TopSection from './Components/Top-section/Top-section'
import Footer from './Components/Home/Footer/Footer'
import ScrollToTop from './utils/ScrollToTop'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {useState} from 'react'

function App() {
  const [pageName, setPageName] = useState()
  return (
    
    <Router>
       <ScrollToTop/>
      <TopSection setPageName = {(e) => setPageName(e)}/>
      <div>
      
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home">
            <Home pageName = {pageName}/>
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
