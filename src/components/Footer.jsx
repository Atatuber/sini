import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="p-8 border-t-4 border-cream-dark">
      <div className="flex justify-around">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <Link to="/" className="font-semibold hover:underline">
            Sini
          </Link>
          . Alle rechten voorbehouden.
        </p>
        <div className="space-x-6">
          <p>
            Gemaakt door{" "}
            <a
              href="https://github.com/atatuber"
              className="font-bold text-sm underline hover:text-gray-600 transition-300 ease-in-out"
            >
              Atakan Ozkan
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
