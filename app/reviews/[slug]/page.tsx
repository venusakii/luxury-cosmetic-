"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Star,
  ShoppingBag,
  Heart,
  Share2,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useState } from "react"

const products = {
  "luxury-vitamin-c-serum": {
    id: 1,
    slug: "luxury-vitamin-c-serum",
    name: "Luxury Vitamin C Serum",
    brand: "Premium Beauty",
    price: "$89.99",
    originalPrice: "$120.00",
    rating: 4.9,
    reviewCount: 1250,
    images: [
      "luxury vitamin c serum with dropper bottle front view",
      "luxury vitamin c serum ingredients list and texture",
      "luxury vitamin c serum packaging box premium design",
      "vitamin c serum application on skin before after results",
    ],
    category: "Skincare",
    description:
      "Advanced vitamin C formula for brightening and anti-aging. This premium serum contains 20% L-Ascorbic Acid, Vitamin E, and Ferulic Acid for maximum potency and stability. Clinically proven to reduce dark spots by 85% in 8 weeks.",
    detailedDescription:
      "Our Luxury Vitamin C Serum represents the pinnacle of skincare innovation. Formulated with pharmaceutical-grade 20% L-Ascorbic Acid, this potent serum delivers unparalleled brightening and anti-aging benefits. The addition of Vitamin E and Ferulic Acid creates a powerful antioxidant complex that not only enhances the stability of Vitamin C but also provides superior protection against environmental damage. Clinical studies show remarkable results: 85% reduction in dark spots, 92% improvement in skin brightness, and 78% reduction in fine lines after just 8 weeks of use.",
    keyIngredients: [
      "20% L-Ascorbic Acid",
      "Vitamin E",
      "Ferulic Acid",
      "Hyaluronic Acid",
      "Niacinamide",
      "Peptide Complex",
    ],
    benefits: [
      "Brightens skin tone and reduces hyperpigmentation",
      "Reduces fine lines and wrinkles",
      "Evens skin texture and improves smoothness",
      "Provides powerful antioxidant protection",
      "Stimulates collagen production",
      "Minimizes pore appearance",
    ],
    howToUse:
      "Apply 2-3 drops to clean, dry skin in the morning. Gently pat and spread evenly across face and neck. Follow with moisturizer and broad-spectrum SPF 30 or higher. Start with every other day for the first week to allow skin to adjust.",
    skinType: "All skin types, especially dull, aging, or hyperpigmented skin",
    clinicalResults: [
      "85% reduction in dark spots after 8 weeks",
      "92% improvement in skin brightness",
      "78% reduction in fine lines",
      "96% of users reported smoother skin texture",
    ],
    amazonLink: "https://amazon.com/example-product",
    featured: true,
  },
  "hydrating-face-cream": {
    id: 2,
    slug: "hydrating-face-cream",
    name: "Hydrating Face Cream",
    brand: "Elite Skincare",
    price: "$125.00",
    originalPrice: null,
    rating: 4.8,
    reviewCount: 890,
    images: [
      "premium hydrating face cream jar front view luxury packaging",
      "hydrating face cream rich texture close up application",
      "elite skincare face cream ingredients and benefits display",
      "before after results hydrating face cream transformation",
    ],
    category: "Skincare",
    description:
      "Rich moisturizer for dry and sensitive skin with ceramides and peptides. Provides 72-hour hydration with a luxurious, non-greasy formula.",
    detailedDescription:
      "Experience the ultimate in skin hydration with our Elite Hydrating Face Cream. This rich, luxurious moisturizer is specifically formulated for dry and sensitive skin types. The advanced formula combines five essential ceramides with powerful peptides to restore and strengthen the skin barrier while providing intense, long-lasting moisture. Clinical testing proves 72-hour hydration with just one application, making it perfect for those with chronically dry or compromised skin barriers.",
    keyIngredients: [
      "5 Essential Ceramides",
      "Peptide Complex",
      "Niacinamide",
      "Squalane",
      "Hyaluronic Acid",
      "Shea Butter",
    ],
    benefits: [
      "Provides 72-hour deep hydration",
      "Strengthens and repairs skin barrier",
      "Reduces redness and irritation",
      "Anti-aging peptide benefits",
      "Improves skin elasticity",
      "Soothes sensitive skin",
    ],
    howToUse:
      "Apply to clean skin morning and evening. Massage gently in upward circular motions until fully absorbed. Can be used alone or layered over serums.",
    skinType: "Dry, sensitive, mature skin",
    clinicalResults: [
      "72-hour hydration guarantee",
      "89% improvement in skin barrier function",
      "94% reduction in skin irritation",
      "87% improvement in skin elasticity",
    ],
    amazonLink: "https://amazon.com/example-product-2",
    featured: false,
  },
  "matte-lipstick-set": {
    id: 3,
    slug: "matte-lipstick-set",
    name: "Matte Lipstick Set",
    brand: "Luxury Cosmetics",
    price: "$65.00",
    originalPrice: "$85.00",
    rating: 4.7,
    reviewCount: 2100,
    images: [
      "luxury matte lipstick collection set 6 shades front view",
      "matte lipstick swatches on different skin tones comparison",
      "luxury cosmetics lipstick packaging premium design details",
      "matte lipstick application and long lasting wear results",
    ],
    category: "Makeup",
    description:
      "Premium matte lipstick collection with 6 versatile shades. Long-lasting formula that doesn't dry out lips, featuring 12-hour wear technology.",
    detailedDescription:
      "Discover the perfect matte lip look with our Luxury Matte Lipstick Set. This curated collection features 6 carefully selected shades that complement all skin tones, from everyday nudes to bold statement colors. Our innovative formula combines the intense pigmentation and sophisticated matte finish you desire with the comfort and hydration your lips need. Unlike traditional matte lipsticks that can be drying, our advanced formula includes nourishing oils and butters that keep lips comfortable throughout the day.",
    keyIngredients: [
      "Vitamin E",
      "Jojoba Oil",
      "Shea Butter",
      "Natural Waxes",
      "Hyaluronic Spheres",
      "Antioxidant Complex",
    ],
    benefits: [
      "12-hour long-lasting wear",
      "Comfortable matte finish without drying",
      "Moisturizing and nourishing formula",
      "Highly pigmented full coverage",
      "Transfer-resistant formula",
      "Universally flattering shade range",
    ],
    howToUse:
      "Apply directly to lips starting from the center and working outward, or use a lip brush for precise application. Build up layers for more intensity. Remove with oil-based makeup remover.",
    skinType: "All skin types and tones",
    shadeRange: [
      "Nude Blush - Perfect everyday neutral",
      "Rose Petal - Soft romantic pink",
      "Berry Kiss - Rich berry tone",
      "Classic Red - Timeless red statement",
      "Plum Velvet - Deep sophisticated plum",
      "Mocha Dream - Warm brown nude",
    ],
    amazonLink: "https://amazon.com/example-product-3",
    featured: true,
  },
  "tirtir-mask-fit-red-cushion": {
    id: 4,
    slug: "tirtir-mask-fit-red-cushion",
    name: "TIRTIR Mask Fit Red Cushion Foundation",
    brand: "TIRTIR",
    price: "$38.00",
    originalPrice: "$45.00",
    rating: 4.8,
    reviewCount: 3200,
    images: [
      "tirtir mask fit red cushion foundation compact front view",
      "tirtir cushion foundation application and coverage demonstration",
      "tirtir red cushion ingredients and korean beauty technology",
      "before after tirtir foundation coverage and finish results",
    ],
    category: "Makeup",
    description:
      "Korean beauty innovation with full coverage and weightless formula. Features SPF 40 PA++ protection and 24-hour long-lasting wear.",
    detailedDescription:
      "Experience the revolutionary K-beauty innovation with TIRTIR's Mask Fit Red Cushion Foundation. This award-winning cushion foundation delivers full coverage with an incredibly lightweight, breathable feel that mimics a second skin. The unique 'Mask Fit' technology ensures the foundation adheres perfectly to your skin without caking or settling into fine lines. Infused with skincare benefits and broad-spectrum SPF 40 PA++ protection, this foundation not only perfects your complexion but also protects and nourishes your skin throughout the day.",
    keyIngredients: [
      "Niacinamide",
      "Hyaluronic Acid",
      "Centella Asiatica",
      "Red Propolis",
      "Peptide Complex",
      "SPF 40 PA++",
    ],
    benefits: [
      "Full coverage with weightless feel",
      "24-hour long-lasting wear",
      "SPF 40 PA++ sun protection",
      "Skincare benefits while wearing",
      "Buildable coverage without caking",
      "Suitable for sensitive skin",
    ],
    howToUse:
      "Press the included cushion puff into the compact to pick up product. Gently pat onto skin starting from the center of the face and blending outward. Build coverage as needed with additional layers.",
    skinType: "All skin types, especially oily and combination skin",
    clinicalResults: [
      "24-hour wear without touch-ups",
      "97% improvement in skin texture appearance",
      "SPF 40 PA++ broad spectrum protection",
      "89% of users reported no irritation",
    ],
    amazonLink: "https://www.amazon.com/TIRTIR-Foundation-coverage-Weighless-foundation/dp/B09LCMQM44",
    featured: true,
  },
}

