export default function Navbar({ activeSection }) {
  const items = [
    { id: "intro", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-border bg-background/60">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Date and Time */}
        {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
        

        <div className="flex gap-6 text-sm relative">
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
        </div>
      </div>
    </nav>
  );
}