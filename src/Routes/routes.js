import { createBrowserRouter } from "react-router-dom";
import axios from "axios";

// components
import LoginPage from "../Components/LoginPage.jsx";
import Main from "../Components/Main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/loginPage",
    element: <LoginPage />,
    // errorElement: <ProductsError />,
  },
]);

export default router;
