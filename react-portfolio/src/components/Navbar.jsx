export default function Navbar({ activeSection }) {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
      <div className="flex flex-col gap-4">
        {['intro', 'project', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() =>
              document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
            }
            className={`w-2 h-8 rounded-full cursor-pointer ${
              activeSection === section
                ? 'bg-slate-900'
                : 'bg-slate-400/30 hover:bg-slate-400/60'
            }`}
          >
            <span className="text-sm ml-4">{section}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
