import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Flower2, Droplets, Leaf } from 'lucide-react'

const ingredients = [
  {
    name: "Shea Butter",
    benefit: "Deep moisturization and curl definition for 4C hair",
    icon: Droplets
  },
  {
    name: "Jamaican Black Castor Oil",
    benefit: "Promotes hair growth and strengthens edges",
    icon: Sparkles
  },
  {
    name: "Coconut Oil",
    benefit: "Penetrates hair shaft to reduce protein loss",
    icon: Leaf
  },
  {
    name: "African Black Soap Extract",
    benefit: "Gently cleanses without stripping natural oils",
    icon: Flower2
  }
]

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <Badge className="mb-4">Premium Quality</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Powered by Africa's
                <span className="block text-primary">Ancient Beauty Secrets</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Formulated with time-tested ingredients passed down through generations, specifically chosen for textured hair needs.
              </p>
            </div>

            <div className="space-y-4">
              {ingredients.map((ingredient, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <ingredient.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{ingredient.name}</h3>
                    <p className="text-sm text-muted-foreground">{ingredient.benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">Also includes:</p>
              <div className="flex flex-wrap gap-2">
                {['Mango Butter', 'Jojoba Oil', 'Avocado Oil', 'Tea Tree Oil'].map((item) => (
                  <Badge key={item} variant="outline">{item}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Visual */}
          <div className="relative lg:pl-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-32 h-32 bg-gradient-to-br from-white to-muted rounded-2xl shadow-lg flex items-center justify-center animate-float"
                      style={{ animationDelay: `${i * 0.5}s` }}
                    >
                      <Leaf className="w-12 h-12 text-primary opacity-50" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 left-8 bg-white rounded-full px-4 py-2 shadow-lg">
                <p className="text-xs font-semibold">100% Organic</p>
              </div>
              <div className="absolute -bottom-4 right-8 bg-white rounded-full px-4 py-2 shadow-lg">
                <p className="text-xs font-semibold">No Harsh Chemicals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
