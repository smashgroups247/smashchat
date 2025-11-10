import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      
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