import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Sparkles, Eye, EyeOff, Github, Mail } from 'lucide-react'

function Login({ setUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock login
    setUser({ email })
    navigate('/chat')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-kimi-bg-primary"
    >
      <div className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-10"
        >
          <Link to="/" className="inline-flex items-center gap-2.5"
          >
            <div className="w-10 h-10 bg-gradient-kimi rounded-xl flex items-center justify-center"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-kimi-text-primary">Kimi</span>
          </Link>
        </div>

        {/* Form Card */}
        <div className="bg-kimi-bg-secondary border border-kimi-border rounded-2xl p-8"
        >
          <div className="text-center mb-8"
          >
            <h1 className="text-2xl font-semibold text-kimi-text-primary mb-2"
            >Welcome back</h1>
            <p className="text-kimi-text-secondary"
            >Please enter your details to sign in</p>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3 mb-6"
          >
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 
              bg-kimi-bg-tertiary border border-kimi-border rounded-lg
              hover:bg-kimi-bg-hover transition-colors"
            >
              <Github className="w-5 h-5 text-kimi-text-primary" />
              <span className="text-kimi-text-primary font-medium">GitHub</span>
            </button>
            
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 
              bg-kimi-bg-tertiary border border-kimi-border rounded-lg
              hover:bg-kimi-bg-hover transition-colors"
            >
              <Mail className="w-5 h-5 text-kimi-text-primary" />
              <span className="text-kimi-text-primary font-medium">Google</span>
            </button>
          </div>

          <div className="relative mb-6"
          >
            <div className="absolute inset-0 flex items-center"
            >
              <div className="w-full border-t border-kimi-border"></div>
            </div>
            <div className="relative flex justify-center text-sm"
            >
              <span className="px-4 bg-kimi-bg-secondary text-kimi-text-muted">or</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-kimi-text-primary mb-2"
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="input-field w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-kimi-text-primary mb-2"
              >
                Password
              </label>
              <div className="relative"
              >
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-field w-full pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 
                    text-kimi-text-muted hover:text-kimi-text-primary transition-colors"
                >
                  {showPassword ? 
                    <EyeOff className="w-5 h-5" /> : 
                    <Eye className="w-5 h-5" />
                  }
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between"
            >
              <label className="flex items-center gap-2 cursor-pointer"
              >
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-kimi-border bg-kimi-bg-tertiary 
                    text-kimi-accent-blue focus:ring-kimi-accent-blue/20"
                />
                <span className="text-sm text-kimi-text-secondary">Remember me</span>
              </label>
              
              <a href="#" className="text-sm text-kimi-accent-blue hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn-primary w-full py-3"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center"
          >
            <p className="text-kimi-text-secondary"
            >
              Don't have an account?{' '}
              <a href="#" className="text-kimi-accent-blue hover:underline font-medium"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center"
        >
          <Link to="/" className="text-sm text-kimi-text-muted hover:text-kimi-text-secondary"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
