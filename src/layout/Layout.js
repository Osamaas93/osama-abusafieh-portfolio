import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import { Grid } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
