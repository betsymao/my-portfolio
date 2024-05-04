import { 
  FaGithub,
  FaArrowUpRightFromSquare
} from "react-icons/fa6";

function Works() {
  return (
    <>
      <section id="works">

        {/* Two columns */}
        <div>

          {/* Column 1 */}
          {/* Card */}
          <article className="container card">

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
          {/* <div>
            Image Here
          </div> */}

        </div>

      </section>
    </>
  );
}

export default Works;
