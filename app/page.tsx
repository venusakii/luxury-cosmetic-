import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-card to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">Luxury Beauty Collection</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Discover Premium
                  <span className="text-primary block">Beauty Products</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Curated luxury cosmetics with authentic reviews. From skincare essentials to premium makeup, find your
                  perfect beauty match.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/reviews">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    Shop Collection
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/reviews">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                    Read Reviews
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.8</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden">
                <img
                  src="/luxury-cosmetics-collection-with-premium-skincare-.png"
                  alt="Luxury cosmetics collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 bg-primary/20 rounded-full border-2 border-background" />
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-medium">Trusted by 50K+</div>
                    <div className="text-xs text-muted-foreground">Beauty enthusiasts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Shop by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated collection of premium beauty products
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Skincare Essentials",
                description: "Premium serums, moisturizers, and treatments",
                image: "/skincare-essentials.png",
                count: "150+ Products",
              },
              {
                title: "Makeup Collection",
                description: "High-end foundations, lipsticks, and palettes",
                image: "/makeup-collection.png",
                count: "200+ Products",
              },
              {
                title: "Anti-Aging",
                description: "Advanced formulas for youthful, radiant skin",
                image: "/anti-aging-products.png",
                count: "80+ Products",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-border/50"
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{category.description}</p>
                    <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10">
                      Explore Collection
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Top Rated Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the most loved products by our community
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "TIRTIR Mask Fit Red Cushion Foundation",
                brand: "TIRTIR",
                price: "$18.00",
                rating: 4.9,
                reviews: 3250,
                image: "/tirtir-foundation.png",
              },
              {
                name: "Luxury Vitamin C Serum",
                brand: "Premium Beauty",
                price: "$89.99",
                rating: 4.9,
                reviews: 1250,
                image: "/vitamin-c-serum.png",
              },
              {
                name: "Hydrating Face Cream",
                brand: "Elite Skincare",
                price: "$125.00",
                rating: 4.8,
                reviews: 890,
                image: "/hydrating-cream.png",
              },
              {
                name: "Matte Lipstick Set",
                brand: "Luxury Cosmetics",
                price: "$65.00",
                rating: 4.7,
                reviews: 2100,
                image: "/matte-lipstick-set.png",
              },
              {
                name: "Anti-Aging Night Cream",
                brand: "Premium Care",
                price: "$150.00",
                rating: 4.9,
                reviews: 750,
                image: "/anti-aging-cream.png",
              },
              {
                name: "Retinol Treatment Serum",
                brand: "Advanced Skincare",
                price: "$95.00",
                rating: 4.8,
                reviews: 1100,
                image: "/retinol-serum.png",
              },
              {
                name: "Luxury Foundation",
                brand: "Premium Makeup",
                price: "$78.00",
                rating: 4.7,
                reviews: 1850,
                image: "/luxury-foundation.png",
              },
              {
                name: "Eye Cream Complex",
                brand: "Elite Beauty",
                price: "$110.00",
                rating: 4.9,
                reviews: 920,
                image: "/eye-cream.png",
              },
              {
                name: "Cleansing Oil",
                brand: "Luxury Skincare",
                price: "$55.00",
                rating: 4.6,
                reviews: 1400,
                image: "/cleansing-oil.png",
              },
            ].map((product, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 space-y-4">
                  <div className="aspect-square overflow-hidden rounded-lg bg-card">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">{product.brand}</div>
                    <h3 className="font-semibold text-foreground line-clamp-2">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Why Choose TheCosmoStore</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in luxury beauty with unmatched quality and service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Authentic Products",
                description: "100% genuine luxury cosmetics from authorized retailers",
                icon: "✓",
              },
              {
                title: "Expert Reviews",
                description: "Detailed reviews from certified beauty professionals",
                icon: "★",
              },
              {
                title: "Fast Shipping",
                description: "Free express delivery on orders over $75",
                icon: "🚚",
              },
              {
                title: "Money Back Guarantee",
                description: "30-day return policy for your peace of mind",
                icon: "💰",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="text-4xl text-primary">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Results Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Real Results</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the amazing transformations our customers have achieved with our products
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                product: "Vitamin C Serum + Retinol Treatment",
                timeframe: "8 weeks",
                result: "Reduced dark spots and improved skin texture",
                beforeImage: "/before-dark-spots.png",
                afterImage: "/after-dark-spots.png",
              },
              {
                name: "Jessica L.",
                product: "Anti-Aging Night Cream",
                timeframe: "12 weeks",
                result: "Visible reduction in fine lines and wrinkles",
                beforeImage: "/before-wrinkles.png",
                afterImage: "/after-wrinkles.png",
              },
              {
                name: "Maria K.",
                product: "Hydrating Face Cream",
                timeframe: "4 weeks",
                result: "Dramatically improved skin hydration and glow",
                beforeImage: "/before-dry-skin.png",
                afterImage: "/after-hydrated-skin.png",
              },
            ].map((result, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-0">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={result.beforeImage || "/placeholder.svg"}
                        alt={`Before using ${result.product}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                        Before
                      </div>
                    </div>
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={result.afterImage || "/placeholder.svg"}
                        alt={`After using ${result.product}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                        After
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">{result.name}</h3>
                      <p className="text-sm text-muted-foreground">{result.product}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Timeframe:</span>
                        <span className="font-medium text-primary">{result.timeframe}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{result.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our products and services
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Are all products authentic and genuine?",
                answer:
                  "Yes, we guarantee 100% authentic products sourced directly from authorized retailers and brand partners. Every product comes with authenticity verification.",
              },
              {
                question: "What is your return policy?",
                answer:
                  "We offer a 30-day money-back guarantee on all products. If you're not satisfied, return the product in its original condition for a full refund.",
              },
              {
                question: "How long does shipping take?",
                answer:
                  "Standard shipping takes 3-5 business days. We offer free express shipping (1-2 days) on orders over $75. International shipping is available.",
              },
              {
                question: "Do you offer product recommendations?",
                answer:
                  "Yes! Our beauty experts provide personalized product recommendations based on your skin type, concerns, and preferences. Contact us for a free consultation.",
              },
              {
                question: "Are the reviews on your site real?",
                answer:
                  "All reviews are from verified customers who have purchased the products. We have a strict policy against fake reviews to maintain trust and authenticity.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
