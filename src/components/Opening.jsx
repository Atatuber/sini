import Video from "../assets/example-video.mp4";

export function Opening() {
  return (
    <div className="relative w-full h-[480px] md:h-[600px] lg:h-[720px]">
      <video
        className="w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={Video} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="backdrop-blur-md rounded-xl p-6 md:p-10 border border-white border-opacity-30 shadow-xl max-w-4xl text-center">
          <h2 className="font-bold text-white text-3xl md:text-5xl drop-shadow-lg">
            Het lekkerste ontbijt, te vinden in Arnhem.
          </h2>
          <p className="font-medium text-white text-base md:text-2xl mt-4 drop-shadow-lg">
            Zin in een verrukkelijk ontbijt met versgebakken broodjes,
            smaakvolle luxe gerechten en heerlijke drankjes? Bij ons bent u aan
            het juiste adres voor een perfecte start van de dag in hartje
            Arnhem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Opening;
