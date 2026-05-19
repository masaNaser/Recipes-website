import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <a href="./index.html" className="cursor-pointer">
            <h1 className="font-bold text-2xl tracking-tight">Recipes</h1>
          </a>

          <nav className="hidden md:block">
            <ul className="flex gap-8 items-center font-medium">
              <li>
                <a href="/" className="hover:text-primary transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary py-2">
                  About
                </a>
              </li>
              <li>
                <a href="/policy" className="hover:text-primary py-2">
                  Policy
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4 items-center">
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-2xl focus:outline-none"
              >
                <i
                  className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}
                ></i>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden pb-4 transition-all duration-300`}
        >
          <nav className="flex flex-col gap-4 font-semibold text-center bg-gray-50 p-6 rounded-xl">
            <a
              href="/"
              className="hover:text-primary py-2 border-b border-gray-100"
            >
              Home
            </a>
            <a href="/about" className="hover:text-primary py-2">
              About
            </a>
            <a href="/policy" className="hover:text-primary py-2">
              Policy
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
