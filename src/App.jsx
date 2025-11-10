import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import FeaturesPage from "./pages/FeaturesPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import BecomeAVendorPage from "./pages/BecomeAVendorPage";
import SupportPage from "./pages/SupportPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wrapper for all routes */}
        <Route path="/" element={<Layout />}>
          {/* Home page route */}
          <Route index element={<HomePage />} />
          
          {/* Navigation routes */}
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="become-a-vendor" element={<BecomeAVendorPage />} />
          <Route path="support" element={<SupportPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;