import { Outlet } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <Outlet></Outlet>
    </MainLayout>
  );
};

export default App;