"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, Sparkles, Shield, Award } from 'lucide-react'
import ProductMockup from './ProductMockup'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-20 md:pb-0 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-secondary/20" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pattern-dots" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="px-4 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 mr-1.5" />
                For 4A-4C Hair
              </Badge>
              <Badge variant="outline" className="px-4 py-1.5 border-primary/30 backdrop-blur-sm">
                <span className="text-primary">✊🏾</span> Black-Owned Brand
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-shadow-lg">
              <span className="inline-block animate-fade-in">Embrace</span>{' '}
              <span className="inline-block animate-fade-in" style={{ animationDelay: '0.1s' }}>Your</span>
              <span className="block mt-2">
                <span className="gradient-text text-6xl md:text-7xl lg:text-8xl font-black">
                  Natural Crown
                </span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Specially formulated for <span className="font-semibold text-foreground">textured, coily, and kinky hair</span>. 
              Our moisture-rich treatment deeply nourishes 4A-4C hair types, defining curls and 
              <span className="font-semibold text-foreground">eliminating breakage</span>.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">No Harsh Chemicals</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Protective Styling Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Salon Approved</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 animate-scale-in"
              >
                Shop Now - $49.99
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Learn More
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">2,345+</span> happy customers
              </p>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative mt-12 lg:mt-0 lg:pl-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
