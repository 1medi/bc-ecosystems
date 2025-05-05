import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className="w-full px-6 py-4 border-b border-gray-200 shadow-sm bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <div className="text-green-700 font-bold tracking-wide text-lg">
            BC ECOSYSTEMS
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700 uppercase tracking-widest">
          <a href="/" className="hover:text-green-700">
            Home
          </a>
          <a href="/ecosystems" className="hover:text-green-700">
            Ecosystems
          </a>
          <a href="/resources" className="hover:text-green-700">
            Resources
          </a>
          <a href="/about" className="hover:text-green-700">
            About Us
          </a>
          <a href="/contact" className="hover:text-green-700">
            Contact
          </a>
        </nav>

        {/* Search */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-8 pr-4 py-1 text-sm border rounded-full bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <FiSearch className="absolute left-2 top-1.5 text-gray-500" />
        </div>
      </div>
    </header>
  );
}
