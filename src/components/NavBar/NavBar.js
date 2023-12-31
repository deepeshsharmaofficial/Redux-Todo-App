import { Link } from "react-router-dom";

function NavBar(){
  return(
    <>
      <>
        <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
          <div className="container-fluid">
              
              <Link className="navbar-brand" href="#">Utility Apps</Link>
              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="Todo">Todo</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="notes">Notes</Link>
                  </li>
                </ul>
              </div>

            </div>
        </nav>
      </>
    </>
  );
}

export default NavBar;