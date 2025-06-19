import { Link } from "react-router-dom";
import Logo from "../assets/logo-light.png";

export function Header() {
  return (
    <header className="bg-white max-w-screen-2xl mx-auto p-4">
      <div className="flex flex-col md:grid md:grid-cols-3 md:items-center gap-6">
        {/* Contact info */}
        <div className="flex flex-col space-y-3 md:space-y-1 md:flex-row md:space-x-6 md:justify-start md:items-center">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <p className="text-sm md:text-base">06-12345678</p>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p className="text-sm md:text-base">Hisveltplein 21</p>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <Link to="/">
            <img alt="Sini logo" src={Logo} className="w-32 md:w-40" />
          </Link>
        </div>

        {/* Navigatie */}
        <nav className="flex justify-center md:justify-end">
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-center">
            <li>
              <Link
                to="/"
                className="bg-cream-dark hover:bg-cream-light hover:shadow-sm transform transition-all duration-300 ease-in-out px-4 py-2.5 rounded-lg border border-cream-dark hover:border-cream block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menukaart"
                className="bg-cream-dark hover:bg-cream-light hover:shadow-sm transform transition-all duration-300 ease-in-out px-4 py-2.5 rounded-lg border border-cream-dark hover:border-cream block"
              >
                Menukaart
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollToBottom: true }}
                className="bg-cream-dark hover:bg-cream-light hover:shadow-sm transform transition-all duration-300 ease-in-out px-4 py-2.5 rounded-lg border border-cream-dark hover:border-cream block"
              >
                Locatie en Openingstijden
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
