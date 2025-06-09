import { useQuery, useMutation } from '@tanstack/react-query'
import axios from 'axios'

interface TelegramUser {
  id: number
  first_name: string
  username?: string
  photo_url?: string
}

export const useTelegramUser = () => {
  return useQuery<TelegramUser>({
    queryKey: ['telegramUser'],
    queryFn: async () => {
      const { data } = await axios.get('/api/telegram/user')
      return data
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

// Example of a mutation hook
export const useSendTelegramMessage = () => {
  return useMutation({
    mutationFn: async (message: string) => {
      const { data } = await axios.post('/api/telegram/send-message', { message })
      return data
    },
  })
} 