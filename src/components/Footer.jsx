import { Link } from "react-router-dom";
import SocialButton from "./SocialButton";

export function Footer() {
  const openingTimes = [
    { day: "Maandag", time: "Gesloten" },
    { day: "Dinsdag", time: "09:00 - 15:00" },
    { day: "Woensdag", time: "09:00 - 15:00" },
    { day: "Donderdag", time: "09:00 - 15:00" },
    { day: "Vrijdag", time: "09:00 - 15:00" },
    { day: "Zaterdag", time: "09:00 - 16:00" },
    { day: "Zondag", time: "09:00 - 16:00" },
  ];

  const instagramSvg = (
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-340.000000, -7439.000000)"
          fill="#000000"
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
              id="instagram-[#167]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );

  const tiktokSvg = (
    <svg
      fill="#000000"
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>TikTok icon</title>
      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );

  return (
    <footer className="text-stone-700">
      <section className="max-w-6xl mx-auto px-6 py-12 text-center space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left md:text-center">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-800">Locatie</h3>
            <p>
              Je vindt ons aan het <br />
              <span className="font-semibold">Hisveltplein 21, Arnhem</span>.
            </p>
            <p className="text-sm text-stone-500 italic">
              In het hart van Arnhem Noord — een knusse plek voor koffie, lunch
              & zonnestralen.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-stone-800">
              Openingstijden
            </h3>
            <div className="space-y-1">
              {openingTimes.map(({ day, time }) => (
                <div
                  className="flex justify-between border-b border-khaki pb-1 font-medium text-stone-700"
                  key={day}
                >
                  <span>{day}</span>
                  <span>{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 lg:flex lg:flex-col lg:items-center">
            <h3 className="text-2xl font-bold text-stone-800">Contact</h3>
            <div className="space-y-2 flex flex-col justify-start items-start">
              <p className="flex justify-center gap-2">
                <strong>E-mail:</strong> info@sinilunchroom.nl
              </p>
              <p className="flex justify-center gap-2">
                <strong>Telefoon nummer:</strong> +31 (06) 45212342
              </p>
              <p className="flex justify-center gap-2">
                <strong>KVK-nummer:</strong> 97563781
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-khaki/20">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center sm:space-y-2">
            <p className="text-sm order-2 md:order-1 inline-flex justify-center items-center gap-x-1">
              <span>&copy; {new Date().getFullYear()}</span>
              <Link to="/" className="font-semibold hover:underline">
                Sini Lunchroom
              </Link>
              <span>— Alle rechten voorbehouden.</span>
            </p>

            <div className="flex justify-center md:justify-center space-x-2 order-1 md:order-2">
              <SocialButton
                label="Instagram"
                icon={instagramSvg}
                gradient="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
                link="https://www.instagram.com/sini.lunchroom/"
              />
              <SocialButton
                label="TikTok"
                icon={tiktokSvg}
                gradient="radial-gradient(ellipse at bottom left, #3b82f6, #000000, #db2777)"
                link="https://www.tiktok.com/@sini.lunchroom"
              />
            </div>
            <div className="text-sm order-3 md:text-right flex justify-center items-center gap-x-1">
              <p className="font-semibold">Ontworpen door</p>
              <a
                href="https://github.com/atatuber"
                className="underline hover:text-stone-900 transition"
              >
                Atakan Özkan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
