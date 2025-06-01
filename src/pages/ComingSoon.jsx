import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ComingSoon() {
  const { tool } = useParams();

  // Format tool name (e.g., "sip-calculator" => "SIP Calculator")
  const formatToolName = (slug) => {
    return slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const toolName = formatToolName(tool || 'This Tool');

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-white">🚧 {toolName}</h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-400 mb-6">
          Stay tuned! This feature will be live soon 🚀
        </p>
        <Link
          to="/"
          className="inline-block mt-4 bg-neutral-900 dark:bg-white text-white dark:text-black px-6 py-2 rounded-md font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
