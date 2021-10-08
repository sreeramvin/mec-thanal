import './Home.css';
import Header from '../../Components/Home/Header/Header'
import About from '../../Components/Home/About/About'
import Gallery from '../../Components/Home/Gallery/Gallery'
import OneDoneR from '../../Components/Home/ODOR/ODOR'
import FPC from '../../Components/Home/FPC/FPC'
import TS from '../../Components/Home/TS/TS'
import TopSection from '../../Components/Top-section/Top-section';
import Header2 from '../../Components/Home/Header2/header2'
import {useRef} from 'react'


export default function Home(){
    // const aboutRef = useRef(null);
    // const [headerShown, setHeaderShown] = useState(false)
    // useEffect(() => {
    //   window.addEventListener('scroll', scrollListener)
    //   return () => window.removeEventListener('scroll', scrollListener)
    // },[])

    // const scrollListener = () => {
    //   if(document.documentElement.scrollTop > window.innerHeight)
    //     setHeaderShown(true)
    //   else
    //     setHeaderShown(false)
    // }
    const aboutRef = useRef();
    const eventRef = useRef();
    const galleryRef = useRef();

    const scrollToSec = (e) => {
      setTimeout(() => {
        if(aboutRef.current && eventRef.current && galleryRef.current)
        {
          switch(e){
          case "about": 
            aboutRef.current.scrollIntoView();
            break;
          case "event":
            eventRef.current.scrollIntoView();
            break;
          case "gallery":
            galleryRef.current.scrollIntoView();
            break;
          case "default":
            break;

        }}
      }, 500)
      
    }
    return (
    
      <div>
        <TopSection scrollToSec = {(e) => scrollToSec(e)}/> 
        <Header2/>
        <Header/>
        <div  ref = {aboutRef}>
        <About/>
        </div>
        <div ref = {eventRef}>
        <OneDoneR />
        </div>
        <TS/>
        <FPC/>    
        <div  ref = {galleryRef}>
        <Gallery/>
        </div>
       
      </div>

    );
  };
  