const reviews = {
  "luxury-vitamin-c-serum": [
    {
      id: 1,
      user: "Sarah M.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2024-01-15",
      title: "Amazing results in just 2 weeks!",
      content:
        "I've been using this vitamin C serum for 2 weeks now and I'm already seeing incredible results. My skin looks brighter and more even. The texture is perfect - not too thick or sticky. Definitely worth the investment!",
      helpful: 24,
      verified: true,
    },
    {
      id: 2,
      user: "Jennifer L.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2024-01-10",
      title: "Best vitamin C serum I've tried",
      content:
        "I've tried many vitamin C serums and this one is by far the best. It doesn't irritate my sensitive skin and the results are visible. My dark spots are fading and my skin has a healthy glow.",
      helpful: 18,
      verified: true,
    },
    {
      id: 3,
      user: "Michelle K.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "2024-01-05",
      title: "Great product but pricey",
      content:
        "The serum works really well and I love the packaging. My only complaint is the price point, but I guess you get what you pay for. The quality is definitely there.",
      helpful: 12,
      verified: true,
    },
    {
      id: 4,
      user: "Amanda R.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2023-12-28",
      title: "Transformed my skin",
      content:
        "This serum has completely transformed my skin. I had dull, uneven skin tone and now it's bright and radiant. The dropper makes it easy to use and a little goes a long way.",
      helpful: 31,
      verified: true,
    },
  ],
  "hydrating-face-cream": [
    {
      id: 1,
      user: "Lisa P.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2024-01-12",
      title: "Perfect for dry skin",
      content:
        "This cream is perfect for my dry skin. It's rich but not greasy and keeps my skin moisturized all day long.",
      helpful: 15,
      verified: true,
    },
  ],
  "matte-lipstick-set": [
    {
      id: 1,
      user: "Emma S.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2024-01-18",
      title: "Perfect matte finish!",
      content:
        "These lipsticks have the perfect matte finish without being drying. The colors are gorgeous and they last all day. Definitely worth the investment!",
      helpful: 42,
      verified: true,
    },
    {
      id: 2,
      user: "Rachel T.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "2024-01-14",
      title: "Great color selection",
      content:
        "Love the variety of colors in this set. The formula is comfortable and doesn't crack. Only wish it came with a lip liner.",
      helpful: 28,
      verified: true,
    },
    {
      id: 3,
      user: "Sophie L.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2024-01-10",
      title: "Best matte lipsticks ever!",
      content:
        "I've tried so many matte lipsticks and these are by far the best. They don't dry out my lips and the pigmentation is incredible.",
      helpful: 35,
      verified: true,
    },
  ],
  "tirtir-mask-fit-red-cushion": [
    {
      id: 1,
      user: "Jessica K.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2024-01-20",
      title: "Holy grail foundation!",
      content:
        "This is hands down the best foundation I've ever used. The coverage is amazing but it feels like I'm wearing nothing. Lasts all day without getting oily!",
      helpful: 67,
      verified: true,
    },
    {
      id: 2,
      user: "Maria L.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2024-01-18",
      title: "Perfect for oily skin",
      content:
        "Finally found a foundation that doesn't make my oily skin look cakey. The finish is beautiful and natural. Love the SPF protection too!",
      helpful: 45,
      verified: true,
    },
  ],
}

