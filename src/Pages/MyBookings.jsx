import { Helmet } from "react-helmet";
import useAxios from "../Hooks/useAxios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAuth } from "firebase/auth";
import app from "../Config/firebase.config";
import Container from "../Components/CommonUi/Container";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router-dom";
import moment from "moment";

const MyBookings = () => {
  const navigate = useNavigate();
const auth = getAuth(app);
  const axios = useAxios();
  const queryClient = useQueryClient();
  const {data: bookings, isLoading} = useQuery({
    queryKey: ['booking'],
    queryFn: async() => {
      const email = auth.currentUser.email;
      const res = await axios.get(`/user/bookings?email=${email}`);
      return res;
    }
  })

     const { mutate } = useMutation({
       mutationKey: ["booking"],
       mutationFn: (id) => {
         return axios.delete(`/user/cancel-booking/${id}`);
        },
        onSuccess() {
          toast.success("Deleted Successfully");
          queryClient.invalidateQueries({ queryKey: ["booking"] });
        },
      });
  
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
        <title>MyBookings-HotelHavenHub.com</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {bookings?.data.map((bookingItem) => (
          <div key={bookingItem._id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{bookingItem.date}</h2>
              <p>{bookingItem.timeSlot}</p>
              <div className="card-actions">
                {
                  bookingItem.date != `${moment().format("L")}` && <button
                  className="btn btn-info"
                  onClick={() => mutate(bookingItem._id)}
                >
                  Cancel Booking
                </button>
                }
                
                <button
                  onClick={() => navigate(`/update-booking/${bookingItem._id}`)}
                  className="btn btn-success"
                >
                  Update Date
                </button>
                <button
                  onClick={() => mutate(bookingItem._id)}
                  className="btn btn-warning"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MyBookings;