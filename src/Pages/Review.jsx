import { Helmet } from "react-helmet";
import Container from "../Components/CommonUi/Container";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { useParams } from "react-router-dom";

const Review = () => {
   const [userName, setUserName] = useState("");
   const [rating, setRating] = useState("");
   const [date, setDate] = useState("");
   const [comment, setComment] = useState("");
   const {id} = useParams();
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
        <h1 className="text-center text-5xl text-black font-bold mt-28 mb-20">
          Add Review
        </h1>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Review-HotelHavenHub.com</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="card w-full mx-auto max-w-md shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
                onBlur={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="number"
                className="input input-bordered"
                required
                onBlur={(e) => setRating(e.target.value)}
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
                onClick={() => mutate({ userName, rating, date, comment, id })}
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