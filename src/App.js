import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import FrontendDevelopment from "./pages/FrontendDevelopment";
import MusicProduction from "./pages/MusicProduction";
import ContactMe from "./pages/ContactMe";
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
      <Router basename="osama-abusafieh-portfolio">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="frontend-development"
              element={<FrontendDevelopment />}
            />
            <Route path="music-production" element={<MusicProduction />} />
            <Route path="contact-me" element={<ContactMe />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
