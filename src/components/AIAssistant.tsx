import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, Mic, MicOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const quickReplies = [
  "Tell me about your experience",
  "What projects have you worked on?",
  "What are your key skills?",
  "How can I contact you?",
];

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "👋 Hello! I'm Innocentia's AI assistant. I can help you learn about her skills, projects, and experience. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('experience') || lowerQuery.includes('work')) {
      return "Innocentia has experience as an Administrator at Phokeng School Clothing and Stationery (2018-2022), and has been actively developing AI/ML projects. She holds an NQF Level 4 in IT Technical Support and Project Management. She's currently seeking AI/ML engineering opportunities.";
    }
    
    if (lowerQuery.includes('project') || lowerQuery.includes('portfolio')) {
      return "🚀 Featured projects include:\n\n• **EmotiView** (Capstone) - AI sentiment analysis with Gemini 2.5\n• **ResumeCraft** - AI-powered resume builder\n• **EduGenius AI** - Curriculum designer with 5 AI tools\n• **Domino AI** - Interactive AI learning platform\n\nAll projects are live on Vercel!";
    }
    
    if (lowerQuery.includes('skill') || lowerQuery.includes('tech')) {
      return "🛠️ Core competencies:\n\n• **AI/ML**: TensorFlow, PyTorch, Scikit-learn\n• **Languages**: Python, JavaScript, SQL\n• **Data**: Pandas, NumPy, PostgreSQL\n• **Cloud**: AWS, Google Cloud, Docker\n• **Specialties**: NLP, Computer Vision, MLOps";
    }
    
    if (lowerQuery.includes('contact') || lowerQuery.includes('reach') || lowerQuery.includes('email')) {
      return "📬 You can reach Innocentia through:\n\n• **LinkedIn**: linkedin.com/in/innocentia-jiwa-604b82135\n• **GitHub**: github.com/mbalenhle0102\n• **Contact Form**: Scroll down to send a direct message!\n\n✨ She's currently available for AI/ML opportunities.";
    }
    
    if (lowerQuery.includes('education') || lowerQuery.includes('certification') || lowerQuery.includes('degree')) {
      return "🎓 Education & Certifications:\n\n• NQF Level 4: IT Technical Support\n• NQF Level 4: Project Management\n• 10+ AI/ML certifications from DeepLearning.AI, IBM, Google, Microsoft\n• Courses in LLMs, Prompt Engineering, and AI Ethics";
    }
    
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
      return "Hello there! 👋 Great to meet you! I'm here to help you learn about Innocentia's AI/ML journey. Feel free to ask about her projects, skills, or how to get in touch!";
    }
    
    return "That's a great question! Innocentia specializes in AI/ML engineering with expertise in Python, machine learning, and data analysis. Would you like to know more about her projects, skills, or how to contact her?";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    // Simulate AI thinking
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));
    
    const response = generateResponse(userMessage);
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
    handleSend();
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice recognition would be implemented here
  };

  return (
    <>
      {/* Floating AI Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-2xl ${isOpen ? 'hidden' : 'flex'} items-center gap-2 group`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Bot size={24} />
        <span className="hidden sm:inline font-medium">AI Assistant</span>
        <Sparkles size={16} className="absolute -top-1 -right-1 text-amber-400 animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[550px] max-h-[calc(100vh-6rem)] flex flex-col rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, hsl(222 47% 10% / 0.95), hsl(222 47% 6% / 0.98))',
              backdropFilter: 'blur(20px)',
              border: '1px solid hsl(217 20% 20% / 0.5)',
              boxShadow: '0 25px 50px -12px hsl(0 0% 0% / 0.5), 0 0 50px hsl(185 80% 55% / 0.1)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/30 bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Bot size={20} className="text-primary-foreground" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">AI Assistant</h3>
                  <p className="text-xs text-muted-foreground">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-secondary/50 rounded-lg transition-colors"
              >
                <X size={18} className="text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-br-md'
                        : 'bg-secondary/50 text-foreground rounded-bl-md border border-border/30'
                    }`}
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-secondary/50 border border-border/30 p-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setMessages(prev => [...prev, { role: 'user', content: reply }]);
                        setIsTyping(true);
                        setTimeout(() => {
                          setIsTyping(false);
                          setMessages(prev => [...prev, { role: 'assistant', content: generateResponse(reply) }]);
                        }, 1000);
                      }}
                      className="px-3 py-1.5 text-xs bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-full transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border/30 bg-secondary/20">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleVoice}
                  className={`p-2.5 rounded-xl transition-all ${
                    isListening 
                      ? 'bg-primary text-primary-foreground animate-pulse' 
                      : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
                  }`}
                >
                  {isListening ? <Mic size={18} /> : <MicOff size={18} />}
                </button>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-secondary/50 border border-border/50 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="p-2.5 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
