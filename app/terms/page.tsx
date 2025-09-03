import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Page Header */}
      <section className="bg-card/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Terms of Service</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using our website and services.
            </p>
            <p className="text-sm text-muted-foreground">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using TheCosmoStore website, you accept and agree to be bound by the terms and
                    provision of this agreement. If you do not agree to abide by the above, please do not use this
                    service.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Use License</h2>
                  <p className="text-muted-foreground">
                    Permission is granted to temporarily download one copy of the materials on TheCosmoStore's website
                    for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
                    of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Amazon Affiliate Disclosure</h2>
                  <p className="text-muted-foreground">
                    TheCosmoStore is a participant in the Amazon Services LLC Associates Program, an affiliate
                    advertising program designed to provide a means for sites to earn advertising fees by advertising
                    and linking to Amazon.com. We may earn commissions from qualifying purchases made through our
                    affiliate links.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Product Reviews and Content</h2>
                  <p className="text-muted-foreground">
                    All product reviews and content on our website are for informational purposes only. Individual
                    results may vary. We strive to provide accurate information, but we make no warranties about the
                    completeness, reliability, and accuracy of this information.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">User-Generated Content</h2>
                  <p className="text-muted-foreground">
                    By submitting reviews, comments, or other content to our website, you grant us a non-exclusive,
                    royalty-free, perpetual license to use, modify, and display such content. You are responsible for
                    ensuring your content does not violate any laws or third-party rights.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Disclaimer</h2>
                  <p className="text-muted-foreground">
                    The materials on TheCosmoStore's website are provided on an 'as is' basis. TheCosmoStore makes no
                    warranties, expressed or implied, and hereby disclaims and negates all other warranties including
                    without limitation, implied warranties or conditions of merchantability, fitness for a particular
                    purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Limitations</h2>
                  <p className="text-muted-foreground">
                    In no event shall TheCosmoStore or its suppliers be liable for any damages (including, without
                    limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                    use or inability to use the materials on TheCosmoStore's website, even if TheCosmoStore or a
                    TheCosmoStore authorized representative has been notified orally or in writing of the possibility of
                    such damage.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Accuracy of Materials</h2>
                  <p className="text-muted-foreground">
                    The materials appearing on TheCosmoStore's website could include technical, typographical, or
                    photographic errors. TheCosmoStore does not warrant that any of the materials on its website are
                    accurate, complete, or current. TheCosmoStore may make changes to the materials contained on its
                    website at any time without notice.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Modifications</h2>
                  <p className="text-muted-foreground">
                    TheCosmoStore may revise these terms of service for its website at any time without notice. By using
                    this website, you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="bg-card p-4 rounded-lg">
                    <p className="text-foreground">Email: legal@thecosmostore.com</p>
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
