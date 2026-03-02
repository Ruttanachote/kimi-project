import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Send, Plus, Menu, Settings, LogOut, MessageSquare, MoreHorizontal, Copy, RefreshCw, ThumbsUp, ThumbsDown } from 'lucide-react'

function Chat({ user }) {
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: 'สวัสดี! ฉันคือ Kimi Clone พร้อมช่วยเหลือคุณเสมอ ❤️‍🔥' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { id: Date.now(), role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Mock AI response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'นี่คือการตอบกลับจำลอง ในเวอร์ชั่นเต็มจะเชื่อมต่อกับ AI จริง ❤️‍🔥'
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex h-screen bg-kimi-darker">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 bg-kimi-dark border-r border-kimi-border flex flex-col overflow-hidden`}>
        <div className="p-4">
          <button className="btn-secondary w-full flex items-center gap-2 justify-center">
            <Plus className="w-5 h-5" />
            New chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4">
          <div className="text-xs font-medium text-kimi-text-muted mb-2 px-2">Today</div>
          {['Kimi Clone Project', 'Docker Compose Setup', 'Website Analysis'].map((chat, i) => (
            <div key={i} className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-kimi-card cursor-pointer group">
              <MessageSquare className="w-4 h-4 text-kimi-text-muted" />
              <span className="flex-1 truncate text-sm">{chat}</span>
              <MoreHorizontal className="w-4 h-4 text-kimi-text-muted opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-kimi-border">
          <button className="flex items-center gap-2 w-full px-2 py-2 rounded-lg hover:bg-kimi-card">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
          <Link to="/" className="flex items-center gap-2 w-full px-2 py-2 rounded-lg hover:bg-kimi-card text-red-400">
            <LogOut className="w-5 h-5" />
            <span>Log out</span>
          </Link>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-kimi-border flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-kimi-card rounded-lg">
              <Menu className="w-5 h-5" />
            </button>
            <select className="bg-kimi-card border border-kimi-border rounded-lg px-3 py-1.5 text-sm">
              <option>Kimi Clone</option>
              <option>GPT-4</option>
              <option>Claude</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button className="btn-secondary text-sm">Share</button>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          {messages.map((message) => (
            <div key={message.id} className={`mb-6 ${message.role === 'user' ? 'ml-auto max-w-2xl' : 'max-w-3xl'}`}>
              <div className={`p-4 rounded-2xl ${
                message.role === 'user' 
                  ? 'bg-kimi-primary text-white' 
                  : 'bg-kimi-card border border-kimi-border'
              }`}>
                <div className="flex items-start gap-3">
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">K</span>
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="prose prose-invert max-w-none">
                      {message.content}
                    </div>

                    {message.role === 'assistant' && (
                      <div className="flex items-center gap-2 mt-3">
                        <button className="p-1.5 hover:bg-kimi-darker rounded">
                          <Copy className="w-4 h-4 text-kimi-text-muted" />
                        </button>
                        <button className="p-1.5 hover:bg-kimi-darker rounded">
                          <RefreshCw className="w-4 h-4 text-kimi-text-muted" />
                        </button>
                        <button className="p-1.5 hover:bg-kimi-darker rounded">
                          <ThumbsUp className="w-4 h-4 text-kimi-text-muted" />
                        </button>
                        <button className="p-1.5 hover:bg-kimi-darker rounded">
                          <ThumbsDown className="w-4 h-4 text-kimi-text-muted" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="max-w-3xl mb-6">
              <div className="bg-kimi-card border border-kimi-border p-4 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">K</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-kimi-text-muted rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-kimi-text-muted rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                    <span className="w-2 h-2 bg-kimi-text-muted rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-kimi-border">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="พิมพ์ข้อความที่นี่..."
                rows={1}
                className="input-field w-full pr-12 py-4 resize-none"
                style={{ minHeight: '56px', maxHeight: '200px' }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="absolute right-2 bottom-2 p-2 bg-kimi-primary text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-center text-xs text-kimi-text-muted mt-2">
              AI อาจให้ข้อมูลที่ไม่ถูกต้อง กรุณาตรวจสอบข้อมูลสำคัญ
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
