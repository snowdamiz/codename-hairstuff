import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Package, Truck, Shield } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <Badge className="mb-4">Limited Time Offer</Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Ready to Transform
            <span className="block text-primary mt-2">Your Hair?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience the difference. 
            Order now and get 20% off your first purchase!
          </p>

          {/* Pricing */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto animate-scale-in">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl text-muted-foreground line-through">$62.99</span>
                <Badge variant="destructive">20% OFF</Badge>
              </div>
              <div className="text-5xl font-bold text-primary">$49.99</div>
              <p className="text-muted-foreground">One-time purchase • 3-month supply</p>
              
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Get Your CrownCare Now
              </Button>
              
              <p className="text-xs text-muted-foreground">
                No subscription required • Free shipping on all orders
              </p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">30-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">Ships in 24 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">Secure Checkout</span>
            </div>
          </div>

          {/* Urgency message */}
          <div className="bg-muted rounded-lg p-4 max-w-2xl mx-auto animate-slide-up">
            <p className="text-sm">
              <span className="font-semibold text-primary">⏰ Hurry!</span> This special offer ends in 48 hours. 
              Only <span className="font-semibold">87 bottles</span> left in stock!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
