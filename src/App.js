import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import FrontendDevelopment from "./pages/SummaryPage";
import ContactMe from "./pages/ContactMe";
import { SelectedContentProvider } from "./pages/context/context";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminRoute from "./components/AdminRoute";
import Home from "./pages/Home";
import FrontendArea from "./pages/FrontendArea";
import MusicArea from "./pages/MusicArea";
import MusicPortfolio from "./pages/MusicPortfolio";
import FrontendExperience from "./pages/FrontendExperience";
import MusicExperience from "./pages/MusicExperience";

function App() {
  return (
    <SelectedContentProvider>
      <Router basename="osama-abusafieh-portfolio">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="frontend" element={<FrontendArea />} />
            <Route path="frontend/experience" element={<FrontendExperience />} />

            <Route path="music" element={<MusicArea />} />
            <Route path="music/portfolio" element={<MusicPortfolio />} />
            <Route path="music/experience" element={<MusicExperience />} />

            <Route
              path="frontend-development"
              element={<FrontendDevelopment />}
            />
            <Route path="contact-me" element={<ContactMe />} />
            <Route path="experience/:id" element={<Experience />} />
            <Route path="portfolio" element={<MusicPortfolio />} />
            <Route path="portfolio/:id" element={<Portfolio />} />
            <Route path="admin" element={<AdminLogin />} />
            <Route
              path="admin/panel"
              element={
                <AdminRoute>
                  <Admin />
                </AdminRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </SelectedContentProvider>
  );
}

export default App;
