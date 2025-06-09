export interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

export interface Chat {
  id: string
  name: string
  lastMessage: string
  avatar: string
} 