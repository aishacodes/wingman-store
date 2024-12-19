import { FormEvent, useEffect, useRef, useState } from 'react';
import { Send, Bot, Trash } from 'lucide-react';
import run from '@/lib/gemini';
import ChatMessage from "../molecules/ChatMessage";


const STORAGE_KEY = 'chatbot-messages';

const ChatBot = () => {
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>(
    []
  );
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClearChat = () => {
    setMessages([]);
    setInput('');
    localStorage.removeItem(STORAGE_KEY);

  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); 

  useEffect(() => {
    const savedMessages = localStorage.getItem(STORAGE_KEY);
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (error) {
        console.error('Error loading messages:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }else{
      setMessages([{ text: "Hi, I'm your Assistant. How may I help you today?", isBot: true }])
    }
  }, []);
  if (messages.length > 0) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);
    setInput('');
    setIsLoading(true);
    try {
      const response = await run(input);
      if (!response.text) {
        throw new Error('Failed to fetch response');
      }
      setMessages((prev) => [...prev, { text: response.text(), isBot: true }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          text: "I apologize, but I'm having trouble connecting right now. Please try again.",
          isBot: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="bg-white shadow-sm border-b px-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold"> Chat Assistant</h1>
        {messages.length > 0 && (
          <button
            onClick={handleClearChat}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-lg"
            title="Clear chat"
          >
            <Trash className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            Send a message to start the conversation
          </div>
        )}
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isBot={message.isBot}
          />
        ))}
        {isLoading && (
          <div className="flex gap-2 items-center text-gray-500 p-4">
            <Bot className="h-5 w-5 animate-pulse" />
            <p>Thinking...</p>
          </div>
        )}
         <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;
