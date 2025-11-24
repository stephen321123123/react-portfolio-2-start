export default function Intro() {
  return (
    <header id="intro" className="min-h-screen flex items-center px-8">
      <div className="max-w-4xl w-full grid md:grid-cols-3 gap-8">
        
        {/* IMAGE */}
        <div className="flex md:justify-start justify-center">
          <img
            src="/src/assets/images/picture.jpg"
            alt="Profile"
            className="w-48 h-48 object-cover rounded-lg border border-slate-200"
          />
        </div>

        {/* MAIN TEXT */}
        <div className="md:col-span-2 space-y-5">
          <h1 className="text-5xl tracking-tight font-light">
            Stephen <br />
            <span className="text-slate-500">Connolly</span>
          </h1>

          <p className="text-slate-600 max-w-md">
            Frontend Developer passionate about merging
            <span className="text-slate-900"> design</span>,
            <span className="text-slate-900"> technology</span>, and
            <span className="text-slate-900"> user experience</span> to build meaningful products.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for work
            </div>
            <div>Ireland</div>
          </div>

          <div>
            <div className="text-xs text-slate-400 mb-1">Focus</div>
            <div className="flex gap-2 flex-wrap">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map((skill) => (
                <span key={skill} className="px-2 py-1 border text-xs rounded border-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
