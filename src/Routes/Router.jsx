import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import App from "../App";
import Rooms from "../Pages/Rooms";
import MyBookings from "../Pages/MyBookings";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Components/PrivateRoute";
import RoomDetails from "../Pages/RoomDetails";
import AddBooking from "../Pages/AddBooking";
import UpdateBooking from "../Pages/UpdateBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "user/bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "update-booking/:id",
        element: <UpdateBooking></UpdateBooking>,
        loader: ({ params }) =>
          fetch(
            `https://hotel-booking-server-delta.vercel.app/user/update-booking/${params.id}`
          ),
      },
      {
        path: "roomDetails/:id",
        element: <RoomDetails></RoomDetails>,
        loader: () =>
          fetch(`https://hotel-booking-server-delta.vercel.app/api/v1/rooms`),
      },
      {
        path: "room-booking/:id",
        element: (
          <PrivateRoute>
            <AddBooking></AddBooking>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
