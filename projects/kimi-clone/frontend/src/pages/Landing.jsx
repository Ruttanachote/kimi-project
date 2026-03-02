import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, MessageSquare, Zap, Shield } from 'lucide-react'

function Landing() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-kimi-darker">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-kimi-darker/80 backdrop-blur-md border-b border-kimi-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Kimi Clone</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login" className="btn-secondary">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            ยินดีต้อนรับสู่
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Kimi Clone
            </span>
          </h1>
          
          <p className="text-xl text-kimi-text-muted mb-8 max-w-2xl mx-auto">
            AI assistant ที่พร้อมช่วยเหลือคุณในทุกงาน 
            ตั้งแต่การเขียนโค้ด วิเคราะห์ข้อมูล ไปจนถึงการสร้างสรรค์เนื้อหา
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/chat" className="btn-primary text-lg py-3 px-8">
              เริ่มใช้งานฟรี
            </Link>
          </div>

          {/* Input */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field w-full pr-32"
              />
              <button className="absolute right-1 top-1 bottom-1 btn-primary px-4">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MessageSquare, title: 'สนทนาได้ทุกเรื่อง', desc: 'ถามได้ทุกคำถาม ตั้งแต่ง่ายจนซับซ้อน' },
              { icon: Zap, title: 'ตอบเร็วทันใจ', desc: 'ประมวลผลและตอบกลับในเสี้ยววินาที' },
              { icon: Shield, title: 'ความปลอดภัย', desc: 'ข้อมูลของคุณได้รับการปกป้อง' },
            ].map((feature, i) => (
              <div key={i} className="card hover:border-kimi-primary transition-colors">
                <feature.icon className="w-10 h-10 text-kimi-primary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-kimi-text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-kimi-border">
        <div className="max-w-6xl mx-auto text-center text-kimi-text-muted">
          <p>© 2026 Kimi Clone. Created for นายท่าน ❤️‍🔥</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
