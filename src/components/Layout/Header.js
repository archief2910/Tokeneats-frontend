import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'

const Headers = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth, user: null, token: ''
    })
    localStorage.removeItem("auth");
    alert("Logged out successfully!")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01" style={{ marginRight: "20px" }}>
          <Link to="/" className="navbar-brand mx-3 text-light"> <img src='/images/logo.PNG' /></Link>
          <ul className="navbar-nav mx-5 mt-lg-0">
            <li className="nav-item">
              <NavLink to="/menu" className="nav-link text-white" href="#">Mess Menu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="https://drive.google.com/file/d/1n3AQbD-UFMTI2NVZvs_R-Kg3eX06d9zo/view?usp=sharing" className="nav-link text-white" href="#">Mess Committee</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-white" href="#">About Us</NavLink>
            </li>
            {auth.user?.role === "vendor" ? (

              <>
                <li className="nav-item">
                  <NavLink to="/vendor" className="nav-link text-white" href="#">Pay</NavLink>
                </li>
              </>
            ) : (
              <>

              </>
            )}
          </ul>
          <ul className="navbar-nav ms-auto mt-lg-0">
            {!auth.user ? (
              <>
                <li className="nav-item my-auto">
                  <NavLink to="/login" className="nav-link text-white" href="#">Signin</NavLink>
                </li>
                <li className="nav-item" >
                  <NavLink to="/register" style={{ "padding-top": "0px" }} className="nav-link" href="#"><button type="button" className="btn btn-danger btn-lg mt-2 fs-6">Get Started</button></NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle text-light"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {auth?.user?.name}
                  </NavLink>
                  {auth.user?.role === "vendor" ? (
                  <></>
                  ):(
<NavLink to="/dashboard" className="dropdown-item">
                    Dashboard
                  </NavLink>
                  )}

                  <NavLink
                    onClick={handleLogout}
                    to="/"
                    className="dropdown-item"
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Headers