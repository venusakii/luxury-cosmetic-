import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Users, TrendingUp, Heart, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="bg-card/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">About TheCosmoStore</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Your Trusted Beauty
              <span className="text-primary block">Destination</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're passionate about helping you discover the perfect luxury cosmetics through authentic reviews, expert
              recommendations, and curated collections from the world's finest beauty brands.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020 by beauty enthusiasts Sarah and Emma, TheCosmoStore began as a simple blog sharing
                  honest reviews of luxury cosmetics. What started as a passion project quickly grew into a trusted
                  community of over 50,000 beauty lovers.
                </p>
                <p>
                  We believe that everyone deserves access to high-quality beauty products and honest, unbiased reviews.
                  Our mission is to bridge the gap between luxury cosmetics and everyday consumers by providing
                  authentic insights and expert recommendations.
                </p>
                <p>
                  Today, we're proud to be an Amazon Associate, helping our community discover and purchase the best
                  beauty products while maintaining our commitment to transparency and authenticity.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden">
                <img
                  src="/abstract-geometric-shapes.png?height=500&width=500&query=luxury beauty products collection with elegant packaging"
                  alt="Our beauty collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at TheCosmoStore
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Authenticity",
                description:
                  "Every review is honest and unbiased. We test products ourselves and share genuine experiences.",
              },
              {
                icon: Award,
                title: "Quality",
                description:
                  "We curate only the finest luxury cosmetics from reputable brands with proven track records.",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "Our community of beauty enthusiasts shares knowledge, tips, and experiences to help everyone.",
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description:
                  "We stay ahead of beauty trends and emerging brands to bring you the latest and greatest products.",
              },
              {
                icon: Heart,
                title: "Passion",
                description: "Beauty is our passion, and we love sharing that enthusiasm with our community every day.",
              },
              {
                icon: ShoppingBag,
                title: "Convenience",
                description:
                  "Through our Amazon partnership, we make it easy to purchase the products you love with confidence.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to the beauty community
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Community Members" },
              { number: "500+", label: "Products Reviewed" },
              { number: "15K+", label: "Authentic Reviews" },
              { number: "4.9", label: "Average Rating" },
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8 space-y-2">
                  <div className="text-4xl font-bold text-primary">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amazon Partnership */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Amazon Partnership</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                As proud participants in the Amazon Associates Program, we've partnered with Amazon to provide you with
                seamless access to the luxury cosmetics we review and recommend.
              </p>
              <p>
                This partnership allows us to earn small commissions from qualifying purchases, which helps us continue
                providing free, high-quality content and reviews. Most importantly, this never affects the price you pay
                or influences our honest opinions.
              </p>
              <p>
                When you purchase through our affiliate links, you're supporting our mission to create authentic,
                helpful beauty content while enjoying Amazon's trusted shopping experience, fast shipping, and excellent
                customer service.
              </p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <p className="text-sm text-foreground">
                <strong>Transparency Notice:</strong> We are participants in the Amazon Services LLC Associates Program,
                an affiliate advertising program designed to provide a means for us to earn fees by linking to
                Amazon.com and affiliated sites. All opinions and reviews remain our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Join Our Beauty Community</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover your next favorite product, share your experiences, and connect with fellow beauty enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/reviews">Explore Reviews</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
