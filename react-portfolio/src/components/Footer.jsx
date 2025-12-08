export default function Footer() {
  return (
    <footer className="mt-20 py-10 text-center text-sm text-muted-foreground border-t">
      © {new Date().getFullYear()} Stephen Connolly — All rights reserved.
    </footer>
  );
}
