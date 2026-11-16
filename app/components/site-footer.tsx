export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-muted">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[auto_1fr] md:items-start">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fa4fcdba76a67414f97ce3b7afdf84c8b%2Fbcb50ddddfe34df1833554796fdab2ea?format=webp&width=800&height=1200"
          alt="Iam Bennett"
          className="h-28 w-auto"
        />
        <div className="space-y-6">
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:ibennett00@gmail.com"
                className="text-primary transition-opacity hover:opacity-80"
              >
                ibennett00@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+15027978997"
                className="text-primary transition-opacity hover:opacity-80"
              >
                502-797-8997
              </a>
            </li>
            <li className="text-muted-foreground">
              10620 Gleneagle Place, Louisville, KY 40223
            </li>
            <li>
              <a
                href="https://www.iambennett.com"
                className="text-primary transition-opacity hover:opacity-80"
              >
                www.iambennett.com
              </a>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Iam Bennett · Designed in Fusion
          </p>
        </div>
      </div>
    </footer>
  );
}
