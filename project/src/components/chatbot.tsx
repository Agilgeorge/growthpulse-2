import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Database,
  Code,
  TrendingUp,
  Target,
  BarChart3,
  Mail,
  Zap,
} from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text:
        "Hi! I'm your GrowthPulse assistant. I specialize in performance-driven digital marketing—PPC, SEO, lead generation, conversion optimization, and revenue scaling. How can I help accelerate your growth today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = (): void => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickReplies = [
    { text: "Generate more qualified leads", icon: Target },
    { text: "Manage my PPC campaigns", icon: Code },
    { text: "Improve my SEO rankings", icon: Database },
    { text: "Optimize conversion rates", icon: TrendingUp },
    { text: "Set up marketing automation", icon: Zap },
    { text: "Book a strategy consultation", icon: Mail },
    { text: "View case studies & results", icon: BarChart3 },
    { text: "Pricing and packages", icon: Mail },
  ];

  const botResponses: Array<{
    keywords: string[];
    response: string;
    followUp?: string[];
  }> = [
    {
      keywords: [
        "lead generation",
        "lead gen",
        "leads",
        "generate leads",
        "qualified leads",
        "more leads",
      ],
      response:
        "We generate qualified leads through integrated campaigns: targeted PPC ads, SEO-optimized content, conversion-focused landing pages, and automated email nurturing. Our typical clients see 2-3X lead growth within 90 days.",
      followUp: [
        "What's your current lead volume?",
        "Which channels are you using now?",
        "Book a free lead audit",
      ],
    },
    {
      keywords: [
        "ppc",
        "paid ads",
        "google ads",
        "facebook ads",
        "meta ads",
        "linkedin ads",
        "ad management",
        "campaign management",
      ],
      response:
        "We manage high-performance PPC campaigns across Google, Meta (Facebook/Instagram), and LinkedIn. Our data-driven approach focuses on maximizing ROAS through strategic targeting, compelling creatives, and continuous optimization. Average client sees +127% ROAS improvement.",
      followUp: [
        "What's your current ad spend?",
        "Which platforms interest you most?",
        "See our PPC case studies",
      ],
    },
    {
      keywords: [
        "seo",
        "search engine optimization",
        "organic traffic",
        "rankings",
        "search rankings",
        "google ranking",
      ],
      response:
        "Our SEO strategy combines technical optimization, authoritative link building, and content marketing to boost organic visibility. We focus on driving qualified traffic that converts, not just rankings. Typical results: 150-300% organic traffic increase within 6 months.",
      followUp: [
        "What keywords are you targeting?",
        "Current organic traffic volume?",
        "Request SEO audit",
      ],
    },
    // ... (other responses remain the same)
  ];

  const defaultResponse = {
    text: "Thanks for reaching out! GrowthPulse specializes in performance-driven digital marketing that generates real results. Whether you need more leads, better conversions, or revenue growth, we can help. What's your biggest marketing challenge right now?",
    followUp: ["Book free consultation", "Email anba@growthpulse.com", "Explore our services"],
  };

  function getBotResponse(
    input: string
  ): { text: string; followUp?: string[] } {
    const lowerInput = input.toLowerCase();
    let bestMatch = { score: 0, response: defaultResponse };

    for (const { keywords, response, followUp } of botResponses) {
      let score = 0;

      for (const keyword of keywords) {
        const keywordLower = keyword.toLowerCase();

        if (lowerInput.includes(keywordLower)) {
          score += 10;
        }

        const keywordWords = keywordLower.split(" ");
        const inputWords = lowerInput.split(/[\s\-_]+/);

        for (const kw of keywordWords) {
          for (const iw of inputWords) {
            if (kw === iw) score += 5;
            if (kw.length > 3 && iw.includes(kw)) score += 3;
            if (iw.length > 3 && kw.includes(iw)) score += 2;
          }
        }
      }

      if (score > bestMatch.score) {
        bestMatch = { score, response: { text: response, followUp: followUp ?? [] } };
      }
    }

    return bestMatch.response;
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(userMessage.text);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse.text,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);

      if (botResponse.followUp && botResponse.followUp.length > 0) {
        setTimeout(() => {
          const followUpMessage: Message = {
            id: Date.now() + 2,
            text: `Quick actions: ${botResponse.followUp!.join(" • ")}`,
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, followUpMessage]);
        }, 1000);
      }
    }, 800 + Math.random() * 400);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 bg-black text-white p-4 rounded-full shadow-2xl hover:bg-gray-800 transition-all duration-300 transform ${
          isOpen ? "rotate-90" : "hover:scale-105"
        }`}
        style={{
          boxShadow: isOpen
            ? "0 10px 25px rgba(0,0,0,0.3)"
            : "0 10px 25px rgba(0,0,0,0.2), 0 0 0 3px rgba(59, 130, 246, 0.5)",
        }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white border border-gray-200 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 transform ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-5 scale-95"
          }`}
          role="region"
          aria-label="Chatbot window"
        >
          {/* Header */}
          <div
            className="bg-black text-white p-4"
            style={{
              background: "linear-gradient(135deg, #000000 0%, #374151 100%)",
            }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5 text-black" />
              </div>
              <div>
                <h3 className="font-semibold text-sm tracking-wide">
                  GROWTHPULSE ASSISTANT
                </h3>
                <p className="text-xs text-gray-300">
                  Performance Marketing Bot • Online
                </p>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
            style={{ scrollBehavior: "smooth" }}
            aria-live="polite"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                } animate-fadeIn`}
                role="listitem"
              >
                <div
                  className={`flex items-start space-x-2 max-w-[85%] ${
                    message.sender === "user"
                      ? "flex-row-reverse space-x-reverse"
                      : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === "user"
                        ? "bg-black"
                        : "bg-white border-2 border-gray-200"
                    }`}
                    style={
                      message.sender === "user"
                        ? {
                            background:
                              "linear-gradient(135deg, #000000 0%, #374151 100%)",
                          }
                        : {}
                    }
                    aria-label={message.sender === "user" ? "You" : "GrowthPulse Bot"}
                  >
                    {message.sender === "user" ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-black" />
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-2xl shadow-sm ${
                      message.sender === "user"
                        ? "bg-black text-white"
                        : "bg-white text-gray-800 border border-gray-200"
                    }`}
                    style={
                      message.sender === "user"
                        ? {
                            background:
                              "linear-gradient(135deg, #000000 0%, #374151 100%)",
                          }
                        : {}
                    }
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fadeIn" aria-live="polite">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-black" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200">
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div
              className="p-4 border-t border-gray-200 bg-white animate-fadeIn"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="text-gray-600 text-xs mb-3 font-medium tracking-wide">
                QUICK ACTIONS:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map((reply, index) => {
                  const Icon = reply.icon;
                  return (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Quick action: ${reply.text}`}
                      onClick={() => handleQuickReply(reply.text)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 hover:shadow-sm"
                    >
                      <Icon className="h-3 w-3" />
                      <span className="truncate">{reply.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about leads, PPC, SEO, conversions..."
                className="flex-1 bg-gray-100 text-gray-800 px-4 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all duration-200"
                disabled={isTyping}
                aria-label="Chat input"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background:
                    !inputValue.trim() || isTyping
                      ? "#6b7280"
                      : "linear-gradient(135deg, #000000 0%, #374151 100%)",
                }}
                aria-label="Send message"
                type="button"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Press Enter to send • Powered by GrowthPulse AI
            </p>
          </div>

          {/* Custom CSS for animations */}
          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-fadeIn {
              animation: fadeIn 0.3s ease-out;
            }

            .animate-bounce {
              animation: bounce 1.4s infinite;
            }

            @keyframes bounce {
              0%, 80%, 100% {
                transform: translateY(0);
              }
              40% {
                transform: translateY(-6px);
              }
            }

            .animate-pulse {
              animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }

            @keyframes pulse {
              0%, 100% {
                opacity: 1;
              }
              50% {
                opacity: 0.5;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
};
