import './Home.css';
import Header from '../../Components/Home/Header/Header'
import About from '../../Components/Home/About/About'
import Gallery from '../../Components/Home/Gallery/Gallery'
import OneDoneR from '../../Components/Home/ODOR/ODOR'
import FPC from '../../Components/Home/FPC/FPC'
import TS from '../../Components/Home/TS/TS'
import TopSection from '../../Components/Top-section/Top-section';
import Header2 from '../../Components/Home/Header2/header2'
import {useEffect, useRef, useState} from 'react'


export default function Home(){
    const aboutRef = useRef(null);
    const [headerShown, setHeaderShown] = useState(false)
    useEffect(() => {
      window.addEventListener('scroll', scrollListener)
      return () => window.removeEventListener('scroll', scrollListener)
    },[])

    const scrollListener = () => {
      if(document.documentElement.scrollTop > window.innerHeight)
        setHeaderShown(true)
      else
        setHeaderShown(false)
    }
    return (
      <div>
        <TopSection headerShown = {true}/>
        <Header2/>
        <Header/>
        <About/>
        <OneDoneR/>
        <FPC/> 
        <Gallery/>
        
        
        
        
        <TS/>
       
      </div>

    );
  };
  