import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./routes/App.jsx";
import Bags from "./routes/Bags.jsx";
import Home from "./routes/Home.jsx";
import itemStore from "./store/index.js";
import "bootstrap/dist/css/bootstrap.min.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bag/",
        element: <Bags />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={itemStore}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
