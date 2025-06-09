import { Box, Input, Button, Flex } from '@chakra-ui/react'
import { FiSend } from 'react-icons/fi'

interface MessageInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  isLoading: boolean
}

const MessageInput = ({ value, onChange, onSend, isLoading }: MessageInputProps) => {
  return (
    <Box p={4} borderTop="1px" borderColor="gray.200">
      <Flex>
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type a message..."
          mr={2}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              onSend()
            }
          }}
          disabled={isLoading}
        />
        <Button
          colorScheme="blue"
          onClick={onSend}
          isLoading={isLoading}
          loadingText="Sending..."
        >
          <FiSend />
        </Button>
      </Flex>
    </Box>
  )
}

export default MessageInput 