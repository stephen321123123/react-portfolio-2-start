import { useState } from "react";

export default function Contact() {
  const links = [
    { name: "My GitHub Repositories!", url: "https://github.com/stephen321123123" },
    { name: "Follow My LinkedIn!", url: "https://linkedin.com/in/stephen-connolly-4260b41b7/" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextLink = () => {
    setCurrentIndex((prev) => (prev + 1) % links.length);
  };

  const prevLink = () => {
    setCurrentIndex((prev) => (prev - 1 + links.length) % links.length);
  };

  return (
    <section id="contact" className="fade-up space-y-8 text-center">
      <h2 className="text-5xl font-bold">
        Let's Connect
      </h2>

      <p className="text-lg text-muted-foreground max-w-xl mx-auto">
        I am always open to new Opportunities and Collaborations.
      </p>

      <a 
        href="mailto:stephenconnolly911@gmail.com" 
        className="inline-block text-lg underline font-medium hover:text-primary transition-colors"
      >
        stephenconnolly911@gmail.com
      </a>

      <div className="max-w-xl mx-auto mt-10">
        <div className="flex items-center gap-4 justify-center">
          <button
            onClick={prevLink}
            className="p-2 rounded-lg hover:bg-accent/30 transition"
            aria-label="Previous link"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <a
            href={links[currentIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border rounded-lg hover:bg-accent/30 transition flex-1 max-w-md"
          >
            <div className="font-medium">{links[currentIndex].name}</div>
          </a>

          <button
            onClick={nextLink}
            className="p-2 rounded-lg hover:bg-accent/30 transition"
            aria-label="Next link"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {links.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted"
              }`}
              aria-label={`Go to link ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}