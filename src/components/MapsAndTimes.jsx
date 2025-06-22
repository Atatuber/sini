export function MapsAndTimes() {
  const openingTimes = [
    { day: "Maandag", time: "09:00 - 15:00" },
    { day: "Dinsdag", time: "09:00 - 15:00" },
    { day: "Woensdag", time: "09:00 - 15:00" },
    { day: "Donderdag", time: "09:00 - 16:00" },
    { day: "Vrijdag", time: "09:00 - 15:00" },
    { day: "Zaterdag", time: "09:00 - 16:00" },
    { day: "Zondag", time: "Gesloten" },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen border-t-4 border-cream-dark p-8">
      <div className="flex flex-col justify-center w-full max-w-xl mx-auto space-y-6 mb-12 mt-12">
        <div className="text-left">
          <h3 className="text-3xl font-bold mb-2">Locatie</h3>
          <p className="text-md mb-4">
            We bevinden ons op de Hisveltplein 21, te Arnhem.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.224987309412!2d5.950091612283126!3d51.984552775617196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7a471d8387497%3A0xf0ab35ad961e4bb2!2sHisveltplein%2021-35%2C%206826%20EM%20Arnhem!5e0!3m2!1sen!2snl!4v1750016993642!5m2!1sen!2snl"
            className="w-full h-96 rounded-lg shadow-md border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps location of Hisveltplein 21-35, Arnhem"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto">
        <div className="space-y-6 w-full">
          <h3 className="text-3xl font-bold text-center">Openingstijden</h3>
          <div className="space-y-2">
            {openingTimes.map((openingTime) => (
              <div className="flex justify-between" key={openingTime.day}>
                <span className="font-medium">{openingTime.day}</span>
                <span>{openingTime.time}</span>
              </div>
            ))}
          </div>
          <div className="space-y-3 mt-4">
            <h4 className="text-xl font-semibold">Contact</h4>
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
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
              <p> Hisveltplein 21, Arnhem</p>
            </div>
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
              <p> 06-12345678</p>
            </div>
            <div className="flex space-x-2">
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
                  d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
                />
              </svg>
              <p>info@sinilunchroom.nl</p>
            </div>
            <div className="flex space-x-2">
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
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
              <p>KVK-nummer: 97563781</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapsAndTimes;
