import { Box, Spinner, Text, VStack } from '@chakra-ui/react'

interface LoadingSpinnerProps {
  text?: string
}

const LoadingSpinner = ({ text = 'Loading...' }: LoadingSpinnerProps) => {
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      zIndex={1000}
    >
      <VStack gap={4}>
        <Spinner
          size="xl"
          color="blue.500"
          emptyColor="gray.200"
        />
        <Text color="gray.500">{text}</Text>
      </VStack>
    </Box>
  )
}

export default LoadingSpinner 