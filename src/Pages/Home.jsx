
import { Helmet } from "react-helmet";
import Slider from "../Components/Slider";
import Banner from "../Components/banner";
import Newsletter from "../Components/Newsletter";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home-HotelHavenHub.com</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <Slider></Slider>
      </div>
      <div>
        <h1 className="text-center text-5xl text-black font-bold mt-28 mb-20">
          Special Offers and Promotions
        </h1>
        <Banner></Banner>
      </div>
      <div>
        <h1 className="text-center text-5xl text-black font-bold mt-28 mb-20">
          User Testimonials
        </h1>
        <Testimonial></Testimonial>
      </div>
      <div>
        <Newsletter></Newsletter>
      </div>
    </>
  );
};

export default Home;