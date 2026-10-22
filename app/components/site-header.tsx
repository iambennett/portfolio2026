import { Link } from "react-router";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/resume" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border/60 bg-background/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fa4fcdba76a67414f97ce3b7afdf84c8b%2Fbcb50ddddfe34df1833554796fdab2ea?format=webp&width=800&height=1200"
            alt="Iam Bennett"
            className="h-12 w-auto"
          />
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
