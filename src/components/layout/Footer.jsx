// React Icons
import { 
  FaLinkedin,
  FaGithub
} from 'react-icons/fa6';

// Configure react-icons props using React Context API
// https://www.npmjs.com/package/react-icons
import { IconContext } from 'react-icons';

function Footer() {
  return (
    <>
      <footer id="contact">

        <div className="social">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/maobetsy">
                {/* LinkedIn React Icon */}
                <IconContext.Provider value={{ size: "8em"}}>
                  <FaLinkedin />
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a href="https://github.com/betsymao">
                {/* GitHub React Icon */}
                <IconContext.Provider value={{ size: "8em"}}>
                  <FaGithub />
                </IconContext.Provider>
              </a>
            </li>
          </ul>
        </div>

      </footer>
    </>
  )
}

export default Footer;