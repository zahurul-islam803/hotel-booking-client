import Container from "../Components/CommonUi/Container";
import { useState } from "react";
import useAxios from "../Hooks/useAxios";
import { useMutation, useQuery } from "@tanstack/react-query";
import {  useParams } from "react-router-dom";
import moment from "moment/moment";
import { Helmet } from "react-helmet";

const AddBooking = () => {
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [address, setAddress] = useState("");
  const {id} = useParams();
  const axios = useAxios();
  const {data: room} = useQuery({
    queryKey: ['booking'],
    queryFn: async()=> {
     const res = await axios.get(`/room-booking/${id}`);
     return res;
    }
  })

  const {mutate} = useMutation({
    mutationKey: ['booking'],
    mutationFn: (bookingRoom)=>{
      return  axios.post("/user/add-booking", bookingRoom);
    }
  })
console.log(mutate)
  return (
    <div style={{
          backgroundImage: "url(https://i.ibb.co/H7CZfCw/hotel-7.jpg)",
        }}>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Add-Booking-HotelHavenHub.com</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="flex my-10">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold">Room Information</h1>
              <p className="max-w-[60ch] font-semibold text-xl mt-5">
                Room Description:
              </p>
              <p className="font-medium">{room?.data?.room_description}</p>
              <div className="text-xl space-y-4 mt-10">
                Date: {`${moment().format("MMMM Do YYYY")}`}
              </div>
            </div>
            <div>
              <div className="divider max-w-2xl"></div>
              <p className="text-4xl font-semibold">
                {room?.data?.price}${" "}
                <span className="text-xs">vat included</span>{" "}
              </p>
            </div>
          </div>
          <div className="card w-full max-w-md shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                  onBlur={(e) => setCustomerName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  onBlur={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered"
                  required
                  onBlur={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Time Slot</span>
                </label>
                <select
                  className="input input-bordered"
                  onChange={(e) => setTimeSlot(e.target.value)}
                >
                  <option>8am. - 12pm.</option>
                  <option>12pm. - 6pm.</option>
                  <option>6pm. - 8am.</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  rows={16}
                  className="input input-bordered"
                  onBlur={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>

              <div className="form-control mt-2">
                <button
                  type="button"
                  onClick={() =>
                    mutate({ customerName, email, date, timeSlot, address })
                  }
                  className="btn btn-info"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddBooking;
