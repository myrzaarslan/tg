import React from 'react'
import { Box, Text, Spinner, Button, Input, VStack } from '@chakra-ui/react'
import { useTelegramUser, useSendTelegramMessage } from '../hooks/useTelegramQuery'

export const TelegramUserProfile: React.FC = () => {
  const { data: user, isLoading, error } = useTelegramUser()
  const [message, setMessage] = React.useState('')
  const sendMessage = useSendTelegramMessage()

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <Text color="red.500">Error loading user data</Text>
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage.mutate(message)
      setMessage('')
    }
  }

  return (
    <VStack spacing={4} align="stretch">
      <Box p={4} borderWidth={1} borderRadius="lg">
        <Text fontSize="xl" fontWeight="bold">
          {user?.first_name}
        </Text>
        {user?.username && (
          <Text color="gray.600">@{user.username}</Text>
        )}
      </Box>

      <Box>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          mb={2}
        />
        <Button
          colorScheme="blue"
          onClick={handleSendMessage}
          isLoading={sendMessage.isPending}
        >
          Send Message
        </Button>
      </Box>
    </VStack>
  )
} 