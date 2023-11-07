import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import loadingAnimation from '../assets/loadingAnimation.json'
import Lottie from "lottie-react";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-full h-[80vh] flex justify-center items-center">
        <Lottie animationData={loadingAnimation} loop={true}></Lottie>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} replace to={`/login`}></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
