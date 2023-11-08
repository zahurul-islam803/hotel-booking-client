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
        path: "roomDetails/:id",
        element: (
          <PrivateRoute>
            <RoomDetails></RoomDetails>
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/api/v1/rooms`),
      },
      {
        path: "room-booking/:id",
        element: <AddBooking></AddBooking>,
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