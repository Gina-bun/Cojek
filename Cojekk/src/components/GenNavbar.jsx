import {Link} from 'react-router-dom'
import './GenNavbar.css'

export function Navbar() {
    return(
        <div>
            <nav className="gen-navbar flex mt-4 mx-5  bg-(--navbar-background) text-(--text-navbar) h-auto rounded-[20px]  px-10 items-center">
        <ul className="flex gap-4 ">
          <Link className="py-1" to="/">
            Home
          </Link>

          <Link className="py-1" to="/about">
            About
          </Link>

          <Link className="py-1" to="/quiz">
            Quiz
          </Link>

          <Link className="bg-(--login-button) rounded-[25px] px-4 py-1" to="/login">
          Login
          </Link>

        </ul>

        <img
          className="ml-auto  size-17 "
          src="/images/logo2.png"
          alt="Cojek logo"
        />
      </nav>
        </div>
    )
}