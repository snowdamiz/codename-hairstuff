"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CrownCare
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('ingredients')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Ingredients
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <Button 
              onClick={() => scrollToSection('cta')}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Get Yours Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-slide-up">
            <div className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-foreground/80 hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-foreground/80 hover:text-primary transition-colors text-left"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('ingredients')}
                className="text-foreground/80 hover:text-primary transition-colors text-left"
              >
                Ingredients
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-foreground/80 hover:text-primary transition-colors text-left"
              >
                Reviews
              </button>
              <Button 
                onClick={() => scrollToSection('cta')}
                className="bg-primary hover:bg-primary/90 text-white w-full"
              >
                Get Yours Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
