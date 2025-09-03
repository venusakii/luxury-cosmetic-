import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-primary">
              diamond-skin.com
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/reviews" className="text-foreground hover:text-primary transition-colors">
                Reviews
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="text-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-foreground hover:text-primary transition-colors">
                Terms
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
