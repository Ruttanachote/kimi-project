import { useState, useRef, useEffect } from 'react'
import { 
  Plus, MessageSquare, Globe, FileText, Presentation, 
  Table2, Microscope, Code, Sparkles, History, Info, 
  Languages, MessageCircle, Send, ChevronDown, Users
} from 'lucide-react'

const sidebarItems = [
  { icon: Plus, label: 'New Chat', shortcut: 'Ctrl K', isButton: true },
  { icon: Globe, label: 'Websites' },
  { icon: FileText, label: 'Docs' },
  { icon: Presentation, label: 'Slides' },
  { icon: Table2, label: 'Sheets' },
  { icon: Microscope, label: 'Deep Research' },
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
  { icon: Globe, label: 'Websites' },
  { icon: FileText, label: 'Docs' },
  { icon: Presentation, label: 'Slides' },
  { icon: Table2, label: 'Sheets' },
  { icon: Microscope, label: 'Deep Research' },
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

  return (
    <div className="flex h-screen bg-[#0d0d0d]">
      {/* Sidebar - DARK THEME */}
      <aside className="w-[260px] flex-shrink-0 bg-[#0d0d0d] border-r border-gray-800 flex flex-col">
        {/* Logo */}
        <div className="p-4">
          <div className="w-8 h-8 bg-black border border-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">K</span>
          </div>
        </div>

        {/* New Chat Button */}
        <div className="px-3 mb-2">
          <button className="w-full flex items-center justify-between px-3 py-2.5 
            bg-[#1a1a1a] border border-gray-700 rounded-lg hover:bg-[#252525] transition-colors">
            <div className="flex items-center gap-2">
              <Plus className="w-4 h-4 text-gray-300" />
              <span className="text-sm font-medium text-white">New Chat</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span className="px-1.5 py-0.5 bg-gray-800 rounded">Ctrl</span>
              <span className="px-1.5 py-0.5 bg-gray-800 rounded">K</span>
            </div>
          </button>
        </div>

        {/* Sidebar Items */}
        <div className="px-3 flex-1 overflow-y-auto">
          <div className="space-y-0.5">
            {sidebarItems.map((item) => (
              <button key={item.label} 
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg
                  hover:bg-[#1a1a1a] transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-xs px-1.5 py-0.5 bg-blue-900 text-blue-400 rounded font-medium">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Items */}
        <div className="p-3 border-t border-gray-800">
          <div className="space-y-0.5 mb-4">
            {bottomItems.map((item) => (
              <button key={item.label}
                className="w-full flex flex-col px-3 py-2 rounded-lg hover:bg-[#1a1a1a] transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">{item.label}</span>
                </div>
                {item.subtext && (
                  <span className="text-xs text-gray-500 ml-7 mt-0.5">{item.subtext}</span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile App */}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#1a1a1a] transition-colors mb-2">
            <MessageCircle className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-300">Mobile App</span>
          </button>

          {/* Log In */}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#1a1a1a] transition-colors">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
            <span className="text-sm text-gray-300">Log in</span>
          </button>
        </div>
      </aside>

      {/* Main Content - DARK THEME */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#0d0d0d]">
        {/* Header */}
        <header className="h-14 flex items-center justify-end px-4">
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            /* Empty State */
            <div className="h-full flex flex-col items-center justify-center px-4 -mt-20">
              {/* KIMI Logo */}
              <h1 className="text-6xl font-bold text-white tracking-wider mb-8">KIMI</h1>

              {/* Input Box - DARK */}
              <div className="w-full max-w-2xl bg-[#1a1a1a] border border-gray-700 rounded-2xl">
                <div className="p-4">
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Anything..."
                    rows={1}
                    className="w-full resize-none bg-transparent border-0 outline-none
                      text-white placeholder-gray-500 text-base
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
                    <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors border border-gray-700">
                      <Plus className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 
                      bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-700">
                      <Sparkles className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-300">Agent</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-300">
                      <span>K2.5 Instant</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="w-10 h-10 flex items-center justify-center rounded-full
                        bg-gray-700 text-gray-400 hover:bg-gray-600 
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
                    className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-gray-700 
                      rounded-full hover:border-gray-600 hover:bg-[#252525] transition-all"
                  >
                    <tool.icon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">{tool.label}</span>
                    {tool.badge && (
                      <span className="text-xs px-1.5 py-0.5 bg-blue-900 text-blue-400 rounded font-medium">
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
                      ? 'bg-black border border-gray-700' 
                      : 'bg-gray-700'}`}
                  >
                    <span className="text-white text-sm font-bold">
                      {msg.role === 'assistant' ? 'K' : 'น'}
                    </span>
                  </div>

                  <div className={`flex-1 max-w-[85%] ${msg.role === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block text-left px-4 py-3 rounded-2xl
                      ${msg.role === 'user'
                        ? 'bg-gray-700 text-white'
                        : 'bg-[#1a1a1a] text-gray-200 border border-gray-800'
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-black border border-gray-700 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">K</span>
                  </div>
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
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
