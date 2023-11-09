import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "../Pages/Footer";
const MainLayout = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%">
          <Navbar></Navbar>
        </div>
        {/* Page content here */}
        {children}
        <Footer></Footer>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%">
          {/* Sidebar content here */}
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node,
};
export default MainLayout;
