import { Helmet } from "react-helmet";
import Container from "../Components/CommonUi/Container";

const AboutUs = () => {
  return (
    <div className="my-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About-Us-HotelHavenHub.com</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <h1 className="text-center text-5xl text-black font-bold mt-28 mb-5">
          About Hotel Haven Hub
        </h1>
        <p className="text-center mb-16">
          Welcome to Hotel Haven Hub, where every stay is an extraordinary
          experience. We invite you to discover our story, mission, and values
          that define who we are and what we stand for.
        </p>
        <div className="divider ">******</div>
        <h1 className="text-center text-5xl text-black font-bold mt-28 mb-5">
          Our History
        </h1>
        <p className="text-center mb-16">
          Hotel Haven Hub was founded in 1995 by visionary hotelier, John Smith.
          His passion for hospitality and a commitment to providing travelers
          with a haven of comfort and luxury in the heart of the city led to the
          establishment of our first hotel in the vibrant urban landscape of
          downtown Havenburg. Over the years, Hotel Haven Hub has grown and
          expanded, welcoming guests from around the world and becoming a symbol
          of excellence in the hotel industry.
        </p>
        <div className="divider ">******</div>
        <h1 className="text-center text-5xl text-black font-bold mt-28 mb-5">
          Our Mission
        </h1>
        <p className="text-center mb-16">
          At Hotel Haven Hub, our mission is simple yet profound: to create
          remarkable and memorable experiences for our guests. We strive to
          provide a home away from home, where the warmth of our hospitality,
          the comfort of our accommodations, and the excellence of our services
          come together to exceed your expectations.
        </p>
        <div className="divider ">******</div>
        <h1 className="text-center text-5xl text-black font-bold mt-28 mb-5">
          Our Values
        </h1>
        <p className="my-2">
          Guest-Centric: We place our guests at the center of everything we do.
          Your comfort, satisfaction, and well-being are our top priorities.
        </p>
        <br />
        <p>
          Excellence: We aim for nothing less than excellence in all aspects of
          our operations. From the quality of our services to the attention to
          detail in our rooms, we set high standards and continuously strive to
          surpass them.
        </p>
        <br />
        <p className="my-2">
          Teamwork: Our success is the result of a dedicated and passionate team
          working together. We value diversity, collaboration, and the
          collective strength of our people.
        </p>
        <br />
        <p>
          Sustainability: We are committed to sustainable and responsible
          practices. We work diligently to reduce our environmental impact and
          contribute to the well-being of our local community.
        </p>
        <br />
        <p className="mt-2 mb-16">
          Innovation: We embrace innovation and adapt to the ever-evolving needs
          of our guests. We invest in technology and training to stay at the
          forefront of the industry.
        </p>
        <div className="divider ">******</div>
        <h1 className="text-center text-5xl text-black font-bold mt-28 mb-5">
          Meet the Team
        </h1>
        <p className="text-center my-2 mb-16">
          Our team at Hotel Haven Hub is a diverse group of individuals who
          share a common dedication to providing exceptional service. From our
          front desk staff who greet you with a warm smile to our chefs who
          craft delectable culinary experiences, each member of our team is
          integral to your stay.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://i.ibb.co/7SLsh99/ceo.jpg"
              className="rounded-full w-[300px] h-[300px]"
              alt=""
            />
            <div>
              <p className="text-lg">
                John Smith -
                <span className="text-gray-400"> Founder & CEO</span>
              </p>
              <br />
              <p>
                Founder John Smith's vision and commitment to excellence
                continue to inspire our entire team.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://i.ibb.co/80Kt8NY/officer.jpg"
              className="rounded-full w-[300px] h-[300px]"
              alt=""
            />
            <div>
              <p className="text-lg">
                Sarah Adams -
                <span className="text-gray-400"> General Manager</span>
              </p>
              <br />
              <p>
                Sarah's leadership and extensive experience in the hospitality
                industry ensure that every aspect of your stay is meticulously
                planned and executed.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://i.ibb.co/ZhX1FPJ/officer999.jpg"
              className="rounded-full w-[300px] h-[300px]"
              alt=""
            />
            <div>
              <p className="text-lg">
                Chef Michael Rodriguez -
                <span className="text-gray-400"> Head Chef</span>
              </p>
              <br />
              <p>
                Chef Michael's culinary artistry is the driving force behind our
                exquisite dining experiences, showcasing the best of local and
                international cuisine.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://i.ibb.co/9Z0vMBW/manager-guest.jpg"
              className="rounded-full w-[300px] h-[300px]"
              alt=""
            />
            <div>
              <p className="text-lg">
                Alicia Martinez -
                <span className="text-gray-400"> Guest Relations Manager</span>
              </p>
              <br />
              <p>
                Alicia is dedicated to ensuring your stay is personalized and
                memorable. She is here to assist with any special requests and
                make your stay truly unique.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;