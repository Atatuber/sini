import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function Index() {
  return (
    <div className="fade-in bg-linear-to-r from-cream-light to-khaki min-h-screen">
      <div className="max-w-[1440px] flex flex-col justify-center items-center mx-auto">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
