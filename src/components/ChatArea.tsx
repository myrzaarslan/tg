import { Box, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useChat } from '../context/ChatContext'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

interface ChatAreaProps {
  selectedChat: string | null
}

const ChatArea = ({ selectedChat }: ChatAreaProps) => {
  const [newMessage, setNewMessage] = useState('')
  const { messages, isLoading, sendMessage } = useChat(selectedChat || '')

  const handleSendMessage = async () => {
    if (!newMessage.trim() || isLoading || !selectedChat) return
    await sendMessage(newMessage)
    setNewMessage('')
  }

  if (!selectedChat) {
    return (
      <Box h="100%" display="flex" alignItems="center" justifyContent="center">
        <Text color="gray.500">Select a chat to start messaging</Text>
      </Box>
    )
  }

  return (
    <Box h="100%" display="flex" flexDirection="column">
      <MessageList messages={messages} />
      <MessageInput
        value={newMessage}
        onChange={setNewMessage}
        onSend={handleSendMessage}
        isLoading={isLoading}
      />
    </Box>
  )
}

export default ChatArea 