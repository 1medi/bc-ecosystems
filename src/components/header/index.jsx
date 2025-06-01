import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 border-b border-gray-200 shadow-sm bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/">
            <div className="text-green-700 font-component-header tracking-wide text-lg">
              BC ECOSYSTEMS
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden font-body-copy md:flex space-x-8 text-sm font-medium text-gray-700 uppercase tracking-widest">
            <a href="/Interactive-Map" className="hover:text-green-700">
              Ecosystems Map
            </a>
            <a href="/Gallery" className="hover:text-green-700">
              Gallery
            </a>
            <a href="/FAQ" className="hover:text-green-700">
              FAQ
            </a>
            <a
              target="_blank"
              href="https://www.bcit.ca/programs/forest-and-natural-areas-management-diploma-full-time-7485dipma/#contacts"
              className="hover:text-green-700"
            >
              Contact
            </a>
          </nav>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-700 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 space-y-4 text-sm font-medium text-gray-700 uppercase tracking-widest pb-4 border-t pt-4">
            <a href="/Interactive-Map" className="block hover:text-green-700">
              Ecosystems Map
            </a>
            <a href="/Gallery" className="block hover:text-green-700">
              Gallery
            </a>
            <a href="/FAQ" className="block hover:text-green-700">
              FAQ
            </a>
            <a
              target="_blank"
              href="https://www.bcit.ca/programs/forest-and-natural-areas-management-diploma-full-time-7485dipma/#contacts"
              className="block hover:text-green-700"
            >
              Contact
            </a>

          </nav>
        )}
      </div>
    </header>
  );
}
