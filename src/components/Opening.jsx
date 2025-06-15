export function Opening() {
  return (
    <div className="relative w-full h-120">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="../../src/assets/example-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="backdrop-blur-md rounded-xl p-8 border border-white border-opacity-30 shadow-xl max-w-5xl">
          <h2 className="font-bold text-white text-5xl text-center px-4 drop-shadow-lg text-shadow-lg/20">
            De lekkerste ontbijt, te vinden in Arnhem.
          </h2>
          <p className="font-medium text-white text-2xl text center px-4 drop-shadow-lg text-shadow-lg/20 mt-4">
            Zin in een verrukkelijk ontbijt met krokante, versgebakken broodjes,
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
