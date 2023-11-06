import Container from "./CommonUi/Container";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const Testimonial = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-6">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="card lg:card-side bg-base-100 shadow-xl"
        >
          <figure>
            <img src="https://i.ibb.co/6BQcfnc/2nd-user.jpg" alt="User" />
          </figure>
          <div className="card-body">
            <h5 className="card-title text-success uppercase">Testimonials</h5>
            <h1 className="card-title text-3xl">Our Guests Love Us</h1>
            <p>
              "Downtown Suites is perfectly situated for business travelers
              looking to be in the heart of the action. but the noise from the
              street could be a bit disruptive. However, the staff was
              accommodating, and the hotel's proximity to major business hubs
              made it a decent choice for a short stay"
            </p>

            <div className="flex gap-2">
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
              <ul className="text-[#FFD700]">
                <FaStarHalfAlt></FaStarHalfAlt>
              </ul>
            </div>
            <p className="text-xl">BusinessTraveler88</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="card lg:card-side bg-base-100 shadow-xl"
        >
          <figure>
            <img src="https://i.ibb.co/QCQZxs9/linda.jpg" alt="User" />
          </figure>
          <div className="card-body">
            <h5 className="card-title text-success uppercase">Testimonials</h5>
            <h1 className="card-title text-3xl">Our Guests Love Us</h1>
            <p>
              "My recent stay at Sea Breeze Resort was truly unforgettable. The
              overwater bungalow provided breathtaking views of the
              crystal-clear ocean, and the snorkeling right from our deck was
              fantastic. The staff was friendly and attentive, making our
              anniversary trip even more special."
            </p>

            <div className="flex gap-2">
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
            </div>
            <p className="text-xl">TravelerLinda</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="card lg:card-side bg-base-100 shadow-xl"
        >
          <figure>
            <img src="https://i.ibb.co/fMsfvcv/luxari.jpg" alt="User" />
          </figure>
          <div className="card-body">
            <h5 className="card-title text-success uppercase">Testimonials</h5>
            <h1 className="card-title text-3xl">Our Guests Love</h1>
            <p>
              "The Ritz-Carlton in Paris is the epitome of luxury. From the
              moment we arrived, we were treated like royalty. The room was
              elegant and beautifully appointed, with a stunning view of the
              Eiffel Tower. It's a splurge, but worth every penny for a special
              occasion."
            </p>

            <div className="flex gap-2">
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
            </div>
            <p className="text-xl">LuxuryLover</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="card lg:card-side bg-base-100 shadow-xl"
        >
          <figure>
            <img
              src="https://i.ibb.co/k08RkKY/Untitled-design.jpg"
              alt="User"
            />
          </figure>
          <div className="card-body">
            <h5 className="card-title text-success uppercase">Testimonials</h5>
            <h1 className="card-title text-3xl">Our Guests Love</h1>
            <p>
              "Our family had a fantastic time at Beachcomber Resort. The pool
              was a hit with the kids, and the proximity to the beach made it an
              ideal location. The villa we stayed in was spacious, clean, and
              well-equipped. Overall, it was a wonderful family vacation spot."
            </p>

            <div className="flex gap-2">
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
              <ul className="text-[#FFD700]">
                <FaStar></FaStar>
              </ul>
            </div>
            <p className="text-xl">FamilyAdventures</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;