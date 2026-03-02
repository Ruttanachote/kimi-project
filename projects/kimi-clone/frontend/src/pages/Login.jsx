import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Sparkles, Eye, EyeOff } from 'lucide-react'

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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Kimi Clone</span>
          </Link>
        </div>

        {/* Form */}
        <div className="card">
          <h2 className="text-2xl font-bold text-white text-center mb-2">Welcome back</h2>
          <p className="text-kimi-text-muted text-center mb-6">Please enter your details to sign in</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-kimi-text mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input-field w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-kimi-text mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="input-field w-full pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-kimi-text-muted hover:text-kimi-text"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-kimi-border bg-kimi-card" />
                <span className="text-sm text-kimi-text-muted">Remember me</span>
              </label>
              <a href="#" className="text-sm text-kimi-primary hover:underline">Forgot password?</a>
            </div>

            <button type="submit" className="btn-primary w-full py-3">
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-kimi-text-muted">
              Don't have an account?{' '}
              <a href="#" className="text-kimi-primary hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
