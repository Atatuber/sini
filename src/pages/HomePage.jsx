import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import InfoAndLinks from "../components/InfoAndLinks";
import Opening from "../components/Opening";

export function HomePage() {
  const location = useLocation();
  const needToScroll = location.state?.scrollToBottom;

  useEffect(() => {
    if (needToScroll) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="fade-in-home bg-linear-to-r from-cream-light to-khaki">
      <Opening />
      <InfoAndLinks />
    </div>
  );
}

export default HomePage;
