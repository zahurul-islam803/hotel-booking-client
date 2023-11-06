
import { Helmet } from "react-helmet";
import Slider from "../Components/Slider";
import Banner from "../Components/banner";

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
    </>
  );
};

export default Home;