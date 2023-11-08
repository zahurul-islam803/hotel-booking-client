import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";
import toast from "react-hot-toast";

const Sidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("LogOut Successfully");
      })
      .catch((err) => {
        toast.success(err.message);
      });
  };
  return (
    <div className="flex flex-col gap-2">
      {/* Navbar menu content here */}
      <NavLink
        to="/user/bookings"
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
      {user?.email ? (
        <div className="flex flex-col justify-center items-center gap-2 dropdown dropdown-end ">
          <div
            onClick={handleLogOut}
            className="cursor-pointer px-4 py-2 font-medium text-lg hover:bg-gray-400 rounded-lg"
          >
            Logout
          </div>
          <div>
            <label tabIndex={0} className="cursor-pointer">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/VMCyz0v/avatar.jpg" />
                </div>
              </div>
            </label>
          </div>
        </div>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "btn btn-secondary btn-sm" : "btn btn-ghost btn-sm"
          }
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Sidebar;