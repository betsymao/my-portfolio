// Libraries
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// React Icons
import { FaBarsStaggered } from 'react-icons/fa6';

function Header() {
  const [toggleOpen, setToggleOpen] = useState(false);
  
  return (
    <>
      <header>
        <div className="container">
          <nav>
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
    </>
  )
}

export default Header;