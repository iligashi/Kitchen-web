"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import kitchen1 from "../img/kitchen1.jpg"
import kitchen2 from "../img/kitchen2.jpg"
import kitchen3 from "../img/kitchen3.jpg"
import kitchen4 from "../img/kitchen4.jpg"
import kitchen5 from "../img/kitchen5.jpg"
import kitchen6 from "../img/kitchen6.jpg"
import kitchenmain from "../img/kitchenmain.jpg"
import kitchenmain1 from "../img/kitchenmain1.jpg"






import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Users,
  Award,
  Hammer,
  Home,
  Phone,
  Mail,
  MapPin,
  Zap,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"

export default function FuturisticKitchenLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [beforeAfterPosition, setBeforeAfterPosition] = useState(50)
  const [selectedMaterial, setSelectedMaterial] = useState(0)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState({})
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const collections = [
    {
      name: "Neural Minimalist",
      description: "AI-optimized design with quantum-smooth surfaces and holographic interfaces",
      image: kitchen1,
    },
    {
      name: "Cyber Elegance",
      description: "Bio-luminescent accents with adaptive smart surfaces and neural connectivity",
      image: kitchen2,
    },
    {
      name: "Quantum Luxe",
      description: "Metamaterial construction with gravity-defying storage solutions",
      image: kitchen3,
    },
  ]

  const materials = [
    {
      name: "Nano Carbon",
      description: "Self-healing surface with molecular-level precision",
      texture: kitchen4,
      benefits: "Indestructible, adaptive, self-maintaining",
    },
    {
      name: "Liquid Metal",
      description: "Shape-shifting surface with thermal regulation",
      texture: kitchen5,
      benefits: "Morphing design, temperature control",
    },
    {
      name: "Photonic Glass",
      description: "Light-conducting transparent aluminum composite",
      texture: kitchen6,
      benefits: "Luminescent, ultra-strong, energy efficient",
    },
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Quantum",
      location: "Neo Tokyo, 2024",
      rating: 5,
      text: "The neural interface integration exceeded all expectations. My kitchen now anticipates my needs.",
      image: kitchenmain,
    },
    {
      name: "Marcus Cybernetic",
      location: "Digital District, NY",
      rating: 5,
      text: "Revolutionary design that adapts to my lifestyle. The holographic displays are incredible.",
      image: kitchenmain1,
    },
    {
      name: "Luna Nexus",
      location: "Cloud City, CA",
      rating: 5,
      text: "Pure artistry meets quantum technology. This isn't just a kitchen, it's the future.",
      image: kitchenmain,
    },
  ]

  const processSteps = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Neural Scan",
      description: "AI-powered analysis of your space and lifestyle patterns",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Quantum Design",
      description: "Holographic 3D modeling with real-time material simulation",
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Molecular Assembly",
      description: "Precision manufacturing using nano-fabrication technology",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Reality Integration",
      description: "Seamless installation with neural network calibration",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Cursor Glow Effect */}
      <div
        className="fixed w-96 h-96 pointer-events-none z-10 mix-blend-screen"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          transition: "all 0.1s ease-out",
        }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"
            style={{
              backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
              transform: `translateX(${scrollY * 0.5}px)`,
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-white/20 animate-spin"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                animationDuration: `${10 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>

        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-thin tracking-wider mb-4 relative">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-pulse">
                NEXUS
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-ping" />
            </h1>
            <div className="relative">
              <p className="text-2xl md:text-3xl font-extralight tracking-widest opacity-80 glitch-text">
                QUANTUM KITCHEN EVOLUTION
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent h-px animate-pulse" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up">
            <Badge
              variant="outline"
              className="bg-black/50 backdrop-blur-sm text-white border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              <Users className="w-4 h-4 mr-2" />
              <span className="font-mono">1000+ NEURAL LINKS</span>
            </Badge>
            <Badge
              variant="outline"
              className="bg-black/50 backdrop-blur-sm text-white border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              <Award className="w-4 h-4 mr-2" />
              <span className="font-mono">QUANTUM CERTIFIED</span>
            </Badge>
          </div>

          <Button
            size="lg"
            className="group bg-white text-black hover:bg-gray-200 px-12 py-6 text-xl font-light tracking-wider transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-white/20 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              ENTER THE FUTURE
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Button>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent animate-pulse" />
          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-2 animate-bounce" />
        </div>
      </section>

      {/* Collections Showcase */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-thin text-white mb-6 tracking-wider">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                NEURAL COLLECTIONS
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide">
              Each collection represents a quantum leap in kitchen evolution, designed by AI and crafted by precision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {collections.map((collection, index) => (
              <Card
                key={index}
                className="group cursor-pointer border-0 bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-700 hover:-translate-y-4 hover:scale-105 relative overflow-hidden"
              >
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] bg-black rounded-lg" />

                <div className="relative z-10">
                  <div className="relative overflow-hidden">
                    <Image
                      src={collection.image || kitchenmain}
                      alt={collection.name}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <Button
                      variant="outline"
                      className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      EXPLORE NEURAL DESIGN
                    </Button>
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-3xl font-light text-white mb-4 tracking-wide">{collection.name}</h3>
                    <p className="text-gray-300 leading-relaxed font-light">{collection.description}</p>
                    <div className="mt-6 flex items-center text-gray-400">
                      <div className="w-8 h-px bg-gradient-to-r from-white to-transparent mr-4" />
                      <span className="font-mono text-sm tracking-wider">QUANTUM SERIES</span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Customization */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-black" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-thin text-white mb-6 tracking-wider">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                QUANTUM MATERIALS
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide">
              Experience materials that exist at the intersection of science and imagination
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {materials.map((material, index) => (
              <div
                key={index}
                className={`relative p-8 cursor-pointer transition-all duration-700 group ${
                  selectedMaterial === index
                    ? "bg-white/10 backdrop-blur-sm scale-105 shadow-2xl shadow-white/10"
                    : "bg-black/20 hover:bg-white/5 hover:scale-102"
                }`}
                onClick={() => setSelectedMaterial(index)}
              >
                {/* Animated Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] bg-black/80 backdrop-blur-sm" />

                <div className="relative z-10">
                  <div className="relative mb-6 overflow-hidden group">
                    <Image
                      src={material.texture || "/placeholder.svg"}
                      alt={material.name}
                      width={100}
                      height={100}
                      className="w-full h-40 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <h3 className="text-2xl font-light text-white mb-3 tracking-wide">{material.name}</h3>
                  <p className="text-gray-300 mb-4 font-light leading-relaxed">{material.description}</p>

                  <Badge
                    variant="outline"
                    className="bg-white/5 text-white border-white/20 hover:bg-white/10 transition-all duration-300 font-mono text-xs tracking-wider"
                  >
                    {material.benefits}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-thin text-white mb-6 tracking-wider">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                REALITY TRANSFORMATION
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-300 font-light tracking-wide">
              Witness the quantum leap from ordinary to extraordinary
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden bg-black/40 backdrop-blur-sm p-2">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse" />
              <div className="absolute inset-[1px] bg-black" />

              <div className="relative h-96 overflow-hidden">
                <Image
                  src= {kitchenmain}
                  alt="Before"
                  width={800}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - beforeAfterPosition}% 0 0)` }}
                >
                  <Image
                    src={kitchenmain1}
                    alt="After"
                    width={800}
                    height={400}
                    className="w-full h-full object-cover brightness-110"
                  />
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={beforeAfterPosition}
                  onChange={(e) => setBeforeAfterPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize"
                />

                <div
                  className="absolute top-0 bottom-0 w-px bg-white shadow-2xl shadow-white/50"
                  style={{ left: `${beforeAfterPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl shadow-white/50 flex items-center justify-center">
                    <div className="w-6 h-6 bg-black rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-thin text-white mb-6 tracking-wider">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                NEURAL FEEDBACK
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
          </div>

          <div className="relative">
            <Card className="bg-black/40 backdrop-blur-sm border-0 relative overflow-hidden">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse" />
              <div className="absolute inset-[1px] bg-black/80" />

              <CardContent className="p-12 md:p-16 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="relative">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      width={120}
                      height={120}
                      className="w-24 h-24 rounded-full object-cover border-2 border-white/20"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent animate-spin" />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-white text-white mr-1" />
                      ))}
                    </div>
                    <p className="text-2xl text-white mb-6 font-light leading-relaxed italic">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div>
                      <p className="font-light text-white text-xl mb-1">{testimonials[currentTestimonial].name}</p>
                      <p className="text-gray-400 font-mono text-sm tracking-wider">
                        {testimonials[currentTestimonial].location}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-12 gap-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-thin text-white mb-6 tracking-wider">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                QUANTUM PROCESS
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide">
              From neural conception to reality manifestation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group relative">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 relative overflow-hidden">
                    {step.icon}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin" />
                </div>

                <h3 className="text-2xl font-light text-white mb-4 tracking-wide">{step.title}</h3>
                <p className="text-gray-300 font-light leading-relaxed">{step.description}</p>

                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-12 h-px bg-gradient-to-r from-white/40 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-black" />

        <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-6xl md:text-7xl font-thin text-white mb-8 tracking-wider">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              ENTER THE QUANTUM REALM
            </span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-12" />
          <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Begin your transformation into the future of kitchen design. Neural consultation awaits.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="group bg-white text-black hover:bg-gray-200 px-16 py-8 text-2xl font-light tracking-widest transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-white/20 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="mr-4 w-6 h-6 group-hover:animate-pulse" />
                  INITIATE NEURAL LINK
                  <Sparkles className="ml-4 w-6 h-6 group-hover:animate-spin" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-black/90 backdrop-blur-sm border border-white/20 text-white">
              <DialogHeader>
                <DialogTitle className="text-3xl font-light text-white tracking-wide">Neural Interface</DialogTitle>
              </DialogHeader>
              {!isFormSubmitted ? (
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setIsFormSubmitted(true)
                  }}
                >
                  <Input
                    placeholder="Neural ID"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-mono"
                  />
                  <Input
                    type="email"
                    placeholder="Quantum Address"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-mono"
                  />
                  <Input
                    type="tel"
                    placeholder="Neural Frequency"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-mono"
                  />
                  <Textarea
                    placeholder="Describe your quantum kitchen vision..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-mono"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-gray-200 font-mono tracking-wider"
                  >
                    ESTABLISH CONNECTION
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-white mx-auto mb-6 animate-pulse" />
                  <h3 className="text-2xl font-light text-white mb-4 tracking-wide">Neural Link Established</h3>
                  <p className="text-gray-300 font-mono">Quantum consultation will be initiated within 24 hours</p>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-white/20 p-4 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:block">
            <p className="font-light text-white tracking-wide">Ready to transcend reality?</p>
            <p className="text-sm text-gray-400 font-mono">Neural consultation • Quantum guarantee</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white text-black hover:bg-gray-200 font-mono tracking-wider animate-pulse">
                <Zap className="w-4 h-4 mr-2" />
                NEURAL LINK
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-black/90 backdrop-blur-sm border border-white/20 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-light text-white tracking-wide">Neural Interface</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <Input
                  placeholder="Neural ID"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-mono"
                />
                <Input
                  type="email"
                  placeholder="Quantum Address"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-mono"
                />
                <Input
                  type="tel"
                  placeholder="Neural Frequency"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-mono"
                />
                <Textarea
                  placeholder="Quantum vision..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-mono"
                />
                <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 font-mono tracking-wider">
                  ESTABLISH CONNECTION
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-20 mb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-3xl font-thin mb-6 tracking-wider">NEXUS</h3>
              <p className="text-gray-400 mb-6 font-light">Quantum kitchen evolution since 2024</p>
              <div className="flex gap-4">
                <Badge variant="outline" className="bg-white/5 text-white border-white/20 font-mono">
                  <Award className="w-4 h-4 mr-2" />
                  QUANTUM CERTIFIED
                </Badge>
              </div>
            </div>
            <div>
              <h4 className="font-light mb-6 tracking-wide text-lg">NEURAL SERVICES</h4>
              <ul className="space-y-3 text-gray-400 font-mono text-sm">
                <li>Quantum Cabinets</li>
                <li>Neural Islands</li>
                <li>Photonic Countertops</li>
                <li>Levitating Stools</li>
                <li>Smart Accessories</li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-6 tracking-wide text-lg">QUANTUM CORP</h4>
              <ul className="space-y-3 text-gray-400 font-mono text-sm">
                <li>Neural Network</li>
                <li>Quantum Process</li>
                <li>Reality Lab</li>
                <li>Future Careers</li>
                <li>Neural Reviews</li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-6 tracking-wide text-lg">NEURAL CONTACT</h4>
              <div className="space-y-4 text-gray-400 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span>+1.QUANTUM.LINK</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span>neural@nexuskitchens.quantum</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  <span>Neo District, Quantum City</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-12 text-center text-gray-400 font-mono text-sm">
            <p>&copy; 2024 NEXUS QUANTUM KITCHENS. ALL NEURAL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
