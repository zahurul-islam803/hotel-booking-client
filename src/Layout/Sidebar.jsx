import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2">
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
    </div>
  );
};

export default Sidebar;