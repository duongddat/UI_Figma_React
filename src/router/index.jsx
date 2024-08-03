import { createBrowserRouter } from "react-router-dom";
import MainPage from "../page/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/order",
    element: <MainPage />,
  },
  {
    path: "/product",
    element: <MainPage />,
  },
  {
    path: "/market",
    element: <MainPage />,
  },
  {
    path: "/rate",
    element: <MainPage />,
  },
  {
    path: "/report",
    element: <MainPage />,
  },
]);

export default router;
