export default function Contact() {
  return (
    <section id="contact" className="fade-up space-y-8 text-center">
      <h2 className="text-4xl font-semibold">Let’s Connect</h2>

      <p className="text-lg text-muted-foreground max-w-xl mx-auto">
        Always open to new opportunities and collaborations.
      </p>

      <a href="mailto:test@example.com" className="text-lg underline font-medium">
        test@example.com
      </a>

      <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mt-10">
        {[
          { name: "GitHub", url: "https://github.com/stephen321123123" },
          { name: "LinkedIn", url: "https://linkedin.com/in/stephen-connolly-4260b41b7/" },
          { name: "IADT", url: "https://iadt.ie/" },
          { name: "HubSpot Community", url: "https://community.hubspot.com/" },
        ].map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            className="p-4 border rounded-lg text-left hover:bg-accent/30 transition"
          >
            <div className="font-medium">{link.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
