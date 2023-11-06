import Lottie from "lottie-react";
import errorPage from '../assets/errorPage.json';
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex justify-center py-2 mt-7 max-w-[1250px] mx-auto">
      <div className="lottie max-w-[850px]">
        <Link className="flex justify-center mb-2">
          <button className="btn btn-secondary">Back to home</button>{" "}
        </Link>
        <Lottie animationData={errorPage} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default ErrorPage;