import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold mb-4 text-neutral-900 dark:text-white">404</h1>
        <p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
          Page Not Found
        </p>
        <p className="text-neutral-500 dark:text-neutral-500 mb-8">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-neutral-900 dark:bg-white text-white dark:text-black px-6 py-2 rounded-md font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition"
        >
          Go to Homepage
        </Link>
      </motion.div>
    </div>
  );
}