const relatedProducts = [
  {
    id: 3,
    slug: "matte-lipstick-set",
    name: "Matte Lipstick Set",
    brand: "Luxury Cosmetics",
    price: "$65.00",
    rating: 4.7,
    reviewCount: 2100,
    image: "luxury matte lipstick collection set",
  },
  {
    id: 4,
    slug: "anti-aging-night-cream",
    name: "Anti-Aging Night Cream",
    brand: "Premium Care",
    price: "$150.00",
    rating: 4.9,
    reviewCount: 750,
    image: "luxury anti-aging night cream jar",
  },
]

function ImageCarousel({ images, productName }: { images: string[]; productName: string }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-card">
        <img
          src={`/abstract-geometric-shapes.png?height=600&width=600&query=${images[currentImage]}`}
          alt={`${productName} - Image ${currentImage + 1}`}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
        {/* Image indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImage ? "bg-primary" : "bg-background/50"
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`aspect-square overflow-hidden rounded-lg bg-card cursor-pointer border-2 transition-colors ${
              index === currentImage ? "border-primary" : "border-transparent"
            }`}
            onClick={() => setCurrentImage(index)}
          >
            <img
              src={`/abstract-geometric-shapes.png?height=150&width=150&query=${image}`}
              alt={`${productName} thumbnail ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProductReviewPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]
  const productReviews = reviews[params.slug as keyof typeof reviews] || []

  if (!product) {
    notFound()
  }

  const ratingDistribution = [
    { stars: 5, count: Math.floor(product.reviewCount * 0.7), percentage: 70 },
    { stars: 4, count: Math.floor(product.reviewCount * 0.2), percentage: 20 },
    { stars: 3, count: Math.floor(product.reviewCount * 0.06), percentage: 6 },
    { stars: 2, count: Math.floor(product.reviewCount * 0.03), percentage: 3 },
    { stars: 1, count: Math.floor(product.reviewCount * 0.01), percentage: 1 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/reviews" className="hover:text-primary">
            Reviews
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images with Carousel */}
            <ImageCarousel images={product.images} productName={product.name} />

            {/* Product Info */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="secondary">{product.category}</Badge>
                <div className="text-sm text-muted-foreground">{product.brand}</div>
                <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
                <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <Badge className="bg-destructive text-destructive-foreground">
                    Save{" "}
                    {Math.round(
                      ((Number.parseFloat(product.originalPrice.slice(1)) - Number.parseFloat(product.price.slice(1))) /
                        Number.parseFloat(product.originalPrice.slice(1))) *
                        100,
                    )}
                    %
                  </Badge>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90" asChild>
                  <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Buy on Amazon
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Key Ingredients */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Key Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {product.keyIngredients.map((ingredient, index) => (
                    <Badge key={index} variant="outline">
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skin Type */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Suitable For</h3>
                <p className="text-muted-foreground">{product.skinType}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">Product Details</h2>

            {/* Detailed Description */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">About This Product</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{product.detailedDescription}</p>
              </CardContent>
            </Card>

            {/* Clinical Results */}
            {product.clinicalResults && (
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Clinical Results</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.clinicalResults.map((result, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Shade Range for Makeup Products */}
            {product.shadeRange && (
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Shade Range</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.shadeRange.map((shade, index) => (
                      <div key={index} className="p-4 bg-card border rounded-lg">
                        <span className="font-medium">{shade}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* How to Use */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">How to Use</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{product.howToUse}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Customer Reviews</h2>

            {/* Rating Overview */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-primary">{product.rating}</div>
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${
                            i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-muted-foreground">Based on {product.reviewCount} reviews</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {ratingDistribution.map((item) => (
                      <div key={item.stars} className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1 w-12">
                          <span className="text-sm">{item.stars}</span>
                          <Star className="h-3 w-3 fill-primary text-primary" />
                        </div>
                        <Progress value={item.percentage} className="flex-1" />
                        <span className="text-sm text-muted-foreground w-12">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Individual Reviews */}
            <div className="space-y-6">
              {productReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={review.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold">{review.user}</span>
                              {review.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  Verified Purchase
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">{review.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{review.content}</p>
                      </div>
                      <div className="flex items-center space-x-4 pt-2">
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          Helpful ({review.helpful})
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          Not helpful
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline">Load More Reviews</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">You Might Also Like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-4 space-y-4">
                    <div className="aspect-square overflow-hidden rounded-lg bg-card">
                      <img
                        src={`/abstract-geometric-shapes.png?height=250&width=250&query=${relatedProduct.image}`}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">{relatedProduct.brand}</div>
                      <h3 className="font-semibold text-foreground line-clamp-2">{relatedProduct.name}</h3>
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(relatedProduct.rating)
                                  ? "fill-primary text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({relatedProduct.reviewCount})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">{relatedProduct.price}</span>
                        <Link href={`/reviews/${relatedProduct.slug}`}>
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
