// src/layouts/MainLayout.jsx

import { useLocation } from "react-router-dom";
import HeaderWrapper from "../components/common/HeaderWrapper";
import Footer from "../components/common/Footer";

export default function MainLayout({ children }) {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderWrapper />
      <main className={pathname === "/" ? "" : "px-4 sm:px-6 lg:px-12 flex-grow bg-[#222222]"}>
        {children}
      </main>
      <Footer />
    </div>
  );
}