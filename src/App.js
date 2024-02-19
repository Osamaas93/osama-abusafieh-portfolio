import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
      <BrowserRouter basename="osama-abusafieh-portfolio">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
