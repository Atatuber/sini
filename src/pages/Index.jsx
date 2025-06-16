import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function Index() {
  return (
    <div className="fade-in">
      <Header />
      <main className="min-h-screen bg-gray-50 border-t-4 border-cream-dark">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
