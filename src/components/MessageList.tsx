import { Box, VStack, Flex, Text, Avatar } from '@chakra-ui/react'
import type { Message } from '../types'
import { formatTimestamp } from '../utils/date'

interface MessageListProps {
  messages: Message[]
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <Box flex={1} overflowY="auto" p={4}>
      <VStack spacing={4} align="stretch">
        {messages.map((message) => (
          <Flex
            key={message.id}
            justify={message.sender === 'user' ? 'flex-end' : 'flex-start'}
          >
            <Flex
              maxW="70%"
              bg={message.sender === 'user' ? 'blue.500' : 'gray.100'}
              color={message.sender === 'user' ? 'white' : 'black'}
              p={3}
              borderRadius="lg"
              align="center"
              direction="column"
            >
              <Flex align="center" w="100%">
                {message.sender === 'ai' && (
                  <Avatar size="sm" mr={2}>
                    🤖
                  </Avatar>
                )}
                <Text>{message.text}</Text>
              </Flex>
              <Text
                fontSize="xs"
                color={message.sender === 'user' ? 'whiteAlpha.800' : 'gray.500'}
                mt={1}
                alignSelf="flex-end"
              >
                {formatTimestamp(message.timestamp)}
              </Text>
            </Flex>
          </Flex>
        ))}
      </VStack>
    </Box>
  )
}

export default MessageList 