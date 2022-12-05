import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
// Containers
import Layout from "@containers/Layout";
// Pages
import Home from "@pages/Home";
import Login from "@pages/Login";
import PasswordRecovery from "@pages/PasswordRecovery";
import SendEmail from "@pages/SendEmail";
import NewPassword from "@pages/NewPassword";
import MyAccount from "@pages/MyAccount";
import CreateAccount from "@pages/CreateAccount";
import Checkout from "@pages/Checkout";
import Orders from "@pages/Orders";
import NotFound from "@pages/NotFound";
// Styles
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
    element: <PasswordRecovery></PasswordRecovery>,
  },
  {
    path: "send-email",
    element: <SendEmail></SendEmail>,
  },
  {
    path: "new-password",
    element: <NewPassword></NewPassword>,
  },
  {
    path: "account",
    element: <MyAccount></MyAccount>,
  },
  {
    path: "signup",
    element: <CreateAccount></CreateAccount>,
  },
  {
    path: "checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "orders",
    element: <Orders></Orders>,
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