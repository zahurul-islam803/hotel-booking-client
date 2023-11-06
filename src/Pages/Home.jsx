
import Slider from "../Components/Slider";
import Banner from "../Components/banner";

const Home = () => {
  return (
    <>
      <div>
        <Slider></Slider>
      </div>
      <div>
        <h1 className="text-center text-5xl text-black font-bold mt-28 mb-20">Special Offers and Promotions</h1>
        <Banner></Banner>
      </div>
    </>
  );
};

export default Home;