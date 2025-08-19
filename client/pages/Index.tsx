import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Car, 
  Heart,
  Share2,
  Calendar,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Star
} from "lucide-react";

const propertyImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
];

export default function Index() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted:", contactForm);
    alert("Thank you for your inquiry! We'll get back to you soon.");
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-brand-800">LuxeEstate</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Tour
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Gallery Section */}
      <section className="relative">
        <div className="relative h-[70vh] overflow-hidden">
          <img
            src={propertyImages[currentImageIndex]}
            alt={`Property view ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Gallery Navigation */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Property Overview */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-luxury-100 text-luxury-800">
                  For Sale
                </Badge>
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-3xl font-bold text-brand-900 mb-2">
                Luxury Modern Villa
              </h1>
              <p className="text-brand-600 flex items-center mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                123 Sunset Boulevard, Beverly Hills, CA 90210
              </p>
              <div className="text-4xl font-bold text-brand-900 mb-4">
                $2,750,000
              </div>
              <div className="flex items-center gap-6 text-brand-600">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 mr-1" />
                  <span>4 Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 mr-1" />
                  <span>3 Baths</span>
                </div>
                <div className="flex items-center">
                  <Square className="h-5 w-5 mr-1" />
                  <span>3,200 sq ft</span>
                </div>
                <div className="flex items-center">
                  <Car className="h-5 w-5 mr-1" />
                  <span>2 Garage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute top-8 right-8">
            <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {propertyImages.length}
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="bg-white border-b border-border p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-2 overflow-x-auto">
              {propertyImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? "border-brand-600"
                      : "border-border hover:border-brand-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Property Details */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Property Description</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-brand max-w-none">
                <p className="text-brand-700 leading-relaxed">
                  Discover luxury living at its finest in this stunning modern villa. This architectural 
                  masterpiece seamlessly blends contemporary design with timeless elegance, offering 
                  breathtaking views and premium finishes throughout.
                </p>
                <p className="text-brand-700 leading-relaxed">
                  The open-concept layout features soaring ceilings, floor-to-ceiling windows, and 
                  premium hardwood floors. The gourmet kitchen boasts top-of-the-line appliances, 
                  marble countertops, and a spacious island perfect for entertaining.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Features & Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-brand-800">Interior Features</h4>
                    <ul className="text-brand-600 space-y-1">
                      <li>• Hardwood floors throughout</li>
                      <li>• Marble countertops</li>
                      <li>• Stainless steel appliances</li>
                      <li>• Walk-in closets</li>
                      <li>• Central air conditioning</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-brand-800">Exterior Features</h4>
                    <ul className="text-brand-600 space-y-1">
                      <li>• Swimming pool & spa</li>
                      <li>• Outdoor kitchen</li>
                      <li>• Landscaped gardens</li>
                      <li>• 2-car garage</li>
                      <li>• Security system</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Location & Neighborhood</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-700 mb-4">
                  Located in the prestigious Beverly Hills area, this property offers easy access to 
                  world-class shopping, dining, and entertainment venues. The neighborhood is known 
                  for its tree-lined streets, excellent schools, and luxury amenities.
                </p>
                <div className="bg-brand-50 rounded-lg p-4">
                  <div className="text-center text-brand-600">
                    Interactive map would be displayed here
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
                <CardDescription>
                  Get in touch to schedule a viewing or ask questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={contactForm.phone}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="I'm interested in this property..."
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Agent Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👩‍💼</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-900">Sarah Johnson</h3>
                    <p className="text-brand-600">Senior Real Estate Agent</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-brand-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-brand-600">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>sarah@luxeestate.com</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Agent Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">LuxeEstate</h3>
              <p className="text-brand-300">
                Your premier destination for luxury real estate in Beverly Hills and beyond.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-brand-300">
                <li>Buy Properties</li>
                <li>Sell Properties</li>
                <li>Property Management</li>
                <li>Investment Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-brand-300">
                <li>(555) 123-4567</li>
                <li>info@luxeestate.com</li>
                <li>Beverly Hills, CA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-brand-300 hover:text-white">
                  Instagram
                </Button>
                <Button variant="ghost" size="sm" className="text-brand-300 hover:text-white">
                  Facebook
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-brand-800 mt-8 pt-8 text-center text-brand-400">
            <p>&copy; 2024 LuxeEstate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
