import { Helmet } from "react-helmet";
import useAxios from "../Hooks/useAxios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAuth } from "firebase/auth";
import app from "../Config/firebase.config";
import Container from "../Components/CommonUi/Container";
import toast from "react-hot-toast";

const MyBookings = () => {
const auth = getAuth(app);
  const axios = useAxios();
  const queryClient = useQueryClient();
  const {data: bookings} = useQuery({
    queryKey: ['booking'],
    queryFn: async() => {
      const email = auth.currentUser.email;
      const res = await axios.get(`/user/bookings?email=${email}`);
      return res;
    }
  })
  const {mutate} = useMutation({
    mutationKey: ['booking'],
    mutationFn: (id) =>{
      return axios.delete(`/user/cancel-booking/${id}`);
    },
    onSuccess(){
      toast.success('Deleted Successfully')
      queryClient.invalidateQueries({queryKey: ['booking']});
    }
  })
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MyBookings-HotelHavenHub.com</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {bookings?.data?.map((bookingItem) => (
          <div
            key={bookingItem._id}
            className="card w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title">{bookingItem.date}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-success">Update Date</button>
                <button onClick={()=> mutate(bookingItem._id)} className="btn btn-info">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MyBookings;