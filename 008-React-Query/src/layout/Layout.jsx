
import Header from '../components/Header'
import { Outlet } from 'react-router';
import Footer from "../components/Footer";

const Layout = () => {
    return (
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="flex-grow container mx-auto p-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;