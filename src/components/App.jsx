import React from "react";
import Login from "@containers/Login";
import Layout from "@containers/Layout";
import "@styles/global.scss";

const App = () => {
  return (
    <Layout>
      <Login></Login>
    </Layout>
  );
};

export default App;
