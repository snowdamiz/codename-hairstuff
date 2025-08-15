"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Jasmine Williams",
    rating: 5,
    comment: "Finally, a product that understands 4C hair! My twist-outs last a whole week now, and my edges are thriving. This is a game-changer!",
    date: "2 weeks ago",
    hairType: "4C Natural"
  },
  {
    name: "Keisha Thompson",
    rating: 5,
    comment: "I went natural 3 years ago and struggled with moisture retention. CrownCare changed everything - my hair stays moisturized for days!",
    date: "1 month ago",
    hairType: "4B Transitioning"
  },
  {
    name: "Aaliyah Robinson",
    rating: 5,
    comment: "My braider couldn't believe how healthy my hair looked after using this for just a month. No more breakage at the edges!",
    date: "3 weeks ago",
    hairType: "4A Protective Style"
  },
  {
    name: "Destiny Jackson",
    rating: 5,
    comment: "Wash day went from 4 hours to 2! The slip is incredible, and my curls pop like never before. Worth every penny, sis!",
    date: "1 month ago",
    hairType: "3C/4A Mix"
  },
  {
    name: "Imani Davis",
    rating: 5,
    comment: "Been using relaxers for 20 years and decided to go natural. This product made my transition so much easier. My new growth is soft and manageable!",
    date: "2 months ago",
    hairType: "Transitioning"
  },
  {
    name: "Nia Campbell",
    rating: 5,
    comment: "My daughter's hair is thriving! No more tears during detangling, and her natural hair is growing so fast. Thank you CrownCare!",
    date: "1 week ago",
    hairType: "4B Kids Hair"
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-muted/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 px-4 py-1 bg-primary/10 border-primary/20">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
            Real Stories, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join the CrownCare family of queens celebrating their natural hair journey
          </p>
          
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="text-muted-foreground">(2,345 reviews)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Card className="relative glass-effect border-white/10 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-6 relative">
                  {/* Quote icon with gradient */}
                  <div className="absolute top-4 right-4">
                    <Quote className="w-8 h-8 text-primary/10" />
                  </div>
                  
                  {/* Rating stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500 drop-shadow-sm" />
                    ))}
                  </div>
                  
                  {/* Comment with better typography */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>
                  
                  {/* Footer with enhanced styling */}
                  <div className="flex items-end justify-between pt-4 border-t border-border/50">
                    <div className="space-y-1">
                      <p className="font-bold text-sm bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                      {testimonial.hairType && (
                        <Badge variant="secondary" className="mt-1 text-xs bg-primary/10 border-primary/20">
                          {testimonial.hairType}
                        </Badge>
                      )}
                    </div>
                    {/* Avatar with gradient */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-md opacity-50" />
                      <div className="relative w-10 h-10 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full border-2 border-white/20 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
