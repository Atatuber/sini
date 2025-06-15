import { Link } from "react-router-dom";

export function InfoAndLinks() {
  return (
    <section className="grid grid-cols-2 min-h-screen border-t-4 border-khaki">
      <div className="flex flex-col justify-center items-center px-8 space-y-8">
        <div className="max-w-xl space-y-4">
          <h2 className="text-4xl text-left">
            Kom langs en laat je verwennen.
          </h2>
          <p className="text-lg text-left">
            Ontdek de rijke smaken van de Turkse keuken met onze huisgemaakte
            delicatessen, versgebakken lekkernijen en warme gastvrijheid. Of je
            nu zin hebt in iets hartigs of zoets, er is voor ieder wat wils.
            Benieuwd naar waar je ons kunt vinden of wat er op het menu staat?
            Neem gerust een kijkje op onze website of kom langs.
          </p>
        </div>
        <div className="flex space-x-3">
          <Link className="flex space-x-1.5 rounded-md shadow-md p-2 border-khaki border-1 font-medium bg-cream-dark hover:drop-shadow-lg transition-all duration-300 ease-in-out ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
              />
            </svg>
            <p>Locatie & Openingstijden</p>
          </Link>
          <Link className="flex space-x-1.5 rounded-md shadow-md p-2 border-khaki border-1 font-medium bg-cream-dark hover:drop-shadow-lg transition-all duration-300 ease-in-out ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            <p>Menukaart</p>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          alt="Sini interieur"
          src="../../src/assets/sini-interieur.jpg"
          className="w-150 object-cover rounded-md border-4 border-khaki shadow-md mx-auto"
        />
      </div>
    </section>
  );
}

export default InfoAndLinks;
