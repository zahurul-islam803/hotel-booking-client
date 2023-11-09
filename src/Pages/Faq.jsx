import { Helmet } from "react-helmet";
import Container from "../Components/CommonUi/Container";

const Faq = () => {
  return (
    <div className="my-10">
      <Container>
        <h1 className="text-center text-5xl text-black font-bold mt-28 mb-20">
          FAQ
        </h1>
        <Helmet>
          <meta charSet="utf-8" />
          <title>FAQ-HotelHavenHub.com</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            Where is this hotel located?
          </div>
          <div className="collapse-content">
            <p>Natore, Baraigram</p>
            <p>Dhaka-Rajshahi High Way</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What are the check-in and check-out times at Hotel HavenHub?
          </div>
          <div className="collapse-content">
            <p>
              Check-in time is usually at 4:00 PM, and check-out time is at
              12:00 PM
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I request a late check-out?
          </div>
          <div className="collapse-content">
            <p>
              You can request a late check-out, but it's subject to availability
              and may involve an additional fee. It's best to discuss this with
              the front desk.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Is there parking available at the hotel?
          </div>
          <div className="collapse-content">
            <p>
              Yes, Hotel Haven provides on-site parking for guests. However,
              it's recommended to check with the hotel for parking availability
              and any associated fees.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Is breakfast included in the room rate?
          </div>
          <div className="collapse-content">
            <p>
              This may vary depending on the type of room and package you've
              booked. It's best to check with the hotel at the time of booking
              or upon arrival.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;