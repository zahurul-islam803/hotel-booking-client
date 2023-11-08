import { Helmet } from "react-helmet";
import Container from "../Components/CommonUi/Container";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { Link } from "react-router-dom";

const Rooms = () => {
  const axios = useAxios();
  const getRooms = async() => {
   const res = await axios.get('/rooms');
   return res;
  }
  const {data: rooms, isLoading, isError, error} = useQuery({
    queryKey: ["room"],
    queryFn: getRooms,
  });
  if(isLoading){
     return (
       <div className="w-full h-[80vh] flex justify-center items-center">
         <span className="loading loading-spinner text-accent loading-lg"></span>
       </div>
     );
  }
  if(isError){
     return (
       <div className="w-full h-[80vh] flex justify-center items-center">
         <h1 className="text-center text-5xl text-black font-bold mt-28 mb-20">
           Something Went Wrong: {error}
         </h1>
       </div>
     );
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rooms-HotelHavenHub.com</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <h1 className="text-center text-5xl text-black font-bold mt-28 mb-5">
          Available Room
        </h1>
        <p className="text-center mb-20">
          Spacious, well-appointed hotel room featuring a comfortable king-size
          bed, modern amenities, and a private balcony with stunning city views.
          Enjoy a luxurious stay with a flat-screen TV, minibar, and a stylish
          en-suite bathroom. Ideal for both business and leisure travelers
          seeking relaxation and convenience.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {rooms?.data.map((room) => (
            <Link key={room._id} to={`/roomDetails/${room._id}`}>
              <div className="card bg-info">
                <figure>
                  <img
                    src={room.room_image}
                    className="h-[600px] max-w-[700px] rounded-2xl"
                    alt="room"
                  />
                </figure>
                <div className="py-8 text-center">
                  <p className="text-2xl font-semibold mb-2">
                    Price: ${room.price}
                  </p>
                  <p className="text-xl font-semibold">Review: {room.review}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Rooms;