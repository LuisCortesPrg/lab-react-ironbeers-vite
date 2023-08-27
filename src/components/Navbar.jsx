import { NavLink } from "react-router-dom"
function Navbar() {
    const checkActiveUrl = (info) => {
    
        if (info.isActive === true) {
          return "nav-active"
        } else {
          return "nav-inactive"
        }
      }

    return(
    <nav>
<NavLink className={checkActiveUrl} to="/"><img src="src/assets/home-icon.png" alt="Home" /></NavLink>


    </nav>
)


}

export default Navbar;
