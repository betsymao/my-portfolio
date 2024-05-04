import Logo from '../../assets/logo.svg';

function Header() {
  return (
    <>
      <header>
        <div className="container">
          {/* <a href="/"><img src={Logo} alt="Logo" /></a> */}
          
          <div>
            <a href="/" className="logo">Betsy Mao</a>
          </div>

          <nav>
            <ul>
              <li>
                <a href="#works">Work</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header;
