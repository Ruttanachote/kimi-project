import { useState, useRef, useEffect } from 'react'
import { 
  Plus, Globe, FileText, Presentation, 
  Table2, Microscope, Code, Sparkles, History, Info, 
  Languages, MessageCircle, Send, ChevronDown, Users
} from 'lucide-react'

// Custom SVG Icons matching Kimi's exact icons from HTML
const BrowserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
    <path d="M6 8h.01M10 8h.01"/>
  </svg>
)

const DocumentIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
)

const PPTIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h20v14H2z"/>
    <path d="M6 21h12"/>
    <path d="M12 17v4"/>
    <path d="M8 7h2v4H8z"/>
    <path d="M12 7h2v4h-2z"/>
    <path d="M16 7h2v4h-2z"/>
  </svg>
)

const ExcelIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <path d="M8 13h2l2 3 2-3h2"/>
    <path d="M8 17l2-3 2 3"/>
  </svg>
)

const MicroscopeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18h8"/>
    <path d="M3 22h18"/>
    <path d="M14 22a7 7 0 1 0 0-14h-1"/>
    <path d="M9 14h2"/>
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2H9z"/>
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
  </svg>
)

const TaskSubagentIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
)

const sidebarItems = [
  { icon: Plus, label: 'New Chat', shortcut: 'Ctrl K', isButton: true },
  { icon: BrowserIcon, label: 'Websites', isCustom: true },
  { icon: DocumentIcon, label: 'Docs', isCustom: true },
  { icon: PPTIcon, label: 'Slides', isCustom: true },
  { icon: ExcelIcon, label: 'Sheets', isCustom: true },
  { icon: MicroscopeIcon, label: 'Deep Research', isCustom: true },
  { icon: Code, label: 'Kimi Code' },
  { icon: Sparkles, label: 'Kimi Claw', badge: 'Beta' },
]

const bottomItems = [
  { icon: History, label: 'Chat History', subtext: 'Log in to sync chat history' },
  { icon: Info, label: 'About Us' },
  { icon: Languages, label: 'Language' },
  { icon: MessageCircle, label: 'User Feedback' },
]

const toolPills = [
  { icon: BrowserIcon, label: 'Websites', isCustom: true },
  { icon: DocumentIcon, label: 'Docs', isCustom: true },
  { icon: PPTIcon, label: 'Slides', isCustom: true },
  { icon: ExcelIcon, label: 'Sheets', isCustom: true },
  { icon: MicroscopeIcon, label: 'Deep Research', isCustom: true },
  { icon: Users, label: 'Agent Swarm', badge: 'Beta' },
]

