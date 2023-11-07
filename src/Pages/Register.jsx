import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import registerAnimation from '../assets/registerAnimation.json'
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
const Register = () => {

  const {createUser, googleLogin} = useContext(AuthContext);

   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async(e) => {
    e.preventDefault();
    const toastId = toast.loading('User Creating ...');
    try {
      await createUser(email, password);
      toast.success('Created User', { id: toastId });
      navigate('/');
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading('Google Logging in ...');

    try {
      await googleLogin(email, password);
      toast.success('Google Logged in', { id: toastId });
      navigate('/');
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }

  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register-HotelHavenHub.com</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div
        style={{
          backgroundImage: "url(https://i.ibb.co/H7CZfCw/hotel-7.jpg)",
        }}
        className="flex flex-col md:flex-row justify-center items-center gap-10 hero min-h-screen"
      >
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card px-[25px] pb-8 flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#28a2df]">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-info">
                  Register
                </button>
              </div>
              <div className="divider ">Or</div>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn btn-outline btn-info  w-full flex justify-between items-center cursor-pointer "
              >
                Google
                <FcGoogle className="w-8 h-8" />
              </button>
            </form>
            <p>
              Already have an account?
              <Link to={`/login`} className="text-white">
                Please login
              </Link>
            </p>
          </div>
        </div>
        <div>
          <Lottie animationData={registerAnimation} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Register;