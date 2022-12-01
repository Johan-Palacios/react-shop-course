import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "@containers/Login";
import Layout from "@containers/Layout";
import RecoveryPassword from "@containers/RecoveryPassword";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import "@styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "recovery-password",
    element: <RecoveryPassword></RecoveryPassword>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
