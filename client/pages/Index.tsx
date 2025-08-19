import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Star,
  ChevronDown,
  ChevronUp,
  Grid,
  X,
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
  const [isContactExpanded, setIsContactExpanded] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Auto-cycle through images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
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
    setCurrentImageIndex(
      (prev) => (prev - 1 + propertyImages.length) % propertyImages.length,
    );
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    alert("Thank you for your inquiry! We'll get back to you soon.");
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section>
        <div className="relative h-[85vh] overflow-hidden rounded-none">
          <img
            src={propertyImages[currentImageIndex]}
            alt={`Property view ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Minimal Gallery Navigation */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full apple-glass border-0 hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full apple-glass border-0 hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </Button>

          {/* Minimal Image Counter */}
          <div className="absolute top-6 right-6">
            <div className="apple-glass text-white px-3 py-1.5 rounded-full text-sm font-medium">
              {currentImageIndex + 1} of {propertyImages.length}
            </div>
          </div>

          {/* Property Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-32">
            <div className="max-w-6xl mx-auto px-6 pb-12">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold apple-text-display text-white mb-3 leading-tight">
                  Modern Villa
                </h1>
                <p className="text-white/90 text-lg mb-4 apple-text-body flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Beverly Hills, California
                </p>
                <div className="text-5xl font-bold apple-text-display text-white mb-6">
                  $2.75M
                </div>
                <div className="flex items-center gap-8 text-white/90">
                  <div className="flex items-center apple-text-body">
                    <Bed className="h-5 w-5 mr-2" />
                    <span>4 Beds</span>
                  </div>
                  <div className="flex items-center apple-text-body">
                    <Bath className="h-5 w-5 mr-2" />
                    <span>3 Baths</span>
                  </div>
                  <div className="flex items-center apple-text-body">
                    <Square className="h-5 w-5 mr-2" />
                    <span>3,200 sq ft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Thumbnail Gallery */}
        <div className="bg-apple-gray-50 py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {propertyImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden transition-all duration-200 ${
                    index === currentImageIndex
                      ? "ring-2 ring-apple-blue"
                      : "hover:opacity-75"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}

              {/* Gallery Button */}
              <button
                onClick={() => setIsGalleryOpen(true)}
                className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white border-2 border-apple-gray-300 hover:border-apple-blue transition-all duration-200 flex items-center justify-center"
              >
                <Grid className="h-6 w-6 text-apple-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Apple spacing */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Property Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description Card */}
            <div className="bg-white rounded-3xl apple-shadow-lg p-8">
              <h2 className="text-2xl font-semibold apple-text-display text-black mb-6">
                About this home
              </h2>
              <div className="space-y-6 apple-text-body text-apple-gray-700 leading-relaxed">
                <p>
                  Experience luxury living in this stunning modern villa that
                  seamlessly blends contemporary architecture with timeless
                  elegance. Every detail has been carefully crafted to create an
                  atmosphere of sophistication and comfort.
                </p>
                <p>
                  The open-concept design features floor-to-ceiling windows that
                  flood the space with natural light, premium finishes
                  throughout, and a gourmet kitchen equipped with
                  state-of-the-art appliances.
                </p>
              </div>
            </div>

            {/* Features Card */}
            <div className="bg-white rounded-3xl apple-shadow-lg p-8">
              <h2 className="text-2xl font-semibold apple-text-display text-black mb-8">
                What makes this special
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold apple-text-display text-black mb-4">
                    Interior
                  </h3>
                  <ul className="space-y-3 apple-text-body text-apple-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-apple-blue rounded-full mr-3"></div>
                      Hardwood floors throughout
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-apple-blue rounded-full mr-3"></div>
                      Marble countertops
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-apple-blue rounded-full mr-3"></div>
                      Premium appliances
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-apple-blue rounded-full mr-3"></div>
                      Central air conditioning
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold apple-text-display text-black mb-4">
                    Exterior
                  </h3>
                  <ul className="space-y-3 apple-text-body text-apple-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-apple-blue rounded-full mr-3"></div>
                      Swimming pool & spa
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-apple-blue rounded-full mr-3"></div>
                      Outdoor kitchen
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-apple-blue rounded-full mr-3"></div>
                      Landscaped gardens
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-apple-blue rounded-full mr-3"></div>
                      Security system
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-3xl apple-shadow-lg p-8">
              <h2 className="text-2xl font-semibold apple-text-display text-black mb-6">
                Location
              </h2>
              <p className="apple-text-body text-apple-gray-700 leading-relaxed mb-6">
                Nestled in prestigious Beverly Hills, this property offers
                unparalleled access to world-class dining, shopping, and
                entertainment. The neighborhood is renowned for its tree-lined
                streets and luxury amenities.
              </p>
              <div className="bg-apple-gray-50 rounded-2xl p-8 text-center">
                <div className="text-apple-gray-500 apple-text-body">
                  Interactive map view
                </div>
              </div>
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-8">
            {/* Open House Schedule */}
            <div className="bg-white rounded-3xl apple-shadow-lg p-6">
              <h2 className="text-xl font-semibold apple-text-display text-black mb-4">
                Open House
              </h2>
              <div className="space-y-3">
                <div className="bg-apple-blue/5 rounded-2xl p-4 border border-apple-blue/20">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-apple-blue rounded-full mr-3"></div>
                    <span className="font-semibold apple-text-display text-black">Next Open House</span>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold apple-text-display text-black">
                      Saturday, January 20th
                    </p>
                    <p className="apple-text-body text-apple-gray-600 text-sm">
                      2:00 PM - 4:00 PM
                    </p>
                  </div>
                </div>

                <div className="bg-apple-gray-50 rounded-2xl p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-apple-gray-400 rounded-full mr-3"></div>
                    <span className="font-semibold apple-text-display text-black">Upcoming</span>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold apple-text-display text-black">
                      Sunday, January 21st
                    </p>
                    <p className="apple-text-body text-apple-gray-600 text-sm">
                      1:00 PM - 3:00 PM
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl apple-shadow-lg p-6">
              <button
                onClick={() => setIsContactExpanded(!isContactExpanded)}
                className="w-full flex items-center justify-between text-left"
              >
                <h2 className="text-xl font-semibold apple-text-display text-black">
                  Get in touch
                </h2>
                {isContactExpanded ? (
                  <ChevronUp className="h-5 w-5 text-apple-gray-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-apple-gray-600" />
                )}
              </button>

              {isContactExpanded && (
                <div className="mt-4">
                  <p className="apple-text-body text-apple-gray-600 mb-6">
                    Schedule a viewing or ask questions about this property
                  </p>

                  <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <Label
                    htmlFor="name"
                    className="apple-text-body font-medium text-black"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    className="mt-2 rounded-2xl border-apple-gray-300 focus:border-apple-blue focus:ring-apple-blue h-12 px-4 apple-text-body"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="apple-text-body font-medium text-black"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    className="mt-2 rounded-2xl border-apple-gray-300 focus:border-apple-blue focus:ring-apple-blue h-12 px-4 apple-text-body"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="apple-text-body font-medium text-black"
                  >
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={contactForm.phone}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, phone: e.target.value })
                    }
                    className="mt-2 rounded-2xl border-apple-gray-300 focus:border-apple-blue focus:ring-apple-blue h-12 px-4 apple-text-body"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="apple-text-body font-medium text-black"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="I'm interested in this property..."
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      })
                    }
                    className="mt-2 rounded-2xl border-apple-gray-300 focus:border-apple-blue focus:ring-apple-blue p-4 apple-text-body resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 rounded-2xl bg-apple-blue hover:bg-apple-blue-dark text-white font-medium apple-text-body"
                >
                  Send Message
                </Button>
                  </form>
                </div>
              )}
            </div>

            {/* Agent Card */}
            <div className="bg-white rounded-3xl apple-shadow-lg p-8">
              <h2 className="text-xl font-semibold apple-text-display text-black mb-6">
                Your agent
              </h2>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-apple-gray-100 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">👩‍💼</span>
                </div>
                <div>
                  <h3 className="font-semibold apple-text-display text-black">
                    Sarah Johnson
                  </h3>
                  <p className="apple-text-body text-apple-gray-600">
                    Real Estate Specialist
                  </p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center apple-text-body text-apple-gray-700">
                  <Phone className="h-4 w-4 mr-3 text-apple-gray-500" />
                  (555) 123-4567
                </div>
                <div className="flex items-center apple-text-body text-apple-gray-700">
                  <Mail className="h-4 w-4 mr-3 text-apple-gray-500" />
                  sarah@estate.com
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full h-12 rounded-2xl border-apple-gray-300 hover:bg-apple-gray-50 apple-text-body font-medium"
              >
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