function Chat() {
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

  const renderIcon = (item) => {
    if (item.isCustom) {
      const CustomIcon = item.icon
      return <CustomIcon />
    }
    const IconComponent = item.icon
    return <IconComponent className="w-4 h-4" />
  }

  return (
    <div className="flex h-screen bg-kimi-bg-primary">
      {/* Sidebar - Kimi Dark Theme */}
      <aside className="w-sidebar flex-shrink-0 bg-kimi-bg-secondary border-r border-kimi-border flex flex-col">
        {/* Logo */}
        <div className="p-4">
          <div className="w-8 h-8 bg-black border border-kimi-border rounded-lg flex items-center justify-center">
            <span className="text-kimi-text-primary font-bold text-lg">K</span>
          </div>
        </div>

        {/* New Chat Button */}
        <div className="px-3 mb-2">
          <button className="w-full flex items-center justify-between px-3 py-2.5 
            bg-kimi-bg-tertiary border border-kimi-border rounded-lg hover:bg-kimi-fill-f1 transition-colors">
            <div className="flex items-center gap-2">
              <Plus className="w-4 h-4 text-kimi-text-secondary" />
              <span className="text-sm font-medium text-kimi-text-primary">New Chat</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-kimi-text-tertiary">
              <span className="px-1.5 py-0.5 bg-kimi-fill-f1 rounded">Ctrl</span>
              <span className="px-1.5 py-0.5 bg-kimi-fill-f1 rounded">K</span>
            </div>
          </button>
        </div>

        {/* Sidebar Items */}
        <div className="px-3 flex-1 overflow-y-auto">
          <div className="space-y-0.5">
            {sidebarItems.slice(1).map((item) => (
              <button key={item.label} 
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg
                  hover:bg-kimi-fill-f1 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-kimi-text-secondary">
                    {renderIcon(item)}
                  </span>
                  <span className="text-sm text-kimi-text-secondary">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-xs px-1.5 py-0.5 bg-kimi-blue/20 text-kimi-blue rounded font-medium">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Items */}
        <div className="p-3 border-t border-kimi-border">
          <div className="space-y-0.5 mb-4">
            {bottomItems.map((item) => (
              <button key={item.label}
                className="w-full flex flex-col px-3 py-2 rounded-lg hover:bg-kimi-fill-f1 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-kimi-text-secondary" />
                  <span className="text-sm text-kimi-text-secondary">{item.label}</span>
                </div>
                {item.subtext && (
                  <span className="text-xs text-kimi-text-tertiary ml-7 mt-0.5">{item.subtext}</span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile App */}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-kimi-fill-f1 transition-colors mb-2">
            <MessageCircle className="w-4 h-4 text-kimi-text-secondary" />
            <span className="text-sm text-kimi-text-secondary">Mobile App</span>
          </button>

          {/* Log In */}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-kimi-fill-f1 transition-colors">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-kimi-blue to-purple-600" />
            <span className="text-sm text-kimi-text-secondary">Log in</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-kimi-bg-primary">
        {/* Header */}
        <header className="h-header flex items-center justify-end px-4">
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            /* Empty State */
            <div className="h-full flex flex-col items-center justify-center px-4 -mt-20">
              {/* KIMI Logo */}
              <h1 className="text-hero font-bold text-kimi-text-primary tracking-wider mb-8">KIMI</h1>

              {/* Input Box */}
              <div className="w-full max-w-2xl bg-kimi-bg-tertiary border border-kimi-border rounded-lg">
                <div className="p-4">
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Anything..."
                    rows={1}
                    className="w-full resize-none bg-transparent border-0 outline-none
                      text-kimi-text-primary placeholder-kimi-text-tertiary text-base
                      min-h-[24px] max-h-[200px]"
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
                    <button className="p-2 hover:bg-kimi-fill-f1 rounded-lg transition-colors border border-kimi-border">
                      <Plus className="w-5 h-5 text-kimi-text-secondary" />
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 
                      bg-kimi-fill-f1 hover:bg-kimi-fill-f2 rounded-lg transition-colors border border-kimi-border">
                      <Sparkles className="w-4 h-4 text-kimi-text-secondary" />
                      <span className="text-sm text-kimi-text-secondary">Agent</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 text-sm text-kimi-text-secondary hover:text-kimi-text-primary transition-colors">
                      <span>K2.5 Instant</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="w-10 h-10 flex items-center justify-center rounded-full
                        bg-kimi-fill-f2 text-kimi-text-secondary hover:bg-kimi-fill-f3
                        disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Tool Pills */}
              <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-3xl">
                {toolPills.map((tool) => (
                  <button key={tool.label}
                    className="flex items-center gap-2 px-4 py-2 bg-kimi-bg-tertiary border border-kimi-border 
                      rounded-full hover:border-kimi-border-light hover:bg-kimi-fill-f1 transition-all"
                  >
                    <span className="text-kimi-text-secondary">
                      {tool.isCustom ? <tool.icon /> : <tool.icon className="w-4 h-4" />}
                    </span>
                    <span className="text-sm text-kimi-text-secondary">{tool.label}</span>
                    {tool.badge && (
                      <span className="text-xs px-1.5 py-0.5 bg-kimi-blue/20 text-kimi-blue rounded font-medium">
                        {tool.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Messages */
            <div className="max-w-3xl mx-auto p-4 space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                    ${msg.role === 'assistant' 
                      ? 'bg-black border border-kimi-border' 
                      : 'bg-kimi-message-user'}`}
                  >
                    <span className="text-kimi-text-primary text-sm font-bold">
                      {msg.role === 'assistant' ? 'K' : 'น'}
                    </span>
                  </div>

                  <div className={`flex-1 max-w-[85%] ${msg.role === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block text-left px-4 py-3 rounded-2xl
                      ${msg.role === 'user'
                        ? 'bg-kimi-message-user text-kimi-text-primary'
                        : 'bg-kimi-message-assistant text-kimi-text-primary border border-kimi-border'
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-black border border-kimi-border flex items-center justify-center">
                    <span className="text-kimi-text-primary text-sm font-bold">K</span>
                  </div>
                  <div className="bg-kimi-message-assistant border border-kimi-border rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-kimi-text-tertiary rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-kimi-text-tertiary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-kimi-text-tertiary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
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
