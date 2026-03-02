import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, MessageSquare, Zap, Shield, ChevronRight } from 'lucide-react'

function Landing() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-kimi-bg-primary">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-kimi-bg-primary/80 backdrop-blur-md border-b border-kimi-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-kimi rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-kimi-text-primary tracking-tight">Kimi</span>
            </Link>

            {/* Nav Links - Center */}
            <div className="hidden md:flex items-center gap-1">
              {['Products', 'Solutions', 'Pricing', 'Docs'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="btn-ghost text-sm"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <Link to="/login" className="btn-ghost text-sm">
                Log in
              </Link>
              <Link to="/chat" className="btn-primary text-sm py-2">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kimi-bg-secondary border border-kimi-border mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-kimi-text-secondary">Kimi K2.5 is now available</span>
            <ChevronRight className="w-4 h-4 text-kimi-text-muted" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-kimi-text-primary mb-6 tracking-tight">
            Meet your new
            <br />
            <span className="text-gradient">AI assistant</span>
          </h1>
          
          <p className="text-xl text-kimi-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the future of AI conversation. 
            Kimi helps you write, code, analyze, and create with unprecedented accuracy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/chat" className="btn-primary text-lg py-4 px-8 inline-flex items-center justify-center gap-2">
              Start chatting free
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a href="#features" className="btn-secondary text-lg py-4 px-8">
              Learn more
            </a>
          </div>

          {/* Email Input */}
          <div className="max-w-md mx-auto mb-16">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field w-full pr-32 py-4"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 btn-primary px-5">
                Get Started
              </button>
            </div>
          </div>

          {/* Preview Image / Demo */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-kimi rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative bg-kimi-bg-secondary border border-kimi-border rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-kimi-bg-tertiary flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">Y</span>
                  </div>
                  <div className="bg-kimi-bg-tertiary rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-md">
                    <p className="text-kimi-text-primary">Explain quantum computing in simple terms</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-kimi flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">K</span>
                  </div>
                  <div className="bg-kimi-bg-tertiary border border-kimi-border rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-2xl">
                    <p className="text-kimi-text-primary">Quantum computing is like having a magical coin that can be heads and tails at the same time until you look at it... </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-kimi-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-kimi-text-primary mb-4">Why choose Kimi?</h2>
            <p className="text-kimi-text-secondary text-lg max-w-2xl mx-auto">
              Built for performance, designed for humans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: MessageSquare, 
                title: 'Natural Conversations', 
                desc: 'Chat naturally about any topic. Kimi understands context and nuance like never before.' 
              },
              { 
                icon: Zap, 
                title: 'Lightning Fast', 
                desc: 'Get answers in milliseconds. Our optimized infrastructure ensures minimal latency.' 
              },
              { 
                icon: Shield, 
                title: 'Privacy First', 
                desc: 'Your data stays yours. End-to-end encryption and strict privacy controls.' 
              },
            ].map((feature, i) => (
              <div key={i} className="card card-hover">
                <div className="w-12 h-12 rounded-xl bg-kimi-bg-tertiary flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-kimi-accent-blue" />
                </div>
                <h3 className="text-xl font-semibold text-kimi-text-primary mb-3">{feature.title}</h3>
                <p className="text-kimi-text-secondary leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-kimi-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-kimi rounded-md flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-kimi-text-primary font-medium">Kimi Clone</span>
            </div>
            
            <p className="text-kimi-text-muted text-sm">
              © 2026 Kimi Clone. Created for นายท่าน ❤️‍🔥
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
