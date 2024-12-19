import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

const ChatMessage = ({
  message,
  isBot,
}: {
  message: string;
  isBot: boolean;
}) => (
  <div className={cn('flex gap-3 p-4', isBot ? 'bg-gray-50' : ' ')}>
    {isBot ? (
      <Bot className="h-8 w-8 text-green-600" />
    ) : (
      <User className="h-8 w-8 text-gray-600" />
    )}
    <div className="flex-1">
      <p className="font-medium mb-1">{isBot ? 'Gemini' : 'You'}</p>
      <p className="text-gray-700 whitespace-pre-wrap">{message}</p>
    </div>
  </div>
);
export default ChatMessage