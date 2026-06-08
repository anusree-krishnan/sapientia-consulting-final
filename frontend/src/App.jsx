import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CookieBanner from "./components/CookieBanner.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Cybersecurity from "./pages/services/Cybersecurity.jsx";
import Cloud from "./pages/services/Cloud.jsx";
import AIStrategy from "./pages/services/AIStrategy.jsx";
import TechnologyStrategy from "./pages/services/TechnologyStrategy.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Insights from "./pages/Insights.jsx";
import ZeroTrust from "./pages/insights/ZeroTrust.jsx";
import CloudMigration from "./pages/insights/CloudMigration.jsx";
import AIGovernance from "./pages/insights/AIGovernance.jsx";
import Industries from "./pages/Industries.jsx";
import Careers from "./pages/Careers.jsx";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/"                              element={<Home />}               />
          <Route path="/about"                         element={<About />}              />
          <Route path="/contact"                       element={<Contact />}            />
          <Route path="/services"                      element={<Services />}           />
          <Route path="/services/cybersecurity"        element={<Cybersecurity />}      />
          <Route path="/services/cloud"                element={<Cloud />}              />
          <Route path="/services/ai-strategy"          element={<AIStrategy />}         />
          <Route path="/services/technology-strategy"  element={<TechnologyStrategy />} />
          <Route path="/case-studies"                  element={<CaseStudies />}        />
          <Route path="/insights"                      element={<Insights />}           />
          <Route path="/insights/zero-trust"           element={<ZeroTrust />}          />
          <Route path="/insights/cloud-migration"      element={<CloudMigration />}     />
          <Route path="/insights/ai-governance"        element={<AIGovernance />}       />
          <Route path="/industries"                    element={<Industries />}         />
          <Route path="/careers"                       element={<Careers />}            />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
