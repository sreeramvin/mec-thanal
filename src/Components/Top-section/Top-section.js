import { Link,useLocation,useHistory} from "react-router-dom";
import "./Top-section.css";
import { useEffect, useState } from "react";
import Logo from "../../Assets/thanal_logo.png";
import { IoClose, IoMenu } from 'react-icons/io5'

export default function TopSection({ setPageName }) {
  // eslint-disable-next-line
  const location = useLocation();
  // eslint-disable-next-line
  const history = useHistory();
  const [pathname, setPathname] = useState('');
  const [expanded, setExpanded] = useState(false)
  /*useEffect(() => {
    const scrollSec = window.location.href.split('#')[1];
    const byslash = window.location.href.split('/')
    if (scrollSec !== undefined) {
      setPathname(scrollSec)
      scrollToSec(scrollSec)
    }
    else {
      setPathname(byslash[byslash.length - 1])
    }
    console.log(pathname)
    // eslint-disable-next-line
  }, [window.location.href]);*/

  useEffect(() => {
    if (typeof setPageName === 'function')
      setPageName(pathname)
  },[pathname])

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-200px";
      }
      prevScrollpos = currentScrollPos;
    }

  }, [])

  const navClick = (e, t) => {
    if (t === "mob")
      setExpanded(false)
    setPathname(e)
  }
  return (
    <div id="navbar" className={`${true ? "TopSection" : null} ${expanded ? "TopSectionExpanded" : null}`}>
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
        rel="stylesheet"
      ></link>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
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
              <Link to="/home" style = {{textDecoration: 'none'}}>
                <div
                  className={`${pathname === "Home" || pathname === "home"  ? "list-wrapper-selected" : null} list-wrapper`}

                >
                  <p
                    className="list-item"
                    onClick={() => navClick("home", "desk")}
                  >
                    Home
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/home" style = {{textDecoration: 'none'}}>
              <div
                className={`${pathname === "about" ? "list-wrapper-selected" : null} list-wrapper`}

              >
                <p
                  className="list-item"
                    onClick={() => navClick("about", "desk")}
                >
                  About
                </p>
              </div>
              </Link>
            </li>
            <li>
              <Link to="/home" style = {{textDecoration: 'none'}}>
              <div
                className={`${pathname === "events" ? "list-wrapper-selected" : null} list-wrapper`}

              >
                <p
                  className="list-item"
                  onClick={() => navClick("events", "desk")}

                >
                  Events
                </p>
              </div>
              </Link>
            </li>
            <li>
            <Link to="/home" style = {{textDecoration: 'none'}}>
              <div
                className={`${pathname === "gallery" ? "list-wrapper-selected" : null} list-wrapper`}

              >
                <p
                  className="list-item"
                  onClick={() => navClick("gallery", "desk")}
                >
                  Gallery
                </p>
              </div>
              </Link>
            </li>

            <li>
              <Link to="/Team" style = {{textDecoration: 'none'}}>
                <div
                  className={`${pathname === "Team" || pathname === "team" ? "list-wrapper-selected" : null} list-wrapper`}

                >
                  <p
                    className="list-item"
                    onClick={() => navClick("team", "desk")}
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
          <IoMenu className="menu-icon" onClick={() => setExpanded((prev) => { return !prev })} />
          : <IoClose className="menu-icon" onClick={() => setExpanded((prev) => { return !prev })} />
        }
      </div>
      <div className={`${expanded ? 'exp-list' : 'exp-list-hidden'}`}>
        <ul className="exp-ul">
          <li className="exp-li">
            <Link to="/home" style = {{textDecoration: 'none'}}>
              <div
                className={`${pathname === "home" ? "list-wrapper-selected-mob" : null}`}
                onClick={() => navClick("home", "mob")}
              >
                <p
                  className="list-item-mob"
                >
                  Home
                </p>
              </div>
            </Link>
          </li>
          <li className="exp-li">
          <Link to="/home" style = {{textDecoration: 'none'}}>
            <div className={`${pathname === "about" ? "list-wrapper-selected-mob" : null}`}>
              <p className="list-item-mob" onClick={() => navClick("about", "mob")}>About</p>
            </div>
            </Link>
          </li>
          <li className="exp-li">
          <Link to="/home" style = {{textDecoration: 'none'}}>
            <div className={`${pathname === "events" ? "list-wrapper-selected-mob" : null}`}>
              <p className="list-item-mob" onClick={() => navClick("events", "mob")}>Events</p>
            </div>
            </Link>
          </li>
          <li className="exp-li">
          <Link to="/home" style = {{textDecoration: 'none'}}>
            <div className={`${pathname === "gallery" ? "list-wrapper-selected-mob" : null}`}>
              <p className="list-item-mob" onClick={() => navClick("gallery", "mob")}>Gallery</p>
            </div>
            </Link>
          </li>
          
          <li className="exp-li">
            <Link to="/Team" style = {{textDecoration: 'none'}}>
              <div
                className={`${pathname === "team" ? "list-wrapper-selected-mob" : null}`}
                onClick={() => navClick("team", "mob")}

              >
                <p
                  className="list-item-mob"
                >
                  Team
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
