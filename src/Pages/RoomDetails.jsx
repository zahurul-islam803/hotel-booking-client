import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Container from "../Components/CommonUi/Container";
import { Helmet } from "react-helmet";

const RoomDetails = () => {
  const {id} = useParams();
  const [rooms, setRooms] = useState({});
  const loadedData = useLoaderData();
  useEffect(() => {
    const findRoom = loadedData?.find((room) => room._id == id);
    setRooms(findRoom);
  }, [id, loadedData]);

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
            <button className="btn btn-success">Review Now</button>
            <Link to={`/room-booking/${rooms._id}`}>
              <button className="btn btn-info">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;