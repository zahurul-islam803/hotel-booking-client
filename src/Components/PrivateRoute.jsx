import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import loadingAnimation from '../assets/loadingAnimation.json'
import Lottie from "lottie-react";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
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
  return <Navigate to={`/login`}></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
