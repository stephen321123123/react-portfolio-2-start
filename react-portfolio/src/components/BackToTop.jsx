import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Show button after scrolling 200px
      setShow(window.scrollY > 200);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed bottom-6 right-6 z-50
        p-3 rounded-full shadow-lg
        bg-primary text-primary-foreground
        hover:bg-primary/80
        transition
      "
    >
      Back To Top ↑ 
    </button>
  );
}
