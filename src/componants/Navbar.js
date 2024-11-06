import { Link } from "react-router-dom";

function Navbar({ title, mode, toggleMode, aboutText }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                My-App
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {aboutText}
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onClick={toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label
              className={`form-check-label ${
                mode === "dark" ? "text-white" : ""
              }`}
              htmlFor="flexSwitchCheckChecked"
            >
              {mode === "dark" ? "Disable Dark Mode" : "Enable Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
