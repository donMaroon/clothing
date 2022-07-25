import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
    return(
    <Fragment>
    <Link to='/'>
        <div>Logo</div>
    </Link>
      <div>
            <Link to='/shop'>
                SHOP
            </Link>
            <Link to='/sign-in'>
                Sign-In
            </Link>
      </div>
      <Outlet />
    </Fragment>
    )
  }

  export default Navigation;