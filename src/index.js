import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Blogs from "./blogs";
import Service from "./service";
import CaseStudy1 from "./casestudy";
import Contact from "./contact";
import Service1 from "./services/blockchainService";
import Service2 from "./services/aiDevelopment";
import Service3 from "./services/softDevelopment";
import Service4 from "./services/consStrategy";
import Blog1 from "./mainblogs/SEO";
import Blog2 from "./mainblogs/RiseAI";
import Blog3 from "./mainblogs/Decoding";
import Blog4 from "./mainblogs/Quantum";
import Blog5 from "./mainblogs/ARtrends";
import Blog6 from "./mainblogs/Cybersecurity";
import Blog7 from "./mainblogs/SustainableTech";
 
import ScrollToTop from "./ScrollToTop";
 
import CaseStudy from "./maincasestudy";
 
const root = document.getElementById("root");
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/casestudy1" element={<CaseStudy1 />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/services/blockchain-development"
            element={<Service1 />}
          />
          <Route path="/services/ai-development" element={<Service2 />} />
          <Route path="/services/software-development" element={<Service3 />} />
          <Route path="/services/consulting" element={<Service4 />} />
          <Route path="/blogs/seo" element={<Blog1 />} />
          <Route path="/blogs/ai" element={<Blog2 />} />
          <Route path="/blogs/decoding" element={<Blog3 />} />
          <Route path="/blogs/quantum" element={<Blog4 />} />
          <Route path="/blogs/ar-trends" element={<Blog5 />} />
          <Route path="/blogs/cybersecurity" element={<Blog6 />} />
          <Route path="/blogs/sustainable-tech" element={<Blog7 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.createRoot(root).render(<App />);
