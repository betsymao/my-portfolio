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
          <article className="container card">

            {/* Card Header */}
            <div className="card__header">
              <p className="subheading">Personal Project</p>
              <h2 className="heading">Portfolio Version I</h2>
            </div>

            {/* Card Body */}
            <div className="card__body">
              <p>An earlier and alternative version of my personal portfolio. 
                It features a static page with three sections including my projects. 
                The design of this project was inspired by Google Chrome's Developer Tools Console.</p>
            </div>
    
            {/* Card Footer */}
            <div className="card__footer">
              <div>
                <ul className="tags">
                  <li className="tag">React</li>
                  <li className="tag">Sass</li>
                  <li className="tag">Figma</li>
                </ul>
              </div>
            
              <div>
                <ul className="external">
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
