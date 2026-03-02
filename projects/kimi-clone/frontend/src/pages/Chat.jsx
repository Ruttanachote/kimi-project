import { useState, useRef, useEffect } from 'react'
import { 
  Plus, Menu, Globe, FileText, Presentation, Table2, Microscope, 
  Code, ExternalLink, Sparkles, History, Smartphone, X, Info, 
  Languages, MessageCircle, Send
} from 'lucide-react'

// Tool items matching Kimi
const kimiTools = [
  { icon: Globe, label: 'Websites', href: '/websites' },
  { icon: FileText, label: 'Docs', href: '/docs' },
  { icon: Presentation, label: 'Slides', href: '/slides' },
  { icon: Table2, label: 'Sheets', href: '/sheets' },
  { icon: Microscope, label: 'Deep Research', href: '/deep-research' },
]

function Chat() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const textareaRef = useRef(null)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`
    }
  }, [input])

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
    if (textareaRef.current) textareaRef.current.style.height = 'auto'
    
    setIsTyping(true)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'สวัสดีครับนายท่าน! ฉันคือ Kimi Clone พร้อมช่วยเหลือเสมอ ❤️‍🔥'
      }])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="flex h-screen bg-kimi-bg text-kimi-text-primary">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-[260px]' : 'w-0'} 
        flex-shrink-0 bg-kimi-bg-secondary border-r border-kimi-border 
        flex flex-col overflow-hidden transition-all duration-300`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 h-14">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </a>
          <button onClick={() => setSidebarOpen(false)} className="p-1.5 hover:bg-kimi-bg-hover rounded-lg">
            <Menu className="w-5 h-5 text-kimi-text-secondary" />
          </button>
        </div>

        {/* New Chat Button */}
        <div className="px-3 mb-4">
          <a href="/" className="flex items-center justify-between px-3 py-2.5 
            border border-kimi-border rounded-xl hover:bg-kimi-bg-hover transition-colors"
          >
            <div className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              <span className="font-medium text-sm">New Chat</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-kimi-text-muted">
              <span className="px-1.5 py-0.5 bg-kimi-bg-hover rounded">Ctrl</span>
              <span className="px-1.5 py-0.5 bg-kimi-bg-hover rounded">K</span>
            </div>
          </a>
        </div>

        {/* Kimi Plus */}
        <div className="px-3 mb-4">
          <ul className="space-y-0.5">
            {kimiTools.map((tool) => (
              <li key={tool.label}>
                <a href={tool.href} className="sidebar-item group">
                  <tool.icon className="w-4 h-4 text-kimi-text-secondary group-hover:text-kimi-text-primary" />
                  <span className="flex-1 text-sm">{tool.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Kimi Code */}
          <a href="/code" className="sidebar-item group mt-1">
            <Code className="w-4 h-4 text-kimi-text-secondary" />
            <span className="flex-1 text-sm">Kimi Code</span>
            <ExternalLink className="w-4 h-4 text-kimi-text-muted" />
          </a>

          {/* Kimi Claw */}
          <a href="/bot" className="sidebar-item group mt-1">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-orange-400 to-red-500" />
            <span className="flex-1 text-sm">Kimi Claw</span>
            <span className="tool-badge">Beta</span>
          </a>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto px-3">
          <div className="flex items-center gap-2 px-3 py-2 text-kimi-text-secondary">
            <History className="w-4 h-4" />
            <span className="text-xs font-medium">Chat History</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-kimi-border">
          <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-kimi-bg-hover transition-colors mb-1">
            <Smartphone className="w-4 h-4" />
            <span className="text-sm">Mobile App</span>
          </button>

          <div className="space-y-0.5 mt-2">
            <button className="sidebar-item w-full">
              <Info className="w-4 h-4" />
              <span className="text-sm">About Us</span>
            </button>
            <button className="sidebar-item w-full">
              <Languages className="w-4 h-4" />
              <span className="text-sm">Language</span>
            </button>
            <button className="sidebar-item w-full">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">User Feedback</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-14 flex items-center justify-between px-4 border-b border-kimi-border">
          <div className="flex items-center gap-3">
            {!sidebarOpen && (
              <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-kimi-bg-hover rounded-lg">
                <Menu className="w-5 h-5" />
              </button>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center px-4">
              <div className="w-full max-w-3xl">
                {/* Welcome */}
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-semibold mb-4">What can I help with?</h1>
                </div>

                {/* Tools Carousel */}
                <div className="flex gap-3 overflow-x-auto pb-4 mb-8 justify-center">
                  {kimiTools.map((tool) => (
                    <a key={tool.label} href={tool.href}
                      className="flex items-center gap-2 px-4 py-2.5 
                        bg-white border border-kimi-border rounded-full
                        hover:border-kimi-accent hover:shadow-sm transition-all
                        whitespace-nowrap"
                    >
                      <tool.icon className="w-4 h-4 text-kimi-text-secondary" />
                      <span className="text-sm">{tool.label}</span>
                    </a>
                  ))}
                </div>

                {/* Input */}
                <div className="bg-white border border-kimi-border rounded-2xl shadow-sm">
                  <div className="p-4">
                    <textarea
                      ref={textareaRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask Anything..."
                      rows={1}
                      className="w-full resize-none bg-transparent border-0 outline-none
                        text-kimi-text-primary placeholder-kimi-text-muted
                        min-h-[60px] max-h-[200px]"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault()
                          handleSend()
                        }
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between px-4 pb-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-kimi-bg-hover rounded-lg">
                        <Plus className="w-5 h-5 text-kimi-text-secondary" />
                      </button>
                      <div className="flex items-center gap-1.5 px-2 py-1 bg-kimi-bg-hover rounded-lg cursor-pointer">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-xs">OK Computer</span>
                      </div>
                    </div>

                    <button 
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="p-2 bg-kimi-accent text-white rounded-lg
                        hover:bg-kimi-accent-hover disabled:opacity-50 
                        disabled:cursor-not-allowed transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto p-4 space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                    ${msg.role === 'assistant' 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                      : 'bg-kimi-accent'}`}
                  >
                    <span className="text-white text-sm font-semibold">
                      {msg.role === 'assistant' ? 'K' : 'น'}
                    </span>
                  </div>

                  <div className={`flex-1 max-w-[85%] ${msg.role === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block text-left px-4 py-3 rounded-2xl
                      ${msg.role === 'user'
                        ? 'bg-kimi-accent text-white'
                        : 'bg-kimi-bg-secondary border border-kimi-border'
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">K</span>
                  </div>
                  <div className="bg-kimi-bg-secondary border border-kimi-border rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-kimi-text-muted rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-kimi-text-muted rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-kimi-text-muted rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
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
