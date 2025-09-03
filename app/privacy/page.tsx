import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Page Header */}
      <section className="bg-card/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
                  <p className="text-muted-foreground">
                    We collect information you provide directly to us, such as when you create an account, make a
                    purchase, subscribe to our newsletter, or contact us for support.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Personal information (name, email address, phone number)</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Shipping and billing addresses</li>
                    <li>Product reviews and ratings</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
                  <p className="text-muted-foreground">We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Process and fulfill your orders</li>
                    <li>Send you product updates and promotional materials</li>
                    <li>Improve our website and services</li>
                    <li>Respond to your comments and questions</li>
                    <li>Analyze website usage and trends</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Amazon Affiliate Program</h2>
                  <p className="text-muted-foreground">
                    TheCosmoStore is a participant in the Amazon Services LLC Associates Program, an affiliate
                    advertising program designed to provide a means for sites to earn advertising fees by advertising
                    and linking to Amazon.com. When you click on Amazon links and make purchases, we may earn a
                    commission at no additional cost to you.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Cookies and Tracking</h2>
                  <p className="text-muted-foreground">
                    We use cookies and similar tracking technologies to enhance your browsing experience, analyze site
                    traffic, and understand where our visitors are coming from. You can control cookies through your
                    browser settings.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate security measures to protect your personal information against unauthorized
                    access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                    is 100% secure.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Third-Party Services</h2>
                  <p className="text-muted-foreground">
                    Our website may contain links to third-party websites or services. We are not responsible for the
                    privacy practices of these external sites. We encourage you to read their privacy policies.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
                  <p className="text-muted-foreground">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request a copy of your data</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="bg-card p-4 rounded-lg">
                    <p className="text-foreground">Email: privacy@thecosmostore.com</p>
                    <p className="text-foreground">Address: 123 Beauty Lane, Cosmetics City, CC 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
