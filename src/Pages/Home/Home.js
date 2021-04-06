import './Home.css';
import Header from '../../Components/Home/Header/Header'
import About from '../../Components/Home/About/About'
import Gallery from '../../Components/Home/Gallery/Gallery'
import OneDoneR from '../../Components/Home/ODOR/ODOR'
import FPC from '../../Components/Home/FPC/FPC'
import TS from '../../Components/Home/TS/TS'
import Footer from '../../Components/Home/Footer/Footer'


export default function Home(){
    return (
      <div>
        <Header/>
        <About/>
        <OneDoneR/>
        <FPC/> 
        <Gallery/>
        
        
        
        
        <TS/>
        <Footer/>
      </div>

    );
  };
  