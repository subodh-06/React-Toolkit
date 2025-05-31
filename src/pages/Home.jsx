import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const tools = [
  { name: 'To-Do App', path: '/todo-app', description: 'Manage your daily tasks efficiently.' },
  { name: 'Temprature Convertor', path: '/temprature-convertor', description: 'Check weather and convert temperatures.' },
  { name: 'Password Generator', path: '/password-generator', description: 'Generate secure passwords.' },
  { name: 'Exchange Rate Calculator', path: '/exchange-rate-calculator', description: 'Get the latest currency exchange rates.' },
];

export default function Home() {
  return (
  <>
  <Helmet>
    <title>React-Toolkit</title>
    <meta name="description" content=" A growing toolbox of productivity & utility tools for developers, learners, and creators." />
  </Helmet>
    <div className="min-h-screen px-4 py-12 bg-neutral-900 text-neutral-100">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">React-Toolkit 🛠️</h1>
        <p className="mt-4 text-lg text-neutral-400 max-w-xl mx-auto">
          A growing toolbox of productivity & utility tools for developers, learners, and creators.
        </p>
        <p className="mt-2 text-sm text-neutral-500">Built using React + Tailwind + Firebase + Open Source Love</p>
      </motion.div>

      {/* Tool Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="bg-neutral-800 hover:bg-neutral-700 transition-colors border border-neutral-700 p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <Link to={tool.path}>
              <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
              <p className="text-sm text-neutral-400">{tool.description}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Future Tools */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-2 text-white">Coming Soon</h2>
        <p className="text-neutral-400 text-sm">
          Finance tools like EMI Calculator, SIP Planner, Step-up SIP, Loan Estimator, and more...
        </p>
      </motion.div>
    </div>
  </>
  );
}
