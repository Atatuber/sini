import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "../assets/sini-no-background.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isOnCurrentPath = (url) => {
    return url === location.pathname
      ? "block font-medium px-6 py-3 rounded-2xl bg-[#4B382A] text-[#FAF3DD] transition-all duration-200 h-11 text-base leading-[1.15] w-full"
      : "block shadow-xs text-[#4B382A] bg-[#FAF3DD] font-medium px-6 py-3 rounded-2xl hover:bg-[#4B382A] hover:text-[#FAF3DD] transition-all duration-200 h-11 text-base leading-[1.15] w-full";
  };

  const menuButton = isMenuOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      class="size-8"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  return (
    <header className="max-w-screen-3xl mx-auto w-full">
      <div className="flex justify-around items-center">
        <div className="flex justify-center">
          <Link to="/">
            <img alt="Sini logo" src={Logo} className="w-50 rounded-md" />
          </Link>
        </div>

        <button
          className="md:hidden bg-[#FAF3DD] transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:scale-105 rounded-lg p-2 flex"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="transition-transform duration-300 ease-in-out inline-block">
            {menuButton}
          </span>
        </button>

        <nav className="hidden md:flex justify-center">
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-center">
            <li>
              <Link to="/" className={isOnCurrentPath("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/menukaart" className={isOnCurrentPath("/menukaart")}>
                Menukaart
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 p-4">
          <ul className="flex flex-col space-y-2 text-center">
            <li>
              <Link to="/" className={isOnCurrentPath("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/menukaart" className={isOnCurrentPath("/menukaart")}>
                Menukaart
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
