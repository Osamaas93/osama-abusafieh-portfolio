import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import FrontendDevelopment from "./pages/FrontendDevelopment";
import MusicProduction from "./pages/MusicProduction";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <Router basename="osama-abusafieh-portfolio">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FrontendDevelopment />} />
          <Route
            path="frontend-development"
            element={<FrontendDevelopment />}
          />
          <Route path="music-production" element={<MusicProduction />} />
          <Route path="contact-me" element={<ContactMe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
