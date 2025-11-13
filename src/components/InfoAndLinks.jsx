import { Link } from "react-router-dom";
import Interieur from "../assets/sini-interieur.jpg";

export function InfoAndLinks() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full">
      <div className="flex flex-col justify-center items-center p-12 md:px-8 space-y-8">
        <div className="max-w-xl space-y-4 text-center md:text-left w-full">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Kom langs en laat je verwennen.
          </h2>
          <p className="text-base md:text-lg">
            Ontdek de rijke smaken van de Turkse keuken met onze huisgemaakte
            delicatessen, versgebakken lekkernijen en warme gastvrijheid. Of je
            nu zin hebt in iets hartigs of zoets, er is voor ieder wat wils.
            Benieuwd naar waar je ons kunt vinden of wat er op het menu staat?
            Neem gerust een kijkje op onze website of kom langs.
          </p>
        </div>
        <div className="max-w-xl w-full flex flex-col justify-start sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <button
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
            className="flex justify-center items-center shadow-xs text-[#4B382A] bg-[#FAF3DD] font-medium px-6 py-3 rounded-2xl hover:bg-[#4B382A] hover:text-[#FAF3DD] transition-all duration-200 h-11 w-full gap-2 hover:cursor-pointer"
          >
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
                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
              />
            </svg>
            <span>Locatie & Openingstijden</span>
          </button>

          <Link
            to="/menukaart"
            className="flex justify-center items-center shadow-xs text-[#4B382A] bg-[#FAF3DD] font-medium px-6 py-3 rounded-2xl hover:bg-[#4B382A] hover:text-[#FAF3DD] transition-all duration-200 h-11 w-full gap-2 hover:cursor-pointer"
          >
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
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span>Menukaart</span>
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center p-6">
        <img
          alt="Sini interieur"
          src={Interieur}
          className="w-full max-w-lg object-cover rounded-md border-4 border-khaki shadow-md"
        />
      </div>
    </section>
  );
}

export default InfoAndLinks;
