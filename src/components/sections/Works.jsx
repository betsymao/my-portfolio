import { 
  FaGithub,
  FaArrowUpRightFromSquare
} from "react-icons/fa6";

function Works() {
  return (
    <>
      <section id="works">

        {/* Two columns */}
        {/* responsive grid system */}
        <div className="container collection">

          {/* Column 1 */}
          {/* Card */}
          <article className="card">

            {/* Card Header */}
            <div className="card__header">
              <p className="subheading">Personal Project</p>
              <a href="https://betsymao.onrender.com/" className="heading__link"><h2 className="heading">Portfolio Version I</h2></a>
            </div>

            {/* Card Body */}
            <div className="card__body">
              <p>An earlier and alternative version of my personal portfolio. 
                It features a static page with three sections. 
                The design of this project was inspired by Google Chrome's Developer Tools Console.</p>
            </div>
    
            {/* Card Footer */}
            <div className="card__footer">
              <div>
                <ul className="tags">
                  <li className="tag">HTML</li>
                  <li className="tag">CSS</li>
                  <li className="tag">JavaScript</li>
                  <li className="tag">React</li>
                  <li className="tag">Sass</li>
                  <li className="tag">Figma</li>
                </ul>
              </div>
            
              <div>
                <ul className="external">
                  <li>
                    <a href="https://github.com/betsymao/portfolio-bm"><FaGithub /></a>
                  </li>
                  <li>
                    <a href="https://betsymao.onrender.com/"><FaArrowUpRightFromSquare /></a>
                  </li>
                </ul>
              </div>
            </div>

          </article>

          {/* Column 2 */}
          {/* Card */}
          <article className="card">

            {/* Card Header */}
            <div className="card__header">
              <p className="subheading">Example Project</p>
              <a href="https://okapi-portfolio.onrender.com/" className="heading__link"><h2 className="heading">Okapi</h2></a>
            </div>

            {/* Card Body */}
            <div className="card__body">
              <p>An example e-commerce project.
                It features a home page, product pages, product detail pages and a cart system.
                The project retrieves and renders data from a third-party API. The logo and favicon were designed in Figma.</p>
            </div>

            {/* Card Footer */}
            <div className="card__footer">
              <div>
                <ul className="tags">
                  <li className="tag">HTML</li>
                  <li className="tag">CSS</li>
                  <li className="tag">JavaScript</li>
                  <li className="tag">React</li>
                  <li className="tag">Bootstrap</li>
                  <li className="tag">Sass</li>
                  <li className="tag">Figma</li>
                </ul>
              </div>

              <div>
                <ul className="external">
                  <li>
                    <a href="https://github.com/betsymao/portfolio-store"><FaGithub /></a>
                  </li>
                  <li>
                    <a href="https://okapi-portfolio.onrender.com/"><FaArrowUpRightFromSquare /></a>
                  </li>
                </ul>
              </div>
            </div>

          </article>

        </div>

      </section>
    </>
  );
}

export default Works;
