import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Send, Plus, Menu, Settings, LogOut, MessageSquare, 
  MoreHorizontal, Copy, RefreshCw, ThumbsUp, ThumbsDown,
  ChevronDown, Share2, Paperclip
} from 'lucide-react'

function Chat({ user }) {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      role: 'assistant', 
      content: 'สวัสดีครับ นายท่าน! ฉันคือ Kimi Clone พร้อมช่วยเหลือเสมอ ❤️‍🔥\n\nมีอะไรให้ฉันช่วยไหมครับ?' 
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)

  // Auto-resize textarea
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

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { id: Date.now(), role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
    
    setIsTyping(true)

    // Mock AI response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'นี่คือการตอบกลับจำลองครับ 🎉\n\nในเวอร์ชั่นเต็ม ฉันจะเชื่อมต่อกับ AI จริงและตอบได้อย่างชาญฉลาด!\n\n**สิ่งที่ฉันสามารถทำได้:**\n- ตอบคำถามทั่วไป\n- ช่วยเขียนโค้ด\n- วิเคราะห์ข้อมูล\n- แปลภาษา\n\nนายท่านอยากให้ฉันทำอะไรเพิ่มไหมครับ? ❤️‍🔥'
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 2000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const copyMessage = (content) => {
    navigator.clipboard.writeText(content)
  }

  return (
    <div className="flex h-screen bg-kimi-bg-primary">
      {/* Sidebar */}
      <aside 
        className={`${sidebarOpen ? 'w-[260px]' : 'w-0'} 
          transition-all duration-300 bg-kimi-bg-secondary border-r border-kimi-border 
          flex flex-col overflow-hidden flex-shrink-0`}
      >
        {/* New Chat Button */}
        <div className="p-3">
          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl 
            border border-kimi-border hover:bg-kimi-bg-tertiary 
            transition-all duration-200 group"
          >
            <div className="w-5 h-5 rounded-full border-2 border-kimi-text-secondary 
              flex items-center justify-center group-hover:border-kimi-text-primary"
            >
              <Plus className="w-3 h-3 text-kimi-text-secondary group-hover:text-kimi-text-primary" />
            </div>
            <span className="text-kimi-text-primary font-medium">New chat</span>
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto px-3">
          <div className="text-xs font-medium text-kimi-text-muted mb-2 px-3 mt-2">Today</div>
          
          {[
            'Kimi Clone Project Discussion',
            'Docker Compose Setup Guide',
            'Design System Analysis',
            'React Component Patterns'
          ].map((chat, i) => (
            <div 
              key={i} 
              className="sidebar-item mb-1 group"
            >
              <MessageSquare className="w-4 h-4 flex-shrink-0" />
              <span className="flex-1 truncate text-sm font-medium">{chat}</span>
              <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-kimi-bg-secondary rounded"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* User Section */}
        <div className="p-3 border-t border-kimi-border">
          <button className="sidebar-item w-full mb-1"
          >
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">Settings</span>
          </button>
          
          <Link to="/" className="sidebar-item w-full text-red-400 hover:text-red-300"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Log out</span>
          </Link>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-14 border-b border-kimi-border flex items-center justify-between px-4 flex-shrink-0"
        >
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)} 
              className="p-2 hover:bg-kimi-bg-secondary rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 text-kimi-text-secondary" />
            </button>
            
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg 
              hover:bg-kimi-bg-secondary transition-colors"
            >
              <span className="text-kimi-text-primary font-medium">Kimi K2.5</span>
              <ChevronDown className="w-4 h-4 text-kimi-text-muted" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-kimi-bg-secondary rounded-lg transition-colors"
            >
              <Share2 className="w-5 h-5 text-kimi-text-secondary" />
            </button>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex gap-4 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  {message.role === 'assistant' ? (
                    <div className="w-8 h-8 rounded-full bg-gradient-kimi flex items-center justify-center"
                    >
                      <span className="text-white text-sm font-semibold">K</span>
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-kimi-accent-blue flex items-center justify-center"
                    >
                      <span className="text-white text-sm font-semibold">น</span>
                    </div>
                  )}
                </div>

                {/* Message Content */}
                <div className={`flex-1 max-w-[85%] ${message.role === 'user' ? 'text-right' : ''}`}>
                  <div 
                    className={`inline-block text-left px-5 py-3 
                      ${message.role === 'user' 
                        ? 'bg-kimi-accent-blue text-white rounded-[18px_18px_4px_18px]' 
                        : 'bg-kimi-bg-secondary border border-kimi-border text-kimi-text-primary rounded-[18px_18px_18px_4px]'
                      }`}
                  >
                    <div className="prose prose-invert max-w-none text-[15px] leading-relaxed whitespace-pre-wrap"
                    >
                      {message.content}
                    </div>
                  </div>

                  {/* Message Actions (AI only) */}
                  {message.role === 'assistant' && (
                    <div className="flex items-center gap-1 mt-2"
                    >
                      <button 
                        onClick={() => copyMessage(message.content)}
                        className="p-1.5 hover:bg-kimi-bg-secondary rounded-md transition-colors"
                        title="Copy"
                      >
                        <Copy className="w-4 h-4 text-kimi-text-muted" />
                      </button>
                      
                      <button className="p-1.5 hover:bg-kimi-bg-secondary rounded-md transition-colors"
                        title="Regenerate"
                      >
                        <RefreshCw className="w-4 h-4 text-kimi-text-muted" />
                      </button>
                      
                      <button className="p-1.5 hover:bg-kimi-bg-secondary rounded-md transition-colors"
                        title="Good response"
                      >
                        <ThumbsUp className="w-4 h-4 text-kimi-text-muted" />
                      </button>
                      
                      <button className="p-1.5 hover:bg-kimi-bg-secondary rounded-md transition-colors"
                        title="Bad response"
                      >
                        <ThumbsDown className="w-4 h-4 text-kimi-text-muted" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-kimi flex items-center justify-center flex-shrink-0"
                >
                  <span className="text-white text-sm font-semibold">K</span>
                </div>
                
                <div className="bg-kimi-bg-secondary border border-kimi-border rounded-[18px_18px_18px_4px] px-5 py-4"
                >
                  <div className="flex gap-1"
                  >
                    <span className="w-2 h-2 bg-kimi-text-muted rounded-full animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <span className="w-2 h-2 bg-kimi-text-muted rounded-full animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span className="w-2 h-2 bg-kimi-text-muted rounded-full animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-kimi-border">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-kimi-bg-secondary rounded-3xl border border-kimi-border 
              focus-within:border-kimi-accent-blue/50 focus-within:ring-2 
              focus-within:ring-kimi-accent-blue/20 transition-all duration-200"
            >
              <div className="flex items-end gap-2 p-3"
              >
                <button className="p-2 text-kimi-text-muted hover:text-kimi-text-primary 
                  hover:bg-kimi-bg-tertiary rounded-xl transition-colors flex-shrink-0"
                >
                  <Paperclip className="w-5 h-5" />
                </button>
                
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Send a message..."
                  rows={1}
                  className="flex-1 bg-transparent border-0 outline-none resize-none 
                    text-kimi-text-primary placeholder-kimi-text-muted py-2.5 px-1
                    min-h-[44px] max-h-[200px]"
                />
                
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-2 rounded-xl flex-shrink-0 transition-all duration-200
                    bg-kimi-accent-blue text-white hover:bg-kimi-accent-blue-hover
                    disabled:bg-kimi-bg-tertiary disabled:text-kimi-text-muted 
                    disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <p className="text-center text-xs text-kimi-text-muted mt-2"
            >
              AI can make mistakes. Please verify important information.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Chat
