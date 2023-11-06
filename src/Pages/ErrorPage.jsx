import Lottie from "lottie-react";
import errorPage from '../assets/errorPage.json';
const ErrorPage = () => {
  return (
    <div className="flex justify-center py-2 mt-7 max-w-screen-2xl mx-auto">
      <div className="lottie max-w-[850px]">
        <Lottie animationData={errorPage} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default ErrorPage;