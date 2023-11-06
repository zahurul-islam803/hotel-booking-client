
const Slider = () => {
  return (
    <div className="carousel w-full h-[90vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/H7CZfCw/hotel-7.jpg" className="w-full" />
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="absolute top-[30%] left-[30%] right-[30%] flex flex-col justify-center items-center space-y-6"
        >
          <h2 className="text-4xl font-bold text-success uppercase">
            Hotel & Resort
          </h2>
          <p className="text-success text-2xl font-semibold uppercase">
            Welcome to HotelHavenHub
          </p>
          <div>
            <button className="btn btn-outline btn-info uppercase">
              Discover now
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle btn-info">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-info">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/SBc1qvb/hotel-2.jpg" className="w-full" />
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="absolute top-[20%] left-[30%] right-[30%] flex flex-col justify-center items-center space-y-6"
        >
          <h2 className="text-4xl font-bold text-success uppercase">
            Hotel & Resort
          </h2>
          <p className="text-success text-2xl font-semibold uppercase">
            Welcome to HotelHavenHub
          </p>
          <div>
            <button className="btn btn-outline btn-info uppercase">
              Discover now
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle btn-info">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-info">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/qN56hqr/hotel-5.jpg" className="w-full" />
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="absolute top-[20%] left-[30%] right-[30%] flex flex-col justify-center items-center space-y-6"
        >
          <h2 className="text-4xl font-bold text-success uppercase">
            Hotel & Resort
          </h2>
          <p className="text-success text-2xl font-semibold uppercase">
            Welcome to HotelHavenHub
          </p>
          <div>
            <button className="btn btn-outline btn-info uppercase">
              Discover now
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle btn-info">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle btn-info">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/VqjvMFZ/hotel-6.jpg" className="w-full" />
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="absolute top-[20%] left-[30%] right-[30%] flex flex-col justify-center items-center space-y-6"
        >
          <h2 className="text-4xl font-bold text-success uppercase">
            Hotel & Resort
          </h2>
          <p className="text-success text-2xl font-semibold uppercase">
            Welcome to HotelHavenHub
          </p>
          <div>
            <button className="btn btn-outline btn-info uppercase">
              Discover now
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle btn-info">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-info">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
