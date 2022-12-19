/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../assets/images/logo.svg";
import User from "../assets/images/icon-user.png";
import Cart from "../assets/images/icon-cart-empty.svg";

function NavbarComponent() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light navbar-store"
        data-aos="fade-down"
        aria-label="Navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/category">
                  Categories
                </a>
              </li>
            </ul>

            <ul className="navbar-nav d-none d-lg-flex">
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={User}
                    alt=""
                    className="rounded-circle mr-2 profile-picture"
                  />
                  Hi, Angga
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/dashboard">
                    Dashboard
                  </a>
                  <a className="dropdown-item" href="/dashAcc">
                    Settings
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">
                    Logout
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link d-inline-block mt-2" href="/cart">
                  <img src={Cart} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
