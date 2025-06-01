import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import useTheme from '../contexts/theme'; // Adjust import path if needed

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get theme and togglers from context
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    if (e.currentTarget.checked) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-neutral-100/95 dark:bg-neutral-900/95 border-b border-neutral-200 dark:border-neutral-800 shadow-md backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-neutral-900 dark:text-white font-bold text-xl">
            React-Toolkit
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center text-sm font-medium text-neutral-900 dark:text-white">
            <NavLink to="/todo-app" className={({ isActive }) => isActive ? 'text-pink-600 dark:text-pink-400' : ''}>Todo</NavLink>
            <NavLink to="/temprature-convertor" className={({ isActive }) => isActive ? 'text-pink-600 dark:text-pink-400' : ''}>Temprature Convertor</NavLink>
            <NavLink to="/password-generator" className={({ isActive }) => isActive ? 'text-pink-600 dark:text-pink-400' : ''}>Password Generator</NavLink>
            <NavLink to="/exchange-rate-calculator" className={({ isActive }) => isActive ? 'text-pink-600 dark:text-pink-400' : ''}>Exchange Rate Calculator</NavLink>

            {/* Finance Dropdown */}
            <div className="relative group">
              <button className="focus:outline-none">Finance ▾</button>
              <div className="absolute hidden group-hover:block bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md mt-2 w-44 z-20">
                <NavLink to="/tools/emi-calculator" className="block px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-700">EMI Calculator</NavLink>
                <NavLink to="/tools/sip-calculator" className="block px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-700">SIP Calculator</NavLink>
                <NavLink to="/tools/step-up-sip" className="block px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-700">Step-up SIP</NavLink>
                <NavLink to="/tools/swp-calculator" className="block px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-700">SWP Calculator</NavLink>
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => themeMode === "dark" ? lightTheme() : darkTheme()}
              className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
              aria-label="Toggle theme"
            >
              {themeMode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => themeMode === "dark" ? lightTheme() : darkTheme()}
              className="p-2 mr-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
              aria-label="Toggle theme"
            >
              {themeMode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={toggleMenu} className="text-neutral-900 dark:text-white" aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-2 py-4 text-neutral-900 dark:text-white text-sm font-medium">
            <NavLink to="/todo-app" onClick={toggleMenu} className="px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">Todo</NavLink>
            <NavLink to="/temprature-convertor" onClick={toggleMenu} className="px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">Temprature Convertor</NavLink>
            <NavLink to="/password-generator" onClick={toggleMenu} className="px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">Password Generator</NavLink>
            <NavLink to="/exchange-rate-calculator" onClick={toggleMenu} className="px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">Exchange Rate Calculator</NavLink>

            {/* Finance Tools */}
            <div className="px-4 py-2">
              <div className="font-semibold text-pink-600 dark:text-pink-400">Finance Tools</div>
              <NavLink to="/tools/emi-calculator" onClick={toggleMenu} className="block py-1 pl-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">EMI Calculator</NavLink>
              <NavLink to="/tools/sip-calculator" onClick={toggleMenu} className="block py-1 pl-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">SIP Calculator</NavLink>
              <NavLink to="/tools/step-up-sip" onClick={toggleMenu} className="block py-1 pl-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">Step-up SIP</NavLink>
              <NavLink to="/tools/swp-calculator" onClick={toggleMenu} className="block py-1 pl-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">SWP Calculator</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
