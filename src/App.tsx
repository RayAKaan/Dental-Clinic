import { useState } from 'react'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Award,
  Users,
  Star,
  Activity,
  Heart,
  Shield,
  Sparkles,
  CheckCircle,
  MessageCircle,
  AlertCircle,
  MapPinned
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { ScrollReveal } from './components/ScrollReveal'
import { BeforeAfter } from './components/BeforeAfter'
import { Counter } from './components/Counter'
import { ScrollProgress } from './components/ScrollProgress'
import { WhatsAppButton } from './components/WhatsAppButton'
import { MobileCTA } from './components/MobileCTA'
import { AccordionItem } from './components/ui/accordion'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-16 lg:pb-0">
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
      
      {/* Mobile Sticky CTA */}
      <MobileCTA />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md border-b border-neutral-200 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="text-2xl font-normal text-neutral-900 tracking-tight">White Pearl Dental Studio</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-sm text-neutral-600 hover:text-neutral-900 transition-all duration-200">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm text-neutral-600 hover:text-neutral-900 transition-all duration-200">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm text-neutral-600 hover:text-neutral-900 transition-all duration-200">
                About
              </button>
              <button onClick={() => scrollToSection('doctors')} className="text-sm text-neutral-600 hover:text-neutral-900 transition-all duration-200">
                Doctors
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-sm text-neutral-600 hover:text-neutral-900 transition-all duration-200">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm text-neutral-600 hover:text-neutral-900 transition-all duration-200">
                Contact
              </button>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+918012345678" className="flex items-center text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +91 80 1234 5678
              </a>
              <Button onClick={() => scrollToSection('appointment')}>
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-neutral-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white">
            <nav className="px-6 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block text-sm text-neutral-600 hover:text-neutral-900">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-sm text-neutral-600 hover:text-neutral-900">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-sm text-neutral-600 hover:text-neutral-900">
                About
              </button>
              <button onClick={() => scrollToSection('doctors')} className="block text-sm text-neutral-600 hover:text-neutral-900">
                Doctors
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block text-sm text-neutral-600 hover:text-neutral-900">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-sm text-neutral-600 hover:text-neutral-900">
                Contact
              </button>
              <div className="pt-4 space-y-3">
                <a href="tel:+918012345678" className="flex items-center text-sm text-neutral-600">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 80 1234 5678
                </a>
                <Button className="w-full" onClick={() => scrollToSection('appointment')}>
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-light text-neutral-900 leading-[1.1] mb-8">
                Modern Dentistry,<br />Designed Around You.
              </h1>
              <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed mb-10 max-w-xl">
                Experience patient-first dental care with advanced technology, 
                compassionate treatment, and a commitment to your comfort. 
                Your smile deserves the best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/918012345678?text=Hello! I would like to book an appointment at White Pearl Dental Studio." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5A]">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp Us
                  </Button>
                </a>
                <a href="tel:+918012345678">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now
                  </Button>
                </a>
              </div>
              
              {/* Emergency Badge */}
              <div className="mt-6 inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <div className="text-sm">
                  <span className="font-medium text-red-900">Dental Emergency?</span>
                  <span className="text-red-700 ml-1">Same Day Appointments Available</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <div className="overflow-hidden bg-neutral-100">
                <img
                  src="https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Modern dental clinic"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 lg:py-28 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <Award className="w-7 h-7 text-neutral-900" />
              </div>
              <div className="text-4xl lg:text-5xl font-normal text-neutral-900 mb-3">
                <Counter end={15} suffix="+" />
              </div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <Users className="w-7 h-7 text-neutral-900" />
              </div>
              <div className="text-4xl lg:text-5xl font-normal text-neutral-900 mb-3">
                <Counter end={10000} suffix="+" />
              </div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <Star className="w-7 h-7 text-neutral-900" />
              </div>
              <div className="text-4xl lg:text-5xl font-normal text-neutral-900 mb-3">
                <Counter end={4.9} decimals={1} />★
              </div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">Google Rating</div>
              <div className="text-xs text-neutral-500 mt-1">850+ Reviews</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <CheckCircle className="w-7 h-7 text-neutral-900" />
              </div>
              <div className="text-4xl lg:text-5xl font-normal text-neutral-900 mb-3">
                <Counter end={98} suffix="%" />
              </div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">Patient Satisfaction</div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-16 lg:mb-20">
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-[1.1] mb-6">
                Comprehensive Dental Services
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                From routine care to advanced procedures, we offer a complete range 
                of dental services tailored to your needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Dental Implants',
                description: 'Permanent tooth replacement solutions with natural aesthetics and function.'
              },
              {
                icon: Heart,
                title: 'Root Canal Treatment',
                description: 'Painless endodontic care to save your natural teeth with advanced technology.'
              },
              {
                icon: Star,
                title: 'Teeth Whitening',
                description: 'Professional whitening treatments for a brighter, more confident smile.'
              },
              {
                icon: CheckCircle,
                title: 'Invisalign & Aligners',
                description: 'Discreet orthodontic solutions to straighten your teeth comfortably.'
              },
              {
                icon: Sparkles,
                title: 'Smile Design',
                description: 'Comprehensive cosmetic dentistry to transform your smile completely.'
              },
              {
                icon: Shield,
                title: 'General Dentistry',
                description: 'Preventive care, cleanings, and routine checkups for optimal oral health.'
              }
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border border-neutral-200 hover:shadow-md transition-all h-full">
                  <CardHeader className="pb-3">
                    <service.icon className="w-7 h-7 text-neutral-900 mb-4" />
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-neutral-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-16 lg:mb-20">
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-[1.1] mb-6">
                Transparent Pricing
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Quality dental care at honest prices. No hidden costs, no surprises.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { service: 'Teeth Whitening', price: '4,999', duration: '1 Session' },
              { service: 'Dental Implants', price: '24,999', duration: 'Per Tooth' },
              { service: 'Root Canal Treatment', price: '3,499', duration: 'Single Sitting' },
              { service: 'Invisalign Aligners', price: '89,999', duration: 'Full Treatment' },
              { service: 'Dental Cleaning', price: '999', duration: 'Per Session' },
              { service: 'Smile Design', price: '1,24,999', duration: 'Complete Makeover' },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border border-neutral-200 hover:shadow-md transition-all h-full bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl mb-2">{item.service}</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-neutral-600">Starting from</span>
                      <span className="text-3xl font-normal text-neutral-900">₹{item.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-neutral-600">
                      {item.duration}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="mt-12 text-center">
              <p className="text-neutral-600 mb-6">
                All prices are indicative. Final cost depends on individual case assessment.
              </p>
              <a href="https://wa.me/918012345678?text=I would like to know more about your pricing" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Get Detailed Quote
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Transformations Section */}
      <section className="py-24 lg:py-32 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-16 lg:mb-20">
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-[1.1] mb-6">
                Real Transformations
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                See the difference advanced dental care makes. Slide to compare results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <ScrollReveal delay={100}>
              <div className="h-[400px] lg:h-[500px]">
                <BeforeAfter
                  beforeImage="https://images.pexels.com/photos/6627575/pexels-photo-6627575.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  afterImage="https://images.pexels.com/photos/6627574/pexels-photo-6627574.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  beforeLabel="Before"
                  afterLabel="After"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-medium text-neutral-900 mb-2">Teeth Whitening</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Professional whitening treatment for a brighter, more confident smile.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="h-[400px] lg:h-[500px]">
                <BeforeAfter
                  beforeImage="https://images.pexels.com/photos/6627570/pexels-photo-6627570.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  afterImage="https://images.pexels.com/photos/6627571/pexels-photo-6627571.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  beforeLabel="Before"
                  afterLabel="After"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-medium text-neutral-900 mb-2">Smile Design</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Complete cosmetic transformation with veneers and aligners.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="overflow-hidden bg-neutral-100">
                <img
                  src="https://images.pexels.com/photos/5355863/pexels-photo-5355863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="DentaCare clinic interior"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-[1.1] mb-6">
                  About White Pearl Dental Studio
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  At White Pearl Dental Studio, we believe exceptional dental care begins with understanding 
                  each patient's unique needs. Our premium clinic in the heart of 
                  Bangalore combines cutting-edge technology with compassionate, personalized care.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  With over 15 years of excellence, our team of experienced dentists is 
                  dedicated to providing world-class treatment in a comfortable, luxurious 
                  environment. Your oral health and comfort are our top priorities.
                </p>
                <Button size="lg" onClick={() => scrollToSection('appointment')}>
                  Schedule a Visit
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-16 lg:mb-20">
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-[1.1] mb-6">
                Why Choose White Pearl
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                We go beyond standard dental care to deliver an exceptional patient experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Activity,
                title: 'Advanced Equipment',
                description: 'Latest dental technology for precise, efficient treatments.'
              },
              {
                icon: Award,
                title: 'Experienced Dentists',
                description: 'Highly qualified professionals with years of expertise.'
              },
              {
                icon: CheckCircle,
                title: 'Transparent Pricing',
                description: 'Clear cost estimates with no hidden charges.'
              },
              {
                icon: Heart,
                title: 'Comfortable Environment',
                description: 'Relaxing clinic designed for your peace of mind.'
              },
              {
                icon: Phone,
                title: 'Emergency Support',
                description: '24/7 emergency dental care when you need it most.'
              },
              {
                icon: Shield,
                title: 'Hygiene Standards',
                description: 'Strict sterilization protocols for your safety.'
              }
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border border-neutral-200 hover:shadow-md transition-all h-full">
                  <CardHeader className="pb-3">
                    <feature.icon className="w-7 h-7 text-neutral-900 mb-4" />
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-neutral-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Dentists Section */}
      <section id="doctors" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-16 lg:mb-20">
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-[1.1] mb-6">
                Meet Our Dentists
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Our team of highly qualified dental professionals is committed to your care.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: 'Dr. Rajesh Kumar',
                specialty: 'Chief Dental Surgeon',
                credentials: 'BDS, MDS (Prosthodontics)',
                experience: '18+ Years Experience',
                achievements: '8000+ Smiles Restored',
                image: 'https://images.pexels.com/photos/37458046/pexels-photo-37458046.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800'
              },
              {
                name: 'Dr. Priya Sharma',
                specialty: 'Cosmetic Dentist & Orthodontist',
                credentials: 'BDS, MDS (Orthodontics)',
                experience: '12+ Years Experience',
                achievements: '5000+ Smile Makeovers',
                image: 'https://images.pexels.com/photos/19879741/pexels-photo-19879741.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800'
              },
              {
                name: 'Dr. Arjun Patel',
                specialty: 'Endodontist & Implantologist',
                credentials: 'BDS, MDS (Endodontics)',
                experience: '10+ Years Experience',
                achievements: '3500+ Root Canals',
                image: 'https://images.pexels.com/photos/37458054/pexels-photo-37458054.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800'
              }
            ].map((doctor, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="border border-neutral-200 overflow-hidden hover:shadow-md transition-all h-full">
                  <div className="bg-neutral-100">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-96 object-cover object-top"
                    />
                  </div>
                  <CardHeader className="p-6">
                    <CardTitle className="text-2xl mb-2">{doctor.name}</CardTitle>
                    <CardDescription className="text-base text-neutral-900 font-medium mb-3">
                      {doctor.specialty}
                    </CardDescription>
                    <CardDescription className="text-sm text-neutral-600 mb-2">
                      {doctor.credentials}
                    </CardDescription>
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-neutral-200">
                      <div className="text-sm">
                        <div className="font-medium text-neutral-900">{doctor.experience}</div>
                        <div className="text-neutral-600">{doctor.achievements}</div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-16 lg:mb-20">
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-[1.1] mb-6">
                What Our Patients Say
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Real experiences from the people we've had the privilege to serve.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: 'Anita Desai',
                review: 'The most comfortable dental experience I\'ve ever had. Dr. Kumar and his team are exceptional. The clinic is immaculate and the technology is truly impressive.',
                rating: 5
              },
              {
                name: 'Vikram Singh',
                review: 'After years of dental anxiety, DentaCare changed everything. The staff is incredibly patient and the treatment was completely painless. Highly recommend!',
                rating: 5
              },
              {
                name: 'Meera Reddy',
                review: 'Professional, transparent, and caring. They explained every step of my implant procedure. The results exceeded my expectations. Thank you DentaCare!',
                rating: 5
              },
              {
                name: 'Arun Krishnan',
                review: 'Outstanding service from start to finish. The clinic environment is calming and modern. Dr. Sharma did an amazing job with my smile makeover.',
                rating: 5
              },
              {
                name: 'Sneha Iyer',
                review: 'Transparency in pricing and excellent quality of work. My root canal was completely painless. The follow-up care has been wonderful too.',
                rating: 5
              },
              {
                name: 'Karthik Nair',
                review: 'Best dental clinic in Bangalore! State-of-the-art facility with genuinely caring doctors. My entire family now comes here for treatment.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border border-neutral-200 hover:shadow-sm transition-all h-full">
                  <CardHeader className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-neutral-900 fill-neutral-900" />
                      ))}
                    </div>
                    <CardDescription className="text-base text-neutral-600 leading-relaxed mb-6">
                      "{testimonial.review}"
                    </CardDescription>
                    <CardTitle className="text-lg font-medium">{testimonial.name}</CardTitle>
                  </CardHeader>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-24 lg:py-32 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-6 py-3 rounded-full mb-6">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-2xl font-normal text-neutral-900">4.9</span>
                <span className="text-neutral-600">Google Rating</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-[1.1] mb-4">
                Featured on Google Reviews
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Based on 850+ verified patient reviews
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                rating: 5,
                text: "Best dental clinic in Bangalore! The team is highly professional and the clinic is equipped with the latest technology. Highly recommended!",
                author: "Arjun Malhotra",
                date: "2 weeks ago"
              },
              {
                rating: 5,
                text: "I had a root canal done here and it was completely painless. Dr. Patel is extremely skilled and patient. The clinic is very clean and modern.",
                author: "Sneha Krishnan",
                date: "1 month ago"
              },
              {
                rating: 5,
                text: "Amazing experience! Got my teeth whitened and the results are fantastic. The staff is very friendly and the process was explained thoroughly.",
                author: "Rahul Verma",
                date: "3 weeks ago"
              }
            ].map((review, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border border-neutral-200 hover:shadow-sm transition-all h-full bg-white">
                  <CardHeader className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <CardDescription className="text-base text-neutral-600 leading-relaxed mb-4">
                      "{review.text}"
                    </CardDescription>
                    <div className="flex items-center gap-3 pt-3 border-t border-neutral-200">
                      <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center text-neutral-700 font-medium">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <CardTitle className="text-sm font-medium">{review.author}</CardTitle>
                        <CardDescription className="text-xs">{review.date}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-12 text-center">
              <a href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-900 underline">
                Read all 850+ reviews on Google →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-[1.1] mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Everything you need to know about our dental treatments
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Card className="border border-neutral-200 bg-white">
              <CardContent className="p-0">
                {[
                  {
                    question: "Is teeth whitening safe?",
                    answer: "Yes, professional teeth whitening at White Pearl Dental Studio is completely safe. We use FDA-approved whitening agents and our experienced dentists ensure the procedure is done correctly without damaging your enamel or gums."
                  },
                  {
                    question: "How long does a root canal take?",
                    answer: "Most root canal treatments can be completed in a single sitting that takes 45-90 minutes. Complex cases may require 2 sessions. We use advanced rotary endodontics for faster, more comfortable treatment."
                  },
                  {
                    question: "Do you accept insurance?",
                    answer: "Yes, we work with most major insurance providers including Star Health, ICICI Lombard, HDFC Ergo, and more. Our team will help you understand your coverage and maximize your benefits."
                  },
                  {
                    question: "How often should I visit a dentist?",
                    answer: "We recommend visiting the dentist every 6 months for regular checkups and professional cleaning. This helps prevent dental problems and catch any issues early when they're easier to treat."
                  },
                  {
                    question: "Is Invisalign painful?",
                    answer: "Invisalign is generally more comfortable than traditional braces. You may feel slight pressure when switching to new aligners, but most patients report minimal discomfort. The aligners are smooth and won't irritate your mouth."
                  },
                  {
                    question: "What is the cost of dental implants?",
                    answer: "Dental implant costs start from ₹24,999 per tooth and vary based on the type of implant, bone condition, and additional procedures needed. We offer flexible payment plans and provide a detailed cost breakdown during consultation."
                  },
                  {
                    question: "Do you provide emergency dental services?",
                    answer: "Yes! We provide same-day emergency appointments for dental pain, broken teeth, infections, and other urgent issues. Call us or WhatsApp immediately and we'll schedule you as soon as possible."
                  },
                  {
                    question: "How long do dental veneers last?",
                    answer: "With proper care, dental veneers can last 10-15 years or even longer. We use high-quality porcelain veneers that are stain-resistant and durable. Regular dental hygiene and avoiding excessive force will extend their lifespan."
                  }
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    title={faq.question}
                    content={faq.answer}
                    isOpen={openFaqIndex === index}
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  />
                ))}
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mt-12 text-center">
              <p className="text-neutral-600 mb-6">Still have questions?</p>
              <a href="https://wa.me/918012345678?text=I have a question about dental treatment" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat with Us
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-16 lg:mb-20">
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-[1.1] mb-6">
                Our Clinic
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                A glimpse into our modern, hygienic, and welcoming environment.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              'https://images.pexels.com/photos/4269277/pexels-photo-4269277.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
              'https://images.pexels.com/photos/6629415/pexels-photo-6629415.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
              'https://images.pexels.com/photos/5355920/pexels-photo-5355920.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
              'https://images.pexels.com/photos/5355858/pexels-photo-5355858.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
              'https://images.pexels.com/photos/6502543/pexels-photo-6502543.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
              'https://images.pexels.com/photos/6627838/pexels-photo-6627838.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
            ].map((image, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="overflow-hidden bg-neutral-100">
                  <img
                    src={image}
                    alt={`Clinic view ${index + 1}`}
                    className="w-full h-72 lg:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location & SEO Section */}
      <section className="py-24 lg:py-32 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-[1.1] mb-6">
                  Best Dental Clinic in Bangalore
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Located in the heart of Bangalore, White Pearl Dental Studio provides advanced dental treatments including dental implants, root canals, teeth whitening, Invisalign aligners, smile design, and preventive dentistry.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Our state-of-the-art dental clinic combines cutting-edge technology with experienced dentists to deliver world-class dental care. We specialize in cosmetic dentistry, restorative treatments, and emergency dental services.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPinned className="w-5 h-5 text-neutral-900 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-neutral-900 mb-1">Convenient Location</div>
                      <div className="text-neutral-600">MG Road, Central Bangalore</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-neutral-900 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-neutral-900 mb-1">Easy Parking</div>
                      <div className="text-neutral-600">Ample parking space available</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-neutral-900 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-neutral-900 mb-1">Metro Accessible</div>
                      <div className="text-neutral-600">5 min walk from MG Road Metro</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="h-full min-h-[400px] bg-neutral-100 border border-neutral-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8509073315937!2d77.60063631482184!3d12.972442990861286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="White Pearl Dental Studio Location"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Awards & Certifications Section */}
      <section className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-normal text-neutral-900 mb-4">
                Accredited & Certified
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'NABH Accredited', subtitle: 'Quality Standards' },
              { icon: Shield, title: 'ISO Certified', subtitle: 'International Standards' },
              { icon: Star, title: 'Top Rated 2024', subtitle: 'Excellence Award' },
              { icon: CheckCircle, title: 'IDA Member', subtitle: 'Indian Dental Association' },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <item.icon className="w-8 h-8 text-neutral-900" />
                  </div>
                  <div className="font-medium text-neutral-900 mb-1">{item.title}</div>
                  <div className="text-sm text-neutral-600">{item.subtitle}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="appointment" className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-6xl font-light text-neutral-900 leading-[1.1] mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed mb-12 max-w-2xl mx-auto">
              Book your appointment instantly via WhatsApp or give us a call. 
              Our friendly team is ready to help you achieve the smile you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href="https://wa.me/918012345678?text=Hello! I would like to book an appointment at White Pearl Dental Studio." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-lg px-8 h-14">
                  <MessageCircle className="mr-2 w-6 h-6" />
                  Book on WhatsApp
                </Button>
              </a>
              <a href="tel:+918012345678">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 h-14">
                  <Phone className="mr-2 w-6 h-6" />
                  Call Now
                </Button>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 text-left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-neutral-900" />
                </div>
                <div>
                  <div className="font-medium text-neutral-900 mb-2">Clinic Hours</div>
                  <div className="text-sm text-neutral-600 leading-relaxed">
                    Mon - Sat: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 2:00 PM
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-neutral-900" />
                </div>
                <div>
                  <div className="font-medium text-neutral-900 mb-2">Location</div>
                  <div className="text-sm text-neutral-600 leading-relaxed">
                    123 MG Road, Central Bangalore<br />
                    Karnataka 560001
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-neutral-900" />
                </div>
                <div>
                  <div className="font-medium text-neutral-900 mb-2">Email</div>
                  <div className="text-sm text-neutral-600 leading-relaxed">
                    <a href="mailto:care@whitepearldental.com" className="hover:text-neutral-900">
                      care@whitepearldental.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-20 lg:py-24 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal mb-4 leading-[1.2]">
            Dental Emergency?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            We're here to help. Our emergency dental services are available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918012345678">
              <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100">
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line
              </Button>
            </a>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" onClick={() => scrollToSection('appointment')}>
              Request Callback
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-normal text-neutral-900 mb-4 tracking-tight">White Pearl Dental Studio</div>
              <p className="text-neutral-600 leading-relaxed">
                Premium dental care in the heart of Bangalore. Your smile is our priority.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <button onClick={() => scrollToSection('services')} className="block text-neutral-600 hover:text-neutral-900">
                  Services
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-neutral-600 hover:text-neutral-900">
                  About Us
                </button>
                <button onClick={() => scrollToSection('doctors')} className="block text-neutral-600 hover:text-neutral-900">
                  Our Doctors
                </button>
                <button onClick={() => scrollToSection('appointment')} className="block text-neutral-600 hover:text-neutral-900">
                  Book Appointment
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 mb-4">Contact</h3>
              <div className="space-y-3 text-neutral-600">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>123 MG Road, Bangalore<br />Karnataka 560001</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                  <a href="tel:+918012345678" className="hover:text-neutral-900">+91 80 1234 5678</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                  <a href="mailto:care@dentacarebangalore.com" className="hover:text-neutral-900">care@dentacarebangalore.com</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:border-neutral-900 hover:bg-neutral-50 transition-colors">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:border-neutral-900 hover:bg-neutral-50 transition-colors">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-10 h-10 border border-neutral-300 flex items-center justify-center hover:border-neutral-900 hover:bg-neutral-50 transition-colors">
                  <span className="text-sm">Li</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-200 text-center text-sm text-neutral-600">
            <p>© 2024 White Pearl Dental Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
