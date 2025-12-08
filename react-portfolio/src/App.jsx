import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  /* ---------------------------
     Theme Handling
  ---------------------------- */
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", prefersDark);
    } else {
      root.classList.toggle("dark", theme === "dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <RouteWrapper
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        setTheme={setTheme}
      />
    </BrowserRouter>
  );
}

/* ---------------------------------------------------
   Wrapper adds behavior based on current URL
---------------------------------------------------- */
function RouteWrapper({ activeSection, setActiveSection, theme, setTheme }) {
  const location = useLocation();

  // Disable active underline on non-home pages
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(""); // <-- fixes underline bug
    }
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <>
      {/* ⬇️ Show Navbar ONLY on home page */}
      {isHome && (
        <Navbar activeSection={activeSection} theme={theme} setTheme={setTheme} />
      )}

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <HomePage
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          }
        />

        {/* PROJECT DETAILS */}
        <Route
          path="/project/:slug"
          element={
            <div className="min-h-screen pt-10 px-6">
              <ProjectDetails />
              <Footer />
              <BackToTop />
            </div>
          }
        />
      </Routes>
    </>
  );
}

/* ------------------------------------
   Home Page Component
------------------------------------- */
function HomePage({ activeSection, setActiveSection }) {
  /* Scroll Spy ONLY on home page */
  useEffect(() => {
    const ids = ["intro", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.55 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-animated text-foreground transition-colors">
      <main className="max-w-5xl mx-auto px-6 pt-28 space-y-40">
        <Intro />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
