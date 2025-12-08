import BlurText from "./animations/Blur";

export default function Intro() {
  return (
    <section id="intro" className="fade-up text-center flex flex-col items-center justify-center">
      <img
        src="/src/assets/images/picture.jpg"
        alt="Stephen Connolly"
        className="w-40 h-40 rounded-xl object-cover shadow-md mb-6"
      />

      <BlurText
        text="Stephen Connolly"
        animateBy="words"
        delay={120}
        direction="top"
        className="text-5xl font-bold mb-3"
      />

      <p className="text-lg text-muted-foreground max-w-xl">
        Frontend Developer passionate about merging design, technology, and user-centered thinking.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm">
        {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
