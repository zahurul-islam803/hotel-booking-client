import { Helmet } from "react-helmet";
import Container from "../Components/CommonUi/Container";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const UpdateBooking = () => {
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [address, setAddress] = useState("");
  const data = useLoaderData();
  const updateInfo = {
    customerName,
    email,
    date,
    timeSlot,
    address,
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(
      `https://hotel-booking-server-delta.vercel.app/api/v1/user/update/${data._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="my-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update-Booking-HotelHavenHub.com</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleUpdate} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                defaultValue={data.customerName}
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
                defaultValue={data.email}
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
                defaultValue={data.date}
                onBlur={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Time Slot</span>
              </label>
              <select
                className="input input-bordered"
                defaultValue={data.timeSlot}
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
                defaultValue={data.address}
                className="input input-bordered"
                onBlur={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>

            <div className="form-control mt-2">
              <button type="submit" className="btn btn-info">
                Update Date
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default UpdateBooking;
