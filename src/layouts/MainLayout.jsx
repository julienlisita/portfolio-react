// src/layouts/MainLayout.jsx

import { useLocation } from "react-router-dom";
import HeaderWrapper from "../components/common/HeaderWrapper";
import Footer from "../components/common/Footer";

export default function MainLayout({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderWrapper />
      <main  className={
          (isHome
            ? "scroll-smooth bg-[#222222] pb-16 sm:pb-20 lg:pb-24"
            : "px-4 sm:px-8 lg:px-24 xl:px-32 bg-[#222222] pt-14 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 text-gray-200")+ 
            " flex-grow"
        }
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}