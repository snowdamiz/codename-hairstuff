import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Droplets, Leaf, Zap, Heart, Clock, Shield } from 'lucide-react'

const features = [
  {
    icon: Droplets,
    title: "Moisture Retention",
    description: "Locks in moisture for up to 72 hours, combating the natural dryness of textured hair."
  },
  {
    icon: Leaf,
    title: "Edge Control",
    description: "Gentle formula that nourishes edges and hairline, promoting regrowth without breakage."
  },
  {
    icon: Zap,
    title: "Curl Definition",
    description: "Enhances your natural curl pattern from 4A to 4C, reducing frizz and increasing definition."
  },
  {
    icon: Heart,
    title: "Breakage Prevention",
    description: "Strengthens hair shaft to reduce breakage by up to 90%, perfect for protective styles."
  },
  {
    icon: Clock,
    title: "Wash Day Saver",
    description: "Cuts detangling time in half and extends time between washes to 2+ weeks."
  },
  {
    icon: Shield,
    title: "Heat Protection",
    description: "Protects hair up to 450°F for safe silk pressing and heat styling when needed."
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-secondary/10" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] pattern-grid text-primary" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 px-4 py-1 bg-primary/10 border-primary/20">Our Benefits</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
            Why Choose <span className="gradient-text">CrownCare</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specifically designed for the unique needs of textured hair. Join the movement of queens embracing their natural beauty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Card className="relative glass-effect border-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-[0.02] pattern-dots text-primary" />
                
                <CardContent className="relative p-6 space-y-4">
                  {/* Icon with enhanced styling */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-lg" />
                    <div className="relative w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center border border-primary/20">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
