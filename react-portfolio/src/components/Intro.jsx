import BlurText from "./animations/Blur";

export default function Intro() {
  return (
    <section id="intro" className="fade-up text-center flex flex-col items-center justify-center">
      <img
        src="/src/assets/images/my_image.jpeg"
        alt="Stephen Connolly"
        className="w-40 h-40 rounded-xl object-cover shadow-md mb-6"
      />

      <BlurText
        text="About Me"
        animateBy="words"
        delay={120}
        direction="top"
        className="text-5xl font-bold mb-3"
      />

      <p className="text-lg text-muted-foreground max-w-xl">
        I am a Frontend Developer who is passionate about design, technology, and delivering quality user experiences.
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
