import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Aurora from "./components/animations/Aurora";

import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

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

function RouteWrapper({ activeSection, setActiveSection, theme, setTheme }) {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  // Disable active underline on non-home pages
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
    }
  }, [location.pathname]);

  // Watch for dark mode changes
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode(); // Initial check
    
    // Watch for class changes on html element
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, [theme]);

  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-background transition-colors">
      <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0">
        <Aurora
          colorStops={isDark ? ["#1a0f3d", "#3d1a4d", "#0f1a3d"] : ["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.15}
          amplitude={1.0}
          speed={0.5}
        />
      </div>


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
            <div className="min-h-screen pt-10 px-6 relative z-10">
              <ProjectDetails />
              <Footer />
              <BackToTop />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

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
    <div className="relative min-h-screen bg-gradient-animated text-foreground transition-colors overflow-hidden">
      {/* Floating Shapes */}
      <div className="bg-shapes absolute inset-0 pointer-events-none" />
      
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-28 space-y-40">
        <Projects />
        <Intro />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}