import { Moon, Sun } from 'lucide-react';
import useTheme from '../contexts/theme';

export default function ThemeToggle({ className = "" }) {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors ${className}`}
      aria-label="Toggle theme"
      title={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
    >
      {themeMode === "dark" ? (
        <Sun size={18} className="text-yellow-500" />
      ) : (
        <Moon size={18} className="text-blue-600" />
      )}
    </button>
  );
}