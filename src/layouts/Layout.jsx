import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - appears on all pages */}
      <Navbar />
      
      {/* Main content area - renders child routes */}
      <main>
        <Outlet />
      </main>
      
      {/* Footer - appears on all pages */}
      <Footer />
    </div>
  );
};

export default Layout;