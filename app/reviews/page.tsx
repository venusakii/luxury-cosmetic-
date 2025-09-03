"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, Heart } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const products = [
  {
    id: 9,
    slug: "tirtir-mask-fit-red-cushion",
    name: "TIRTIR Mask Fit Red Cushion Foundation",
    brand: "TIRTIR",
    price: "$16.99",
    originalPrice: "$22.00",
    rating: 4.6,
    reviewCount: 15420,
    image: "/tirtir-foundation.png",
    category: "Makeup",
    description: "Korean cushion foundation with full coverage, SPF 40 PA++, long-lasting 24hr wear, weightless feel",
    amazonLink: "https://www.amazon.com/TIRTIR-Foundation-coverage-Weighless-foundation/dp/B09LCMQM44",
    featured: true,
  },
  {
    id: 1,
    slug: "luxury-vitamin-c-serum",
    name: "Luxury Vitamin C Serum",
    brand: "Premium Beauty",
    price: "$89.99",
    originalPrice: "$120.00",
    rating: 4.9,
    reviewCount: 1250,
    image: "/vitamin-c-serum.png",
    category: "Skincare",
    description: "Advanced vitamin C formula for brightening and anti-aging",
    amazonLink: "#",
    featured: true,
  },
  {
    id: 2,
    slug: "hydrating-face-cream",
    name: "Hydrating Face Cream",
    brand: "Elite Skincare",
    price: "$125.00",
    originalPrice: null,
    rating: 4.8,
    reviewCount: 890,
    image: "/hydrating-cream.png",
    category: "Skincare",
    description: "Rich moisturizer for dry and sensitive skin",
    amazonLink: "#",
    featured: false,
  },
  {
    id: 3,
    slug: "matte-lipstick-set",
    name: "Matte Lipstick Set",
    brand: "Luxury Cosmetics",
    price: "$65.00",
    originalPrice: "$85.00",
    rating: 4.7,
    reviewCount: 2100,
    image: "/matte-lipstick-set.png",
    category: "Makeup",
    description: "Long-lasting matte lipsticks in 6 stunning shades",
    amazonLink: "#",
    featured: true,
  },
  {
    id: 4,
    slug: "anti-aging-night-cream",
    name: "Anti-Aging Night Cream",
    brand: "Premium Care",
    price: "$150.00",
    originalPrice: null,
    rating: 4.9,
    reviewCount: 750,
    image: "/anti-aging-cream.png",
    category: "Skincare",
    description: "Intensive overnight treatment for mature skin",
    amazonLink: "#",
    featured: false,
  },
  {
    id: 5,
    slug: "foundation-palette",
    name: "Foundation Palette",
    brand: "Elite Makeup",
    price: "$95.00",
    originalPrice: "$130.00",
    rating: 4.6,
    reviewCount: 1580,
    image: "/luxury-foundation.png",
    category: "Makeup",
    description: "Professional foundation palette with 12 shades",
    amazonLink: "#",
    featured: false,
  },
  {
    id: 6,
    slug: "retinol-serum",
    name: "Retinol Serum",
    brand: "Advanced Skincare",
    price: "$110.00",
    originalPrice: null,
    rating: 4.8,
    reviewCount: 920,
    image: "/retinol-serum.png",
    category: "Skincare",
    description: "Gentle retinol formula for beginners and experts",
    amazonLink: "#",
    featured: true,
  },
  {
    id: 7,
    slug: "eyeshadow-palette",
    name: "Eyeshadow Palette",
    brand: "Luxury Colors",
    price: "$78.00",
    originalPrice: "$98.00",
    rating: 4.7,
    reviewCount: 1340,
    image: "/eyeshadow-palette.png",
    category: "Makeup",
    description: "18 highly pigmented eyeshadows in neutral tones",
    amazonLink: "#",
    featured: false,
  },
  {
    id: 8,
    slug: "hyaluronic-acid-serum",
    name: "Hyaluronic Acid Serum",
    brand: "Premium Hydration",
    price: "$75.00",
    originalPrice: "$95.00",
    rating: 4.9,
    reviewCount: 1680,
    image: "/hyaluronic-serum.png",
    category: "Skincare",
    description: "Ultra-hydrating serum for all skin types",
    amazonLink: "#",
    featured: true,
  },
]

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("rating")

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory =
        selectedCategory === "all" || product.category.toLowerCase() === selectedCategory.toLowerCase()
      return matchesSearch && matchesCategory
    })

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "reviews":
          return b.reviewCount - a.reviewCount
        case "price-low":
          return Number.parseFloat(a.price.replace("$", "")) - Number.parseFloat(b.price.replace("$", ""))
        case "price-high":
          return Number.parseFloat(b.price.replace("$", "")) - Number.parseFloat(a.price.replace("$", ""))
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Page Header */}
      <section className="bg-card/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Product Reviews</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover authentic reviews from our community of beauty enthusiasts. Find your perfect luxury cosmetics
              with confidence.
            </p>
            <div className="flex items-center justify-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{filteredAndSortedProducts.length}</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {filteredAndSortedProducts.reduce((sum, product) => sum + product.reviewCount, 0).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {filteredAndSortedProducts.length > 0
                    ? (
                        filteredAndSortedProducts.reduce((sum, product) => sum + product.rating, 0) /
                        filteredAndSortedProducts.length
                      ).toFixed(1)
                    : "0.0"}
                </div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="skincare">Skincare</SelectItem>
                  <SelectItem value="makeup">Makeup</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2"></div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedProducts.map((product) =>
                product.slug === "tirtir-mask-fit-red-cushion" ? (
                  <Link
                    key={product.id}
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-border/50 relative">
                      {product.featured && (
                        <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      )}
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden rounded-t-lg relative">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 right-3">
                            <Button variant="ghost" size="icon" className="bg-background/80 hover:bg-background">
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                          {product.originalPrice && (
                            <Badge className="absolute bottom-3 left-3 bg-destructive text-destructive-foreground">
                              Sale
                            </Badge>
                          )}
                        </div>
                        <div className="p-4 flex flex-col h-64">
                          <div className="space-y-3 flex-1">
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">{product.brand}</div>
                              <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                                {product.name}
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-1">{product.description}</p>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < Math.floor(product.rating)
                                        ? "fill-primary text-primary"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm font-medium">{product.rating}</span>
                              <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="space-y-1">
                                <div className="flex items-center space-x-2">
                                  <span className="text-lg font-bold text-primary">{product.price}</span>
                                  {product.originalPrice && (
                                    <span className="text-sm text-muted-foreground line-through">
                                      {product.originalPrice}
                                    </span>
                                  )}
                                </div>
                                <Badge variant="secondary" className="text-xs">
                                  {product.category}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="pt-6 mt-auto">
                            <Button variant="outline" size="sm" className="w-full text-xs bg-transparent h-8">
                              Buy on Amazon
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ) : (
                  <Card
                    key={product.id}
                    className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-border/50 relative"
                  >
                    {product.featured && (
                      <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">Featured</Badge>
                    )}
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden rounded-t-lg relative">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3">
                          <Button variant="ghost" size="icon" className="bg-background/80 hover:bg-background">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                        {product.originalPrice && (
                          <Badge className="absolute bottom-3 left-3 bg-destructive text-destructive-foreground">
                            Sale
                          </Badge>
                        )}
                      </div>
                      <div className="p-4 flex flex-col h-64">
                        <div className="space-y-3 flex-1">
                          <div className="space-y-1">
                            <div className="text-sm text-muted-foreground">{product.brand}</div>
                            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-1">{product.description}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating)
                                      ? "fill-primary text-primary"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-medium">{product.rating}</span>
                            <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold text-primary">{product.price}</span>
                                {product.originalPrice && (
                                  <span className="text-sm text-muted-foreground line-through">
                                    {product.originalPrice}
                                  </span>
                                )}
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {product.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="pt-6 mt-auto">
                          <Link href={`/reviews/${product.slug}`} className="block">
                            <Button variant="outline" size="sm" className="w-full text-xs bg-transparent h-8">
                              Read Reviews
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ),
              )}
            </div>
          )}
        </div>
      </section>

      {/* Load More */}
      <section className="py-12 text-center"></section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
