import React, { createContext, useContext, useState, useCallback } from 'react'
import type { Message } from '../types'
import { sendMessage as sendOpenAIMessage } from '../services/openai'

interface ChatContextType {
  messages: Record<string, Message[]>
  isLoading: Record<string, boolean>
  sendMessage: (chatId: string, text: string) => Promise<void>
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Record<string, Message[]>>({})
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({})

  const sendMessage = useCallback(async (chatId: string, text: string) => {
    if (!text.trim() || isLoading[chatId]) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), userMessage],
    }))

    setIsLoading((prev) => ({ ...prev, [chatId]: true }))

    try {
      const response = await sendOpenAIMessage(text)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'ai',
        timestamp: new Date(),
      }
      setMessages((prev) => ({
        ...prev,
        [chatId]: [...(prev[chatId] || []), aiMessage],
      }))
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, there was an error processing your request.',
        sender: 'ai',
        timestamp: new Date(),
      }
      setMessages((prev) => ({
        ...prev,
        [chatId]: [...(prev[chatId] || []), errorMessage],
      }))
    } finally {
      setIsLoading((prev) => ({ ...prev, [chatId]: false }))
    }
  }, [isLoading])

  return (
    <ChatContext.Provider value={{ messages, isLoading, sendMessage }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = (chatId: string) => {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider')
  }

  return {
    messages: context.messages[chatId] || [],
    isLoading: context.isLoading[chatId] || false,
    sendMessage: (text: string) => context.sendMessage(chatId, text),
  }
} 