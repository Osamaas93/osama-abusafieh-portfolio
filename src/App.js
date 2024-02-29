import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import FrontendDevelopment from "./pages/SummaryPage";
import ContactMe from "./pages/ContactMe";
import MusicExperience from "./pages/Experience";
import { SelectedContentProvider } from "./pages/context/context";

function App() {
  return (
    <SelectedContentProvider>
      <Router basename="osama-abusafieh-portfolio">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<FrontendDevelopment />} />
            <Route
              path="frontend-development"
              element={<FrontendDevelopment />}
            />
            <Route path="contact-me" element={<ContactMe />} />
            <Route path="music-experience" element={<MusicExperience />} />
          </Route>
        </Routes>
      </Router>
    </SelectedContentProvider>
  );
}

export default App;
