import { Helmet } from "react-helmet";
import Container from "../Components/CommonUi/Container";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";

const Review = () => {
   const [date, setDate] = useState("");
   const [comment, setComment] = useState("");
     const axios = useAxios();
     const { mutate } = useMutation({
       mutationKey: ["review"],
       mutationFn: (reviewAdded) => {
         return axios.post("/user/add-review", reviewAdded);
       },
       onSuccess() {
         toast.success("Review Successfully");
       },
     });
 
  return (
    <div className="my-10">
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Review-HotelHavenHub.com</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <form className="card-body">
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
                <span className="label-text">Comment</span>
              </label>
              <textarea
                rows={16}
                className="input input-bordered"
                onBlur={(e) => setComment(e.target.value)}
              ></textarea>
            </div>

            <div className="form-control mt-2">
              <button
                type="button"
                onClick={() =>
                  mutate({  date, comment })
                }
                className="btn btn-info"
              >
                Add Review
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Review;