const Banner = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="hero min-h-[80vh]"
      style={{
        backgroundImage: "url(https://i.ibb.co/vs7DC2d/hotel-17.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md space-y-3">
          <h1 className="mb-5 text-4xl font-bold uppercase">
            Welcome HotelHavenHub
          </h1>
          <p className="text-3xl font-semibold">
            Special Offer
            <span className="text-secondary"> 30%</span>
          </p>
          <p className="mb-5">
            Discover our exclusive hotel booking special offers and promotions!
            From discounted room rates to complimentary upgrades, we have a
            variety of enticing deals to enhance your stay and save you money.
            Don't miss out on these limited-time opportunities to make your next
            hotel stay truly exceptional. Book now and experience luxury for
            less.
          </p>
          <button className="btn btn-outline btn-info">Action</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;