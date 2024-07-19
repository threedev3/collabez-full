import "./App.css";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services/Services";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Pricing from "./pages/Pricing/Pricing";
import CaseStudy from "./pages/CaseStudy/CaseStudy";
import CaseStudyDetail from "./pages/CaseStudyDetail/CaseStudyDetail";

function App() {
  return (
    <>
      <Router>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<CaseStudy />} />
          <Route path="/portfolio/:slug" element={<CaseStudyDetail />} />
        </Routes>
        <ScrollToTop />
      </Router>
    </>
  );
}

export default App;
