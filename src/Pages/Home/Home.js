import './Home.css';
import Header from '../../Components/Home/Header/Header'
import About from '../../Components/Home/About/About'
import Gallery from '../../Components/Home/Gallery/Gallery'
import OneDoneR from '../../Components/Home/ODOR/ODOR'
import FPC from '../../Components/Home/FPC/FPC'
import TS from '../../Components/Home/TS/TS'
import Pradeeksha from '../../Components/Home/Pradeeksha/Pradeeksha';
import TopSection from '../../Components/Top-section/Top-section';
import Header2 from '../../Components/Home/Header2/header2'
import {useEffect, useRef} from 'react'


export default function Home({pageName}){
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

    useEffect(() => {
      console.log(pageName)
      scrollToSec(pageName)
    },[pageName])

    const scrollToSec = (e) => {
      setTimeout(() => {
        if(aboutRef.current && eventRef.current && galleryRef.current)
        {
          // eslint-disable-next-line
          switch(e){
          case "about": 
            aboutRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            break;
          case "events":
            eventRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            break;
          case "gallery":
            galleryRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            break;
         

        }}
      }, 100)
      
    }
    return (
    
      <div style = {{overflowX: 'hidden'}}>
        
        <Header2/>
        <Header/>
        <div  ref = {aboutRef}>
        <About/>
        </div>
        <div ref = {eventRef}>
        <OneDoneR />
        </div>
        <Pradeeksha/>
        <TS/>
        <FPC/>    
        <div  ref = {galleryRef}>
        <Gallery/>
        </div>
       
      </div>

    );
  };
  