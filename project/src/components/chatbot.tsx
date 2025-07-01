import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Database, Code, TrendingUp } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your GROWTHPULSE assistant. I can help you with our AI/Data Engineering, Full-Stack Development, and Digital Marketing services. How can I help you grow your business today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickReplies = [
    "Tell me about AI/Data services",
    "I need full-stack development",
    "Help with digital marketing",
    "What's your pricing?",
    "Book a consultation"
  ];

  const botResponses = {
    "tell me about ai/data services": "Our AI/Data Engineering services include Databricks lakehouse implementation, real-time data pipelines, ML model development, and data governance. We've helped clients achieve +300% data processing efficiency. Would you like to learn more about a specific area?",
    "i need full-stack development": "Great! We build custom web & mobile apps, cloud infrastructure, API integrations, and AI/ML implementations. From MVP prototyping to enterprise solutions, we deliver scalable applications. What type of project are you working on?",
    "help with digital marketing": "Our digital marketing services include PPC & Paid Media, SEO & Content, Analytics & CRO, and Software Marketing. We've achieved +127% average ROAS increases for our clients. What's your biggest marketing challenge?",
    "what's your pricing": "Our pricing is customized based on your specific needs and project scope. We offer flexible packages starting from $5K/month for marketing services and custom quotes for development projects. Would you like to discuss your requirements?",
    "book a consultation": "Perfect! I'd love to connect you with our growth strategists. You can book a free 30-minute consultation where we'll audit your current setup and provide a custom growth strategy. Shall I help you schedule that?",
    "databricks": "We're Databricks specialists! We implement lakehouse architecture, build real-time data pipelines, and create ML workflows. Our team has delivered +300% processing efficiency improvements. What's your current data challenge?",
    "machine learning": "Our ML services include model development, MLOps with MLflow, AutoML implementation, and production deployment. We work with PySpark, TensorFlow, and PyTorch. What ML use case are you exploring?",
    "marketing automation": "We build comprehensive marketing automation systems including email sequences, lead scoring, attribution modeling, and conversion optimization. What part of your marketing funnel needs automation?"
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase();
      let botResponse = "Thanks for your message! Our team specializes in AI/Data Engineering, Full-Stack Development, and Digital Marketing. Would you like to learn more about any of these services, or shall I connect you with a specialist?";
      
      // Check for keyword matches
      for (const [key, response] of Object.entries(botResponses)) {
        if (lowerInput.includes(key) || lowerInput.includes(key.replace(/\s+/g, ''))) {
          botResponse = response;
          break;
        }
      }
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue("");
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-black text-white p-4 rounded-full shadow-2xl hover:bg-gray-800 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white border border-gray-200 rounded-lg shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-black text-white p-4 rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-black" />
                </div>
                <div>
                  <h3 className="font-medium text-sm tracking-wide">GROWTHPULSE ASSISTANT</h3>
                  <p className="text-xs text-gray-300">AI • Development • Marketing</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-black' : 'bg-gray-200'}`}>
                      {message.sender === 'user' ? 
                        <User className="h-3 w-3 text-white" /> : 
                        <Bot className="h-3 w-3 text-black" />
                      }
                    </div>
                    <div className={`p-3 rounded-lg ${message.sender === 'user' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-gray-600 text-xs mb-2 tracking-wide">QUICK REPLIES:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-gray-200 text-black px-3 py-1 rounded-full hover:bg-gray-300 transition-colors flex items-center space-x-1"
                    >
                      {reply.includes('AI/Data') && <Database className="h-3 w-3" />}
                      {reply.includes('development') && <Code className="h-3 w-3" />}
                      {reply.includes('marketing') && <TrendingUp className="h-3 w-3" />}
                      <span>{reply}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about AI, Development, or Marketing..."
                  className="flex-1 bg-gray-200 text-black px-3 py-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-black"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-black text-white p-2 rounded hover:bg-gray-800 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};