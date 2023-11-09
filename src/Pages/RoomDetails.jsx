import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Container from "../Components/CommonUi/Container";
import { Helmet } from "react-helmet";
import { getAuth } from "firebase/auth";
import app from "../Config/firebase.config";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const RoomDetails = () => {
  const [review, setReview] = useState({});
  const {id} = useParams();
  const [rooms, setRooms] = useState({});
  const loadedData = useLoaderData();
  useEffect(() => {
    const findRoom = loadedData?.find((room) => room._id == id);
    setRooms(findRoom);
  }, [id, loadedData]);

   const auth = getAuth(app);
   const axios = useAxios();
   const { data: bookings, isLoading } = useQuery({
     queryKey: ["booking"],
     queryFn: async () => {
       const email = auth.currentUser.email;
       const res = await axios.get(`/user/bookings?email=${email}`);
       return res;
     },
   });
   useEffect(()=>{
    const reviewBooking = bookings?.data.find(reviewBook => reviewBook.id == rooms._id);
    setReview(reviewBooking);
   },[bookings,rooms])
   if (isLoading) {
     return (
       <div className="w-full h-[80vh] flex justify-center items-center">
         <span className="loading loading-spinner text-accent loading-lg"></span>
       </div>
     );
   }

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Room-Details-HotelHavenHub.com</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="card my-16 lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={rooms.room_image} alt="Room" />
        </figure>
        <div className="card-body">
          <p className="">{rooms.room_description}</p>
          <h2 className="card-title">Price per night: ${rooms.price}</h2>
          <h2 className="card-title">Room size: {rooms.room_size}</h2>
          <h2 className="card-title">Availability: {rooms.availability}</h2>
          <h2 className="card-title">Special offer: {rooms.special_offer}</h2>

          <div className="card-actions justify-end">
            {!review?._id && (
              <div>
                {review ? (
                  <Link to={`/add-review/${review._id}`}>
                    <button className="btn btn-success">Review Now</button>
                  </Link>
                ) : (
                  <Link to={`/room-booking/${rooms._id}`}>
                    <button className="btn btn-info">Book Now</button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;