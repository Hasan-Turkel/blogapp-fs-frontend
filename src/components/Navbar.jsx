import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useAuthCalls from "../hooks/useAuthCalls";
import { BsFillPersonFill } from "react-icons/bs";
import { toastWarnNotify } from "../helper/ToastNotify"

const Navbar = () => {

  const {user} = useSelector((state)=>state.auth)
  const { logout } = useAuthCalls()

  const person = user? "text-success":"text-light"

  return (
    <nav className=" navbar navbar-expand-md ps-4 ">
  <div className="container-fluid ">
    <NavLink className="navbar-brand" to="/">
      <h2>BLOG-APP</h2>
    </NavLink>
    <button
      className="navbar-toggler me-auto"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav fs-5">
        <NavLink className="nav-link fw-bolder" aria-current="page" to="/">
          Dashoard
        </NavLink>
        <NavLink className="nav-link fw-bolder" aria-current="page" to="/new-blog" onClick={()=>!user&&toastWarnNotify("You must login first.")}>
          New Blog
        </NavLink>
        <NavLink className="nav-link fw-bolder" aria-current="page" to="about">
          About
        </NavLink>
      </div>
    </div>
    <li className="nav-item dropdown me-5">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
  >
   <BsFillPersonFill className={"fs-2 " + (person)}/>
  </a>

  {!user?(<ul className="dropdown-menu " >
    <li>
      <NavLink className="dropdown-item" to="login">
       Login
      </NavLink>
    </li>
    </ul>):(
  <ul className="dropdown-menu " >
    <li>
      <NavLink className="dropdown-item" to="my-blogs">
        My Blogs
      </NavLink>
    </li>
    <li>
      <NavLink className="dropdown-item" to="profile">
        Profile 
      </NavLink>
    </li>
    <li>
      <p className="dropdown-item" role="button" onClick={()=>logout()}>
      Logout </p>
    </li>
  </ul>)}
</li>
 </div>
  
</nav>

  )
}

export default Navbar