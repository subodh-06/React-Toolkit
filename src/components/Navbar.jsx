import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 dark:bg-neutral-900/95 border-b border-gray-200 dark:border-neutral-800 shadow-md backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-gray-900 dark:text-white font-bold text-xl">
            React-Toolkit
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center text-sm font-medium text-gray-900 dark:text-white">
            <NavLink 
              to="/todo-app" 
              className={({ isActive }) => 
                isActive 
                  ? 'text-pink-600 dark:text-pink-400' 
                  : 'hover:text-pink-600 dark:hover:text-pink-400'
              }
            >
              Todo
            </NavLink>
            <NavLink 
              to="/temprature-convertor" 
              className={({ isActive }) => 
                isActive 
                  ? 'text-pink-600 dark:text-pink-400' 
                  : 'hover:text-pink-600 dark:hover:text-pink-400'
              }
            >
              Temperature Converter
            </NavLink>
            <NavLink 
              to="/password-generator" 
              className={({ isActive }) => 
                isActive 
                  ? 'text-pink-600 dark:text-pink-400' 
                  : 'hover:text-pink-600 dark:hover:text-pink-400'
              }
            >
              Password Generator
            </NavLink>
            <NavLink 
              to="/exchange-rate-calculator" 
              className={({ isActive }) => 
                isActive 
                  ? 'text-pink-600 dark:text-pink-400' 
                  : 'hover:text-pink-600 dark:hover:text-pink-400'
              }
            >
              Exchange Rate
            </NavLink>

            {/* Finance Dropdown */}
            <div className="relative group">
              <button className="focus:outline-none hover:text-pink-600 dark:hover:text-pink-400">
                Finance ▾
              </button>
              <div className="absolute hidden group-hover:block bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-md mt-2 w-44 z-20 shadow-lg">
                <NavLink 
                  to="/tools/emi-calculator" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-900 dark:text-gray-100"
                >
                  EMI Calculator
                </NavLink>
                <NavLink 
                  to="/tools/sip-calculator" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-900 dark:text-gray-100"
                >
                  SIP Calculator
                </NavLink>
                <NavLink 
                  to="/tools/step-up-sip" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-900 dark:text-gray-100"
                >
                  Step-up SIP
                </NavLink>
                <NavLink 
                  to="/tools/swp-calculator" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-900 dark:text-gray-100"
                >
                  SWP Calculator
                </NavLink>
              </div>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle className="mr-2" />
            <button 
              onClick={toggleMenu} 
              className="text-gray-900 dark:text-white" 
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-2 py-4 text-gray-900 dark:text-white text-sm font-medium">
            <NavLink 
              to="/todo-app" 
              onClick={toggleMenu} 
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded"
            >
              Todo
            </NavLink>
            <NavLink 
              to="/temprature-convertor" 
              onClick={toggleMenu} 
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded"
            >
              Temperature Converter
            </NavLink>
            <NavLink 
              to="/password-generator" 
              onClick={toggleMenu} 
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded"
            >
              Password Generator
            </NavLink>
            <NavLink 
              to="/exchange-rate-calculator" 
              onClick={toggleMenu} 
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded"
            >
              Exchange Rate
            </NavLink>

            {/* Finance Tools */}
            <div className="px-4 py-2">
              <div className="font-semibold text-pink-600 dark:text-pink-400 mb-2">Finance Tools</div>
              <NavLink 
                to="/tools/emi-calculator" 
                onClick={toggleMenu} 
                className="block py-1 pl-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded"
              >
                EMI Calculator
              </NavLink>
              <NavLink 
                to="/tools/sip-calculator" 
                onClick={toggleMenu} 
                className="block py-1 pl-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded"
              >
                SIP Calculator
              </NavLink>
              <NavLink 
                to="/tools/step-up-sip" 
                onClick={toggleMenu} 
                className="block py-1 pl-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded"
              >
                Step-up SIP
              </NavLink>
              <NavLink 
                to="/tools/swp-calculator" 
                onClick={toggleMenu} 
                className="block py-1 pl-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded"
              >
                SWP Calculator
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}