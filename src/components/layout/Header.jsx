import Logo from '../../assets/logo.svg';

function Header() {
  return (
    <>
      <header className="container">

        <a href="/"><img src={Logo} alt="Logo" /></a>

        <nav>
          <ul>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

      </header>
    </>
  )
}

export default Header;
