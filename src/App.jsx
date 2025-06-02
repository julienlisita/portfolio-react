// src/App.jsx

import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";

import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";

import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  );
}