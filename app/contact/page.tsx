import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Page Header */}
      <section className="bg-card/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products or need beauty advice? We're here to help you find your perfect
              cosmetics match.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                          First Name
                        </label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                          Last Name
                        </label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <Input id="subject" placeholder="What's this about?" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Tell us how we can help you..." className="min-h-32" />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <p className="text-muted-foreground">hello@thecosmostore.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Phone</p>
                          <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Address</p>
                          <p className="text-muted-foreground">
                            123 Beauty Lane
                            <br />
                            Cosmetics City, CC 12345
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Business Hours</p>
                          <p className="text-muted-foreground">
                            Mon-Fri: 9AM-6PM EST
                            <br />
                            Sat-Sun: 10AM-4PM EST
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">Frequently Asked Questions</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-foreground">How do I track my Amazon order?</p>
                        <p className="text-sm text-muted-foreground">
                          Since we're an affiliate site, all orders are processed through Amazon. You'll receive
                          tracking information directly from Amazon.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Can I return products?</p>
                        <p className="text-sm text-muted-foreground">
                          Returns are handled through Amazon's return policy. You can initiate returns through your
                          Amazon account.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Do you offer beauty consultations?</p>
                        <p className="text-sm text-muted-foreground">
                          Yes! Contact us to schedule a virtual beauty consultation with our experts.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
