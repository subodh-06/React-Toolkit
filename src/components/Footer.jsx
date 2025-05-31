import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 dark:bg-neutral-800 text-neutral-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About / Logo */}
        <div>
          <h2 className="text-xl font-bold text-white">React-Toolkit</h2>
          <p className="mt-2 text-sm text-neutral-400">
            A growing collection of developer-friendly productivity and finance tools — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Tools</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/todo" className="hover:text-white">Todo App</Link></li>
            <li><Link to="/weather" className="hover:text-white">Weather + Temp Converter</Link></li>
            <li><Link to="/password-generator" className="hover:text-white">Password Generator</Link></li>
            <li><Link to="/exchange" className="hover:text-white">Exchange Rate Calculator</Link></li>
          </ul>
        </div>

        {/* Finance Tools */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Finance Tools</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/tools/emi-calculator" className="hover:text-white">EMI Calculator</Link></li>
            <li><Link to="/tools/sip-calculator" className="hover:text-white">SIP Calculator</Link></li>
            <li><Link to="/tools/step-up-sip" className="hover:text-white">Step-up SIP</Link></li>
            <li><Link to="/tools/swp-calculator" className="hover:text-white">SWP Calculator</Link></li>
  
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-neutral-800 pt-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Rect-Toolkit. Made with ❤️ by <u className='text-neutral-300'> <Link to={"https://github.com/subodh-06"}>Subodh</Link></u>.
      </div>
    </footer>
  );
}
