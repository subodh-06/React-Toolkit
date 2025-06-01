import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
      <Navbar />
      
      {/* Main Content */}
      <main >
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}