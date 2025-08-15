import React from 'react'
import { Sparkles } from 'lucide-react'

export default function ProductMockup() {
  return (
    <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      {/* Main Container with 3D effect */}
      <div className="relative transform-gpu hover:rotate-y-6 transition-transform duration-700">
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-2xl animate-pulse-glow" />
        
        {/* Main Product Card */}
        <div className="relative glass-effect rounded-3xl p-6 md:p-8 overflow-hidden">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-5 pattern-grid text-primary" />
          
          {/* Product Bottle */}
          <div className="relative mx-auto w-48 md:w-56 h-64 md:h-72">
            {/* Bottle Shadow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-6 md:h-8 bg-black/20 rounded-full blur-xl" />
            
            {/* Bottle Body */}
            <div className="relative w-full h-full">
              {/* Main Bottle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent rounded-t-3xl rounded-b-xl shadow-2xl overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" 
                     style={{ backgroundSize: '200% 100%' }} />
                
                {/* Label Area */}
                <div className="absolute inset-x-3 md:inset-x-4 top-1/3 bottom-1/4 bg-white/95 backdrop-blur rounded-xl p-3 md:p-4 shadow-inner">
                  <div className="h-full flex flex-col items-center justify-center space-y-1 md:space-y-2">
                    <Sparkles className="w-6 md:w-8 h-6 md:h-8 text-primary" />
                    <h3 className="font-bold text-lg md:text-xl text-primary">CrownCare</h3>
                    <p className="text-[10px] md:text-xs text-muted-foreground text-center">Moisture Lock Treatment</p>
                    <div className="flex gap-1 mt-2">
                      <div className="w-1 h-1 rounded-full bg-primary/60" />
                      <div className="w-1 h-1 rounded-full bg-primary/60" />
                      <div className="w-1 h-1 rounded-full bg-primary/60" />
                    </div>
                  </div>
                </div>
                
                {/* Top Cap */}
                <div className="absolute top-0 inset-x-0 h-12">
                  <div className="absolute inset-x-6 top-2 h-8 bg-gradient-to-b from-accent to-primary rounded-t-2xl shadow-lg">
                    <div className="absolute inset-x-0 top-0 h-2 bg-white/20 rounded-t-2xl" />
                  </div>
                  {/* Pump */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-8 h-4 bg-gradient-to-b from-primary to-accent rounded-t-full shadow-sm" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full blur-xl animate-float" />
          <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
          
          {/* Text Elements */}
          <div className="mt-6 text-center space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Professional Grade</p>
            <p className="text-xs text-muted-foreground/70">Net Wt. 8 fl oz / 237ml</p>
          </div>
        </div>
        
        {/* Floating Badges - Hidden on mobile, repositioned on tablet/desktop */}
        <div className="hidden sm:block absolute -top-2 sm:-top-4 -right-2 sm:-right-4 glass-effect rounded-full p-2 sm:p-3 shadow-xl animate-scale-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-1">
            <span className="text-xl sm:text-2xl">⭐</span>
            <span className="text-xs sm:text-sm font-bold">4.9</span>
          </div>
        </div>
        
        <div className="absolute -bottom-2 sm:-bottom-4 left-2 sm:-left-4 glass-effect rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-xl animate-scale-in" style={{ animationDelay: '0.7s' }}>
          <p className="text-[10px] sm:text-xs font-semibold flex items-center gap-1">
            <span className="text-green-600">✓</span> 30-Day Guarantee
          </p>
        </div>
        
        <div className="hidden md:block absolute top-1/2 -right-6 glass-effect rounded-full px-3 py-1 shadow-xl animate-scale-in" style={{ animationDelay: '0.9s' }}>
          <p className="text-xs font-semibold">Vegan</p>
        </div>
      </div>
    </div>
  )
}
