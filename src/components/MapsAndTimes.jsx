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
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen border-t-4 border-khaki">
      <div className="flex flex-col justify-center w-full max-w-xl mx-auto space-y-6">
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
          <div className="space-y-2 mt-4">
            <h4 className="text-xl font-semibold">Contact</h4>
            <p>📍 Hisveltplein 21, Arnhem</p>
            <p>📞 06-12345678</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapsAndTimes;
