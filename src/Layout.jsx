import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Layout() {
  const [isDark, setIsDark] = useState(true);

  // Toggle dark mode on <html> tag
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-white dark:text-white">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      
      {/* Main Content */}
      <main className="flex-1 px-4  sm:px-6 lg:px-8">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
