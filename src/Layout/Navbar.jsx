import { NavLink } from "react-router-dom";
import Container from "../Components/CommonUi/Container";

const Navbar = () => {
  return (
    <Container>
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 text-xl font-bold text-secondary">
        HotelHavenHub
      </div>
      <div className="flex-none hidden lg:block">
        <div className="flex items-center gap-2">
          {/* Navbar menu content here */}
          <NavLink
            to="/myBookings"
            className={({ isActive }) =>
              isActive ? "btn btn-secondary btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            MyBookings
          </NavLink>
          <NavLink
            to="/rooms"
            className={({ isActive }) =>
              isActive ? "btn btn-secondary btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            Rooms
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "btn btn-secondary btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            Login
          </NavLink>

          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="cursor-pointer">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </div>
            </label>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            ></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;