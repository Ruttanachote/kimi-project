import { useState, useRef, useEffect } from 'react'
import { 
  Plus, MessageSquare, Globe, FileText, Presentation, 
  Table2, Microscope, Code, Sparkles, History, Info, 
  Languages, MessageCircle, Send, ChevronDown, Users
} from 'lucide-react'

// Sidebar items matching screenshot
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
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-[260px] flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-4">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">K</span>
          </div>
        </div>

        {/* New Chat Button */}
        <div className="px-3 mb-2">
          <button className="w-full flex items-center justify-between px-3 py-2.5 
            border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-2">
              <Plus className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-900">New Chat</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <span className="px-1.5 py-0.5 bg-gray-100 rounded">Ctrl</span>
              <span className="px-1.5 py-0.5 bg-gray-100 rounded">K</span>
            </div>
          </button>
        </div>

        {/* Sidebar Items */}
        <div className="px-3 flex-1 overflow-y-auto">
          <div className="space-y-0.5">
            {sidebarItems.map((item) => (
              <button key={item.label} 
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg
                  hover:bg-gray-50 transition-colors text-left">
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-600 rounded font-medium">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Items */}
        <div className="p-3 border-t border-gray-200">
          <div className="space-y-0.5 mb-4">
            {bottomItems.map((item) => (
              <button key={item.label}
                className="w-full flex flex-col px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">{item.label}</span>
                </div>
                {item.subtext && (
                  <span className="text-xs text-gray-400 ml-7 mt-0.5">{item.subtext}</span>
                )}
              </button>
            ))}
          </div>

          {/* Log In */}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
            <span className="text-sm text-gray-700">Log in</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-white">
        {/* Header */}
        <header className="h-14 flex items-center justify-end px-4">
          {/* Empty header like screenshot */}
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            /* Empty State */
            <div className="h-full flex flex-col items-center justify-center px-4 -mt-20">
              {/* KIMI Logo */}
              <h1 className="text-6xl font-bold text-black tracking-wider mb-8">KIMI</h1>

              {/* Input Box */}
              <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-sm">
                <div className="p-4">
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Anything..."
                    rows={1}
                    className="w-full resize-none bg-transparent border-0 outline-none
                      text-gray-900 placeholder-gray-400 text-base
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
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Plus className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 
                      bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                      <Sparkles className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">Agent</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                      <span>K2.5 Instant</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="w-8 h-8 flex items-center justify-center rounded-full
                        bg-gray-200 text-gray-400 hover:bg-gray-300 
                        disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Tool Pills */}
              <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-3xl">
                {toolPills.map((tool) => (
                  <button key={tool.label}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 
                      rounded-full hover:border-gray-300 hover:shadow-sm transition-all">
                    <tool.icon className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{tool.label}</span>
                    {tool.badge && (
                      <span className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-600 rounded font-medium">
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
                      ? 'bg-black' 
                      : 'bg-gray-800'}`}>
                    <span className="text-white text-sm font-bold">
                      {msg.role === 'assistant' ? 'K' : 'น'}
                    </span>
                  </div>

                  <div className={`flex-1 max-w-[85%] ${msg.role === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block text-left px-4 py-3 rounded-2xl
                      ${msg.role === 'user'
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-100 text-gray-900'
                      }`}>
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                    <span className="text-white text-sm font-bold">K</span>
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
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
