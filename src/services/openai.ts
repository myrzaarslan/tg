import OpenAI from 'openai'

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Note: In production, you should use a backend proxy
})

export const sendMessage = async (message: string): Promise<string> => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo',
    })

    return completion.choices[0]?.message?.content || 'Sorry, I could not process your request.'
  } catch (error) {
    console.error('Error calling OpenAI API:', error)
    return 'Sorry, there was an error processing your request.'
  }
} 