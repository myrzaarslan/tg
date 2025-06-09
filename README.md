# AI Chat Frontend

A modern chat application inspired by Telegram's design, featuring both human and AI chat capabilities.

## Features

- Telegram-inspired UI/UX
- Real-time chat interface
- AI chat integration using OpenAI
- Responsive design
- Modern React with TypeScript

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=your_api_key_here
   ```
   Replace `your_api_key_here` with your actual OpenAI API key. You can get one from the [OpenAI Platform](https://platform.openai.com/).

4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

The following environment variables are required:

- `VITE_OPENAI_API_KEY`: Your OpenAI API key

Note: In a production environment, you should not expose your OpenAI API key in the frontend. Instead, create a backend proxy to handle API calls securely.

## Project Structure

```
src/
  ├── components/     # React components
  │   ├── ChatArea.tsx
  │   ├── MessageInput.tsx
  │   ├── MessageList.tsx
  │   └── Sidebar.tsx
  ├── services/      # API services
  │   └── openai.ts
  ├── types/         # TypeScript types
  │   └── index.ts
  ├── utils/         # Utility functions
  ├── hooks/         # Custom React hooks
  │   └── useChat.ts
  └── assets/        # Static assets
```

## Technologies Used

- React
- TypeScript
- Vite
- Chakra UI
- OpenAI API
- React Router
- React Icons

## Security Note

In a production environment, you should not expose your OpenAI API key in the frontend. Instead, create a backend proxy to handle API calls securely. This is important because:

1. API keys should never be exposed to the client
2. Rate limiting and usage monitoring should be handled server-side
3. Additional security measures can be implemented (e.g., user authentication)

## License

MIT
