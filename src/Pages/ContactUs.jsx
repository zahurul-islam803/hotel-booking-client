import { Helmet } from "react-helmet";
import contactAnimation from "../assets/contactAnimation.json";
import Lottie from "lottie-react";
const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact-Us-HotelHavenHub.com</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        style={{
          backgroundImage: "url(https://i.ibb.co/H7CZfCw/hotel-7.jpg)",
        }}
        className="hero flex flex-col md:flex-row justify-center items-center gap-10 min-h-screen bg-base-200"
      >
        <h1 className="text-center text-5xl text-black font-bold mt-28 mb-16">
          Contact Hotel Haven Hub
        </h1>
        <p className="text-center my-2">
          Hotel Haven Hub is a contemporary and stylish hotel that offers a
          comfortable and convenient stay for travelers. Located in [insert
          location], it provides a perfect blend of modern amenities and a warm,
          welcoming atmosphere. With well-appointed rooms, excellent dining
          options, and attentive service, Hotel Haven Hub is an ideal choice for
          both leisure and business travelers looking for a comfortable and
          memorable stay. Whether you're visiting for business meetings or
          exploring the city's attractions, this hotel provides a haven of
          comfort and relaxation during your stay.
        </p>
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Contact Us</h1>
          </div>
          <div className="card px-[20px] pb-8 flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#28a2df]">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Phone"
                  name="phone"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea rows={16} className="input input-bordered"></textarea>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-info">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <Lottie animationData={contactAnimation} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};


export default ContactUs;