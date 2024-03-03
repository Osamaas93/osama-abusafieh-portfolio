import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import FrontendDevelopment from "./pages/SummaryPage";
import ContactMe from "./pages/ContactMe";
import { SelectedContentProvider } from "./pages/context/context";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";

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
            <Route path="experience/:id" element={<Experience />} />
            <Route path="portfolio/:id" element={<Portfolio />} />
          </Route>
        </Routes>
      </Router>
    </SelectedContentProvider>
  );
}

export default App;
