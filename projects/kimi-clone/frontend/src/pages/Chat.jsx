import { useState, useRef, useEffect } from 'react'
import { 
  Plus, Menu, MessageSquare, Globe, FileText, Presentation, 
  Table2, Microscope, Users, Code, ExternalLink, Sparkles,
  Send, Settings, Info, Languages, MessageCircle, ChevronDown,
  Smartphone, X, History
} from 'lucide-react'

function Chat() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const textareaRef = useRef(null)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    
    const userMsg = { id: Date.now(), role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'สวัสดีครับนายท่าน! นี่คือ Kimi Clone ❤️‍🔥\n\nฉันพร้อมช่วยเหลือเสมอ'
      }])
      setIsTyping(false)
    }, 1000)
  }

  const tools = [
    { icon: Globe, label: 'Websites', href: '/websites' },
    { icon: FileText, label: 'Docs', href: '/docs' },
    { icon: Presentation, label: 'Slides', href: '/slides' },
    { icon: Table2, label: 'Sheets', href: '/sheets' },
    { icon: Microscope, label: 'Deep Research', href: '/deep-research' },
    { icon: Users, label: 'Agent Swarm', href: '/agent-swarm', tag: 'Beta' },
  ]

  return (
    <div className="flex h-screen bg-kimi-bg text-kimi-text">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-[260px]' : 'w-0'} 
        flex-shrink-0 bg-kimi-sidebar border-r border-kimi-border
        flex flex-col overflow-hidden transition-all duration-300`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-3 h-14"
        >
          <a href="/" className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </a>
          
          <button 
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 hover:bg-kimi-hover rounded-lg"
          >
            <Menu className="w-5 h-5 text-kimi-text-secondary" />
          </button>
        </div>

        {/* New Chat Button */}
        <div className="px-3 mb-2"
        >
          <a href="/" className="flex items-center justify-between px-3 py-2.5 
            border border-kimi-border rounded-xl hover:bg-kimi-hover transition-colors"
          >
            <div className="flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">New Chat</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-kimi-text-muted"
            >
              <span className="px-1.5 py-0.5 bg-kimi-hover rounded">Ctrl</span>
              <span className="px-1.5 py-0.5 bg-kimi-hover rounded">K</span>
            </div>
          </a>
        </div>

        {/* Kimi Plus Section */}
        <div className="px-3 mb-4"
        >
          <ul className="space-y-0.5"
          >
            {tools.map((tool) => (
              <li key={tool.label}
              >
                <a href={tool.href} className="flex items-center gap-3 px-3 py-2 rounded-lg
                  hover:bg-kimi-hover transition-colors group"
                >
                  <tool.icon className="w-4 h-4 text-kimi-text-secondary group-hover:text-kimi-text" />
                  <span className="flex-1 text-sm">{tool.label}</span>
                  {tool.tag && (
                    <span className="text-xs px-1.5 py-0.5 bg-orange-100 text-orange-600 rounded"
                    >
                      {tool.tag}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Kimi Code */}
          <a href="/code" className="flex items-center gap-3 px-3 py-2 mt-2 rounded-lg
            hover:bg-kimi-hover transition-colors group"
          >
            <Code className="w-4 h-4 text-kimi-text-secondary" />
            <span className="flex-1 text-sm">Kimi Code</span>
            <ExternalLink className="w-4 h-4 text-kimi-text-muted" />
          </a>

          {/* Kimi Claw */}
          <a href="/bot" className="flex items-center gap-3 px-3 py-2 rounded-lg
            hover:bg-kimi-hover transition-colors group"
          >
            <div className="w-4 h-4 rounded bg-gradient-to-br from-orange-400 to-red-500" />
            <span className="flex-1 text-sm">Kimi Claw</span>
            <span className="text-xs px-1.5 py-0.5 bg-orange-100 text-orange-600 rounded">Beta</span>
          </a>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto px-3"
        >
          <div className="flex items-center gap-2 px-3 py-2 text-kimi-text-secondary"
          >
            <History className="w-4 h-4" />
            <span className="text-xs font-medium">Chat History</span>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-kimi-border"
        >
          {/* Mobile App */}
          <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg
            hover:bg-kimi-hover transition-colors mb-1"
          >
            <Smartphone className="w-4 h-4" />
            <span className="text-sm">Mobile App</span>
          </button>

          {/* User Nav */}
          <div className="space-y-0.5 mt-2"
          >
            <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg
              hover:bg-kimi-hover transition-colors"
            >
              <Info className="w-4 h-4" />
              <span className="text-sm">About Us</span>
            </button>

            <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg
              hover:bg-kimi-hover transition-colors"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm">Language</span>
            </button>

            <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg
              hover:bg-kimi-hover transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">User Feedback</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-kimi-bg"
      >
        {/* Header */}
        <header className="h-14 flex items-center justify-between px-4 border-b border-kimi-border"
        >
          <div className="flex items-center gap-3"
          >
            {!sidebarOpen && (
              <button 
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-kimi-hover rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2"
          >
            <button className="p-2 hover:bg-kimi-hover rounded-lg"
            >
              <Settings className="w-5 h-5 text-kimi-text-secondary" />
            </button>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto"
        >
          {messages.length === 0 ? (
            /* Empty State - Landing */
            <div className="h-full flex flex-col items-center justify-center px-4"
            >
              <div className="w-full max-w-3xl"
              >
                {/* Welcome */}
                <div className="text-center mb-8"
                >
                  <h1 className="text-3xl font-semibold mb-2">What can I help with?</h1>
                  <p className="text-kimi-text-secondary">Start a conversation or try these tools</p>
                </div>

                {/* Tools Carousel */}
                <div className="flex gap-3 overflow-x-auto pb-4 mb-8 justify-center"
                >
                  {tools.map((tool) => (
                    <a key={tool.label} href={tool.href}
                      className="flex items-center gap-2 px-4 py-2.5 
                        bg-kimi-card border border-kimi-border rounded-full
                        hover:border-kimi-primary hover:shadow-sm transition-all
                        whitespace-nowrap"
                    >
                      <tool.icon className="w-4 h-4 text-kimi-text-secondary" />
                      <span className="text-sm">{tool.label}</span>
                      {tool.tag && (
                        <span className="text-xs px-1.5 py-0.5 bg-orange-100 text-orange-600 rounded"
                        >
                          {tool.tag}
                        </span>
                      )}
                    </a>
                  ))}
                </div>

                {/* Input Area */}
                <div className="bg-kimi-card border border-kimi-border rounded-2xl shadow-sm"
                >
                  <div className="p-4"
                  >
                    <textarea
                      ref={textareaRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask Anything..."
                      rows={1}
                      className="w-full resize-none bg-transparent border-0 outline-none
                        text-kimi-text placeholder-kimi-text-muted
                        min-h-[60px] max-h-[200px]"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault()
                          handleSend()
                        }
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between px-4 pb-4"
                  >
                    <div className="flex items-center gap-2"
                    >
                      <button className="p-2 hover:bg-kimi-hover rounded-lg"
                      >
                        <Plus className="w-5 h-5 text-kimi-text-secondary" />
                      </button>

                      <div className="flex items-center gap-1.5 px-2 py-1 
                        bg-kimi-hover rounded-lg cursor-pointer"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-xs">OK Computer</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </div>

                    <button 
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="p-2 bg-kimi-primary text-white rounded-lg
                        hover:bg-kimi-primary-hover disabled:opacity-50 
                        disabled:cursor-not-allowed transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Messages */
            <div className="max-w-3xl mx-auto p-4 space-y-6"
            >
              {messages.map((msg) => (
                <div key={msg.id} 
                  className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                    ${msg.role === 'assistant' 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                      : 'bg-kimi-text-secondary'}"
                  >
                    <span className="text-white text-sm font-semibold"
                    >
                      {msg.role === 'assistant' ? 'K' : 'น'}
                    </span>
                  </div>

                  <div className={`flex-1 max-w-[85%] ${msg.role === 'user' ? 'text-right' : ''}`}
                  >
                    <div className={`inline-block text-left px-4 py-3 rounded-2xl
                      ${msg.role === 'user'
                        ? 'bg-kimi-text text-white'
                        : 'bg-kimi-card border border-kimi-border'
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
                    flex items-center justify-center"
                  >
                    <span className="text-white text-sm font-semibold">K</span>
                  </div>
                  
                  <div className="bg-kimi-card border border-kimi-border rounded-2xl px-4 py-3"
                  >
                    <div className="flex gap-1"
                    >
                      <span className="w-2 h-2 bg-kimi-text-muted rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-kimi-text-muted rounded-full animate-bounce" 
                        style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-kimi-text-muted rounded-full animate-bounce" 
                        style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Chat
