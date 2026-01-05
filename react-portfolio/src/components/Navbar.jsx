export default function Navbar({ activeSection, theme, setTheme }) {
  const items = [
    { id: "projects", label: "Projects" },
    { id: "intro", label: "About Me" },
    { id: "contact", label: "Contact" },
  ];

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-border bg-background/60">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Date and Time */}
        {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
        

        <div className="flex gap-6 items-center text-sm relative">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className={`relative pb-1 transition ${
                activeSection === item.id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}

              {/* underline */}
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 w-full bg-foreground transition-all duration-300 ${
                  activeSection === item.id
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0"
                }`}
              />
            </button>
          ))}

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}