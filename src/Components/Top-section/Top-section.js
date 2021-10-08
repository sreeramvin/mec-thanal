import { Link, useLocation } from "react-router-dom";
import "./Top-section.css";
import { useEffect, useState } from "react";
import Logo from "../../Assets/thanal_logo.png";
import {IoClose, IoMenu} from 'react-icons/io5'

export default function TopSection({headerShown}) {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);
  const [expanded, setExpanded] = useState(false)
  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);
  return (
    <div className={`${headerShown ? "TopSection" : "TopSectionHidden"} ${expanded ? "TopSectionExpanded" : null}`}>
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
        rel="stylesheet"
      ></link>
      <div style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
      <div className="logo">
        <img src={Logo} className="logo-img" alt="pic" />
        <p className="logo-text">
          <span>THANAL</span>
          <span>MEC</span>
        </p>
      </div>
      <nav className="navBar">
        <ul className="list">
          <li style={{ padding: 0, margin: 0 }}>
            <Link to="/Home">
              <div
                className="list-wrapper"
                style={{
                  backgroundColor: pathname === "/Home" ? "#24424C" : "#fff",
                }}
              >
                <p
                  className="list-item"
                  style={{
                    backgroundColor: pathname === "/Home" ? "#24424C" : "#fff",
                    color: !(pathname === "/Home") ? "#24424C" : "#fff",
                  }}
                >
                  Home
                </p>
              </div>
            </Link>
          </li>
          <li>
          
              <div
                className="list-wrapper"
                style={{
                  backgroundColor: pathname === "/About" ? "#24424C" : "#fff",
                }}
              >
                <a
                  className="list-item"
                  style={{
                    backgroundColor: pathname === "/About" ? "#24424C" : "#fff",
                    color: !(pathname === "/About") ? "#24424C" : "#fff",
                  }}
                  href="#about"
                >
                  About
                </a>
              </div>
          
          </li>
          <li>
            <Link to="/Gallery">
              <div
                className="list-wrapper"
                style={{
                  backgroundColor: pathname === "/Gallery" ? "#24424C" : "#fff",
                }}
              >
                <p
                  className="list-item"
                  style={{
                    backgroundColor: pathname === "/Gallery" ? "#24424C" : "#fff",
                    color: !(pathname === "/Gallery") ? "#24424C" : "#fff",
                  }}
                >
                  Gallery
                </p>
              </div>
            </Link>
          </li>
          <li>
            {/* <Link to="/Events"> */}
              <div
                className="list-wrapper"
                style={{
                  backgroundColor: pathname === "/Events" ? "#24424C" : "#fff",
                }}
              >
                <a
                  className="list-item"
                  style={{
                    backgroundColor: pathname === "/Events" ? "#24424C" : "#fff",
                    color: !(pathname === "/Events") ? "#24424C" : "#fff",
                  }}
                  href="#odor"
                >
                  Events
                </a>
              </div>
            {/* </Link> */}
          </li>
          <li>
            <Link to="/Team">
              <div
                className="list-wrapper"
                style={{
                  backgroundColor: pathname === "/Team" ? "#24424C" : "#fff",
                }}
              >
                <p
                  className="list-item"
                  style={{
                    backgroundColor: pathname === "/Team" ? "#24424C" : "#fff",
                    color: !(pathname === "/Team") ? "#24424C" : "#fff",
                  }}
                >
                  Team
                </p>
              </div>
            </Link>
          </li>
          <li>
            {/* {<Link to="/Contact">
              <div
                className="list-wrapper"
                style={{
                  backgroundColor: pathname === "/Contact" ? "#24424C" : "#fff",
                }}
              >
                <p
                  className="list-item"
                  style={{
                    backgroundColor: pathname === "/Contact" ? "#24424C" : "#fff",
                    color: !(pathname === "/Contact") ? "#24424C" : "#fff",
                  }}
                >
                  Contact Us
                </p>
              </div>
            </Link>} */}
          </li>
        </ul>
      </nav>
      {!expanded ? 
      <IoMenu className = "menu-icon" onClick = {() => setExpanded((prev) => {return !prev})}/>
       : <IoClose className = "menu-icon" onClick = {() => setExpanded((prev) => {return !prev})} />
      } 
      </div>
      <div className = {`${expanded ? 'exp-list' : 'exp-list-hidden'}`}>
            <ul className = "exp-ul">
              <li className = "exp-li">Home</li>
              <li className = "exp-li"><a href="#about">About</a></li>
              <li className = "exp-li">Gallery</li>
              <li className = "exp-li"><a href="#odor">Events</a></li>
              <li className = "exp-li">Team</li>
            </ul>
      </div>
    </div>
  );
}
