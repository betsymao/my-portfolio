import { useState } from 'react';

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

function Header() {
  const [toggleOpen, setToggleOpen] = useState(false);
  
  return (
    <>
      <header>
        <div className="container">
          <nav> {/* flex */}
            <div>
              <Link to="/" className="logo">Betsy Mao</Link>
            </div>

            <div className="toggle" onClick={() => setToggleOpen(!toggleOpen)}>
              <button className="toggle__btn"><FaBarsStaggered /></button>
            </div>

            <ul className={toggleOpen ? "open" : ""}>
              <li>
                <HashLink to="#works">Works</HashLink>
              </li>
              <li>
                <HashLink to="#contact">Contact</HashLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* <header>
        <div className="container">
          
          <div>
            <Link to="/" className="logo">Betsy Mao</Link>
          </div> */}

          {/* <div className="toggle"> */}
            {/* <button><FaTimes /></button> */}
            {/* <button className="toggle__btn"><FaBarsStaggered /></button> */}
          {/* </div> */}

          {/* <nav>
            <ul>
              <div className="menu">
                <li>
                  <HashLink to="#works">Works</HashLink>
                </li>
                <li>
                  <HashLink to="#contact">Contact</HashLink>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </header> */}
    </>
  )
}

export default Header;
