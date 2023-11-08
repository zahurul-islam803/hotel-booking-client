import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import loginAnimation from '../assets/loginAnimation.json'
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { useState } from "react";
import useAxios from "../Hooks/useAxios";
const Login = () => {
   const { signIn, logOut } = useContext(AuthContext);
   const axios = useAxios();

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handleLogin = async (e) => {
     e.preventDefault();
     const toastId = toast.loading("User Login in ...");
     try {
       const user = await signIn(email, password);
       const res = await axios.post("/auth/access-token", {email: user.user.email});
       if(res.data.success){
         toast.success("User Login", { id: toastId });
         navigate("/");
       }else{
          logOut();
       }
     } catch (error) {
       toast.error(error.message, { id: toastId });
     }
   };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login-HotelHavenHub.com</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        style={{
          backgroundImage: "url(https://i.ibb.co/H7CZfCw/hotel-7.jpg)",
        }}
        className="hero flex flex-col md:flex-row justify-center items-center gap-10 min-h-screen bg-base-200"
      >
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card px-[20px] pb-8 flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#faa36d]">
            <form onSubmit={handleLogin} className="card-body">
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
                <button type="submit" className="btn btn-secondary">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center">
              New Here?
              <Link to={`/register`} className="text-white">
                Please Register
              </Link>
            </p>
          </div>
        </div>
        <div>
          <Lottie animationData={loginAnimation} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Login;