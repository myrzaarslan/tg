import { ChakraProvider, Box, Grid, GridItem } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import ChatArea from './components/ChatArea'
import { useState } from 'react'
import { ChatProvider } from './context/ChatContext'

function App() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null)

  return (
    <ChakraProvider>
      <Router>
        <ChatProvider>
          <Box h="100vh" bg="gray.50">
            <Grid
              templateColumns="300px 1fr"
              h="100%"
              gap={0}
            >
              <GridItem borderRight="1px" borderColor="gray.200">
                <Sidebar onSelectChat={setSelectedChat} />
              </GridItem>
              <GridItem>
                <ChatArea selectedChat={selectedChat} />
              </GridItem>
            </Grid>
          </Box>
        </ChatProvider>
      </Router>
    </ChakraProvider>
  )
}

export default App
