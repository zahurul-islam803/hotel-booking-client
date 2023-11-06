import { Helmet } from "react-helmet";

const MyBookings = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MyBookings-HotelHavenHub.com</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>my bookings</h1>
    </div>
  );
};

export default MyBookings;