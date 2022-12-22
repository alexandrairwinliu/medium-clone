import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo.svg";
import home_link from "../assets/images/home_link.svg";
import home_active from "../assets/images/home_active.svg";
import lists_link from "../assets/images/lists_link.svg";
import lists_active from "../assets/images/lists_active.svg";
import search_link from "../assets/images/search_link.svg";
import search_active from "../assets/images/search_active.svg";
import placeholderProfile from "../assets/images/placeholder-profile.svg";

const SideNav = () => {
  return (
    <nav className='side-nav'>
      <img className='nav-logo' src={logo} alt='Helium logo' />
      <div className='nav-list'>
        <NavLink to='/'>
          {({ isActive }) => {
            return isActive ? <img src={home_active} alt='Home' /> : <img src={home_link} alt='Home' />;
          }}
          {/* Is there a shorter way to do this? */}
        </NavLink>
        <NavLink to='/me/notifications'>
          <img src={lists_link} alt='Notifications' />
        </NavLink>
        <NavLink to='/me/lists'>
          {({ isActive }) => {
            return isActive ? <img src={lists_active} alt='Lists' /> : <img src={lists_link} alt='Lists' />;
          }}
        </NavLink>
        <NavLink to='/me/posts/drafts'>
          <img src={lists_link} alt='My Posts' />
        </NavLink>
        <br />
        <NavLink to='/me/write'>
          <img src={lists_link} alt='Write' />
        </NavLink>
      </div>

      <img id='profile-thumbnail' src={placeholderProfile} alt='No profile picture uploaded' />
    </nav>
  );
};

export default SideNav;
