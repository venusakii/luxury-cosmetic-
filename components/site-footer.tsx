import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">diamond-skin.com</h3>
            <p className="text-background/80">Your trusted source for luxury beauty products and authentic reviews.</p>
            <div className="flex space-x-4">{/* Social media icons would go here */}</div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Shop</h4>
            <div className="space-y-2 text-background/80">
              <Link href="/skincare" className="block hover:text-primary transition-colors">
                Skincare
              </Link>
              <Link href="/makeup" className="block hover:text-primary transition-colors">
                Makeup
              </Link>
              <Link href="/reviews" className="block hover:text-primary transition-colors">
                Reviews
              </Link>
              <Link href="/brands" className="block hover:text-primary transition-colors">
                Brands
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2 text-background/80">
              <Link href="/about" className="block hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="block hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <div className="space-y-2 text-background/80">
              <Link href="/help" className="block hover:text-primary transition-colors">
                Help Center
              </Link>
              <Link href="/shipping" className="block hover:text-primary transition-colors">
                Shipping Info
              </Link>
              <Link href="/returns" className="block hover:text-primary transition-colors">
                Returns
              </Link>
              <Link href="/faq" className="block hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>
            © 2024 diamond-skin.com. All rights reserved. Amazon Associate Program participant. As an Amazon Associate,
            we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
