import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Oeps! Er is iets misgegaan.</h1>
      <p className="mb-6">
        De pagina die je zoekt bestaat niet of er is een fout opgetreden.
      </p>
      <Link
        to="/"
        className="text-khaki underline hover:text-cream-dark transition"
      >
        Ga terug naar de homepage
      </Link>
    </div>
  );
}

export default ErrorPage;
