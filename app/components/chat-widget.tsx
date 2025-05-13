"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"

type Message = {
    id: number
    text: string
    isUser: boolean
}

// Mock responses for common questions
const mockResponses: Record<string, string> = {
    "how do i sell my license":
        "To sell your license, simply upload your license details through our platform. Our system will provide a valuation within minutes, and once you accept, we'll handle the rest of the process.",
    "what licenses do you accept":
        "We accept licenses from major software providers including Adobe, Microsoft, Autodesk, JetBrains, and many more. If you're unsure about a specific license, feel free to ask!",
    "how long does it take to get paid":
        "Once your license is sold, payment is typically processed within 1-3 business days, depending on your preferred payment method.",
    "is this service available internationally":
        "Yes, SoftSell is available internationally. We work with clients from around the world to help them sell their unused software licenses.",
    "how do you determine the value":
        "We determine the value of your license based on several factors including the software type, remaining subscription period, current market demand, and original purchase price.",
}

// Example questions to show as suggestions
const exampleQuestions = [
    "How do I sell my license?",
    "What licenses do you accept?",
    "How long does it take to get paid?",
]

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hi there! How can I help you with selling your software licenses today?", isUser: false },
    ])
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Auto-scroll to bottom of messages
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages])

    const handleSend = () => {
        if (input.trim() === "") return

        // Add user message
        const userMessageId = Date.now()
        setMessages((prev) => [...prev, { id: userMessageId, text: input, isUser: true }])

        // Show typing indicator
        setIsTyping(true)

        // Find response
        const query = input.toLowerCase().trim()
        let response = "I'm not sure about that. Please contact our support team for more information."

        // Check if the query contains any of our keywords
        for (const [key, value] of Object.entries(mockResponses)) {
            if (query.includes(key)) {
                response = value
                break
            }
        }

        // Add bot response after a short delay
        setTimeout(() => {
            setIsTyping(false)
            setMessages((prev) => [...prev, { id: userMessageId + 1, text: response, isUser: false }])
        }, 1500)

        setInput("")
    }

    const handleQuestionClick = (question: string) => {
        setInput(question)
    }

    return (
        <>
            {/* Chat toggle button */}
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
            >
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center ${isOpen ? "bg-destructive hover:bg-destructive/90" : "bg-teal-500 hover:bg-teal-600"
                        }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={isOpen ? "Close chat" : "Open chat"}
                >
                    {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
                </motion.button>
            </motion.div>

            {/* Chat window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-24 right-6 w-80 md:w-96 bg-card/95 backdrop-blur-md rounded-lg shadow-xl z-50 overflow-hidden border"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="bg-primary p-4 text-primary-foreground">
                            <div className="flex items-center gap-2">
                                <Bot className="h-5 w-5" />
                                <div>
                                    <h3 className="font-semibold">SoftSell Assistant</h3>
                                    <p className="text-xs opacity-80">Online</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    className={`flex gap-2 max-w-[90%] ${message.isUser ? "ml-auto" : "mr-auto"}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {message.isUser ? (
                                        <>
                                            <div className="p-3 rounded-lg bg-primary/10 user-message">{message.text}</div>
                                            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                                                <User className="h-3.5 w-3.5 text-muted-foreground" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Bot className="h-3.5 w-3.5 text-primary" />
                                            </div>
                                            <div className="p-3 rounded-lg bg-secondary bot-message">{message.text}</div>
                                        </>
                                    )}
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex gap-2 max-w-[90%] mr-auto">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <Bot className="h-3.5 w-3.5 text-primary" />
                                    </div>
                                    <div className="p-3 rounded-lg bg-secondary bot-message">
                                        <div className="flex space-x-2">
                                            <motion.div
                                                className="w-2 h-2 rounded-full bg-primary/50"
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                                            />
                                            <motion.div
                                                className="w-2 h-2 rounded-full bg-primary/50"
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ duration: 0.6, delay: 0.2, repeat: Number.POSITIVE_INFINITY }}
                                            />
                                            <motion.div
                                                className="w-2 h-2 rounded-full bg-primary/50"
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ duration: 0.6, delay: 0.4, repeat: Number.POSITIVE_INFINITY }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {messages.length <= 2 && (
                            <div className="px-4 pb-2">
                                <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
                                <div className="flex flex-wrap gap-2">
                                    {exampleQuestions.map((question, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => handleQuestionClick(question)}
                                            className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded-full text-muted-foreground"
                                            whileHover={{ scale: 1.05, backgroundColor: "var(--muted)" }}
                                        >
                                            {question}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Chat input */}
                        <div className="p-3 border-t">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-muted/50 border rounded-md px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                                />
                                <Button onClick={handleSend} size="icon" disabled={!input.trim()} className="shrink-0">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
