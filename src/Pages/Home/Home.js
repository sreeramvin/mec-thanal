import './Home.css';
import Header from '../../Components/Home/Header/Header'
import About from '../../Components/Home/About/About'
import Gallery from '../../Components/Home/Gallery/Gallery'
import OneDoneR from '../../Components/Home/ODOR/ODOR'
import Fpc from '../../Components/Home/FPC/FPC'
import Tc from '../../Components/Home/TS/TS'
import Footer from '../../Components/Home/Footer/Footer'


export default function Home(){
    return (
      <div>
        <Header/>
        <About/>
        <Gallery/>
        <OneDoneR/>
        <Fpc/>
        <Tc/>
        <Footer/>
      </div>

    );
  };
  