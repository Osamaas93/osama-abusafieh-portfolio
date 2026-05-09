import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />

      <main style={{ paddingBottom: 96 }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
