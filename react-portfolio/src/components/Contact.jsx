export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 opacity-0">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Always interested in new opportunities, collaborations, and conversations about technology and design.
          </p>

          <a
            href="mailto:test@example.com"
            className="inline-flex items-center gap-2 text-slate-900 hover:underline text-lg"
          >
            test@example.com
          </a>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="text-xs text-slate-400 font-mono">Elsewhere</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'GitHub', handle: '@stephencon123', url: 'https://github.com/stephen321123123' },
              { name: 'IADT', handle: '@stephencon123', url: 'https://iadt.ie/' },
              { name: 'HubSpot Community', handle: '@stephencon123', url: 'https://community.hubspot.com/' },
              { name: 'LinkedIn', handle: 'stephencon123', url: 'https://linkedin.com/in/stephen-connolly-4260b41b7/' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                className="p-4 border border-slate-300 rounded-lg hover:shadow-sm transition-all"
              >
                <div className="space-y-1">
                  <div className="text-slate-900 font-medium">{social.name}</div>
                  <div className="text-sm text-slate-500">{social.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
