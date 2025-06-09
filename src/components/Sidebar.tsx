import { Box, VStack, Input, InputGroup, InputLeftElement, Text, Avatar, Flex } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

interface SidebarProps {
  onSelectChat: (chatId: string) => void
}

const Sidebar = ({ onSelectChat }: SidebarProps) => {
  const chats = [
    { id: '1', name: 'AI Assistant', lastMessage: 'How can I help you today?', avatar: '🤖' },
    { id: '2', name: 'John Doe', lastMessage: 'Hey, how are you?', avatar: '👤' },
    { id: '3', name: 'Alice Smith', lastMessage: 'See you tomorrow!', avatar: '👤' },
  ]

  return (
    <Box h="100%" bg="white">
      <Box p={4}>
        <InputGroup>
          <InputLeftElement>
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input placeholder="Search" variant="filled" />
        </InputGroup>
      </Box>

      <VStack gap={0} align="stretch">
        {chats.map((chat) => (
          <Box
            key={chat.id}
            p={4}
            cursor="pointer"
            _hover={{ bg: 'gray.50' }}
            onClick={() => onSelectChat(chat.id)}
          >
            <Flex align="center">
              <Avatar size="sm" mr={3}>
                {chat.avatar}
              </Avatar>
              <Box flex={1}>
                <Text fontWeight="bold">{chat.name}</Text>
                <Text fontSize="sm" color="gray.500" noOfLines={1}>
                  {chat.lastMessage}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

export default Sidebar 