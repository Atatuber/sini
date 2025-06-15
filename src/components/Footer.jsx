import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white p-8 border-t-4 border-cream-dark">
      <div className="flex justify-around">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <Link to="/" className="font-semibold hover:underline">
            Sini
          </Link>
          . Alle rechten voorbehouden.
        </p>
        <div className="space-x-6">
          <a href="/privacy-voorwaarden" className="hover:underline">
            Privacy Beleid
          </a>
          <a href="/terms" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
