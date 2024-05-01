import { 
  FaGithub,
  FaArrowUpRightFromSquare
} from "react-icons/fa6";

function Projects() {
  return (
    <>
      <section>

        {/* Two columns */}
        <div>

          {/* Column 1 */}
          {/* Card */}
          <article className="container">

            {/* Card Header */}
            <div className="project">
              <p className="subheading">Personal Project</p>
              <h2 className="heading">Portfolio Version I</h2>
            </div>

            {/* Card Body */}
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit optio dolor facilis sint. Nulla vero velit itaque explicabo exercitationem quo!</p>
            </div>
    
            {/* Card Footer */}
            <div>
              <div>
                <ul>
                  <li>tag</li>
                  <li>tag</li>
                  <li>tag</li>
                </ul>
              </div>
            
              <div>
                <ul>
                  <li>
                  <a href=""><FaGithub /></a>
                  </li>
                  <li>
                    <a href=""><FaArrowUpRightFromSquare /></a>
                  </li>
                </ul>
              </div>
            </div>

          </article>

          {/* Column 2 */}
          {/* <div>
            Image Here
          </div> */}

        </div>

      </section>
    </>
  );
}

export default Projects;
