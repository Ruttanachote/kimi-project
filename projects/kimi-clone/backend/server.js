const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const sqlite3 = require('sqlite3').verbose()
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8000
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Middleware
app.use(cors())
app.use(express.json())

// Database setup
const db = new sqlite3.Database(process.env.DATABASE_URL || './data/kimi.db')

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`)

  db.run(`CREATE TABLE IF NOT EXISTS conversations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )`)

  db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    conversation_id INTEGER NOT NULL,
    role TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (conversation_id) REFERENCES conversations(id)
  )`)
})

// Auth middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Access token required' })
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' })
    }
    req.user = user
    next()
  })
}

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Register
app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' })
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    
    db.run(
      'INSERT INTO users (email, password) VALUES (?, ?)',
      [email, hashedPassword],
      function(err) {
        if (err) {
          if (err.message.includes('UNIQUE constraint failed')) {
            return res.status(409).json({ error: 'Email already exists' })
          }
          return res.status(500).json({ error: err.message })
        }
        
        const token = jwt.sign({ userId: this.lastID, email }, JWT_SECRET)
        res.status(201).json({ token, user: { id: this.lastID, email } })
      }
    )
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' })
  }

  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const validPassword = await bcrypt.compare(password, user.password)
    
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET)
    res.json({ token, user: { id: user.id, email: user.email } })
  })
})

// Get conversations
app.get('/api/conversations', authenticateToken, (req, res) => {
  db.all(
    'SELECT * FROM conversations WHERE user_id = ? ORDER BY updated_at DESC',
    [req.user.userId],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message })
      }
      res.json(rows)
    }
  )
})

// Create conversation
app.post('/api/conversations', authenticateToken, (req, res) => {
  const { title } = req.body

  db.run(
    'INSERT INTO conversations (user_id, title) VALUES (?, ?)',
    [req.user.userId, title || 'New Chat'],
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message })
      }
      res.status(201).json({ id: this.lastID, title: title || 'New Chat' })
    }
  )
})

// Get messages
app.get('/api/conversations/:id/messages', authenticateToken, (req, res) => {
  const conversationId = req.params.id

  db.all(
    'SELECT * FROM messages WHERE conversation_id = ? ORDER BY created_at ASC',
    [conversationId],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message })
      }
      res.json(rows)
    }
  )
})

// Send message
app.post('/api/conversations/:id/messages', authenticateToken, (req, res) => {
  const conversationId = req.params.id
  const { content, role = 'user' } = req.body

  db.run(
    'INSERT INTO messages (conversation_id, role, content) VALUES (?, ?, ?)',
    [conversationId, role, content],
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message })
      }

      // Update conversation timestamp
      db.run(
        'UPDATE conversations SET updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        [conversationId]
      )

      res.status(201).json({
        id: this.lastID,
        conversation_id: conversationId,
        role,
        content,
        created_at: new Date().toISOString()
      })
    }
  )
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
