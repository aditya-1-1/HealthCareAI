"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  LucideSend,
  LucideLoader2,
  LucideBot,
  LucideUser,
  LucideInfo,
  LucideX,
  LucideMessageSquare,
  LucideSearch,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  source?: string
}

// Import medical databases
import { medicationsDatabase } from "@/data/medications-database"
import { diseasesDatabase } from "@/data/diseases-database"
import { treatmentsDatabase } from "@/data/treatments-database"
import { symptomsDatabase } from "@/data/symptoms-database"
import { nutritionDatabase } from "@/data/nutrition-database"

export default function Chatbot() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I'm your healthcare assistant with access to medical databases. How can I help you today? You can ask me about medications, diseases, symptoms, treatments, or nutrition.",
      timestamp: new Date(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input on load
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Function to search across all databases
  const searchMedicalDatabases = (query: string) => {
    const normalizedQuery = query.toLowerCase()
    const results: any[] = []
    let source = ""
    let content = ""

    // Search medications database
    const medicationMatches = Object.entries(medicationsDatabase).filter(([key, data]) => {
      return (
        key.toLowerCase().includes(normalizedQuery) ||
        data.description.toLowerCase().includes(normalizedQuery) ||
        data.uses.some((use) => use.toLowerCase().includes(normalizedQuery)) ||
        data.sideEffects.some((effect) => effect.toLowerCase().includes(normalizedQuery))
      )
    })

    if (medicationMatches.length > 0) {
      const [key, data] = medicationMatches[0]
      source = "MedlinePlus Medications Database"
      content = `**${key}** (${data.category}):\n\n**Description**: ${data.description}\n\n**Uses**: ${data.uses.join(", ")}\n\n**Side Effects**: ${data.sideEffects.join(", ")}\n\n**Precautions**: ${data.precautions}`
      results.push({ source, content })
    }

    // Search diseases database
    const diseaseMatches = Object.entries(diseasesDatabase).filter(([key, data]) => {
      return (
        key.toLowerCase().includes(normalizedQuery) ||
        data.description.toLowerCase().includes(normalizedQuery) ||
        data.symptoms.some((symptom) => symptom.toLowerCase().includes(normalizedQuery))
      )
    })

    if (diseaseMatches.length > 0) {
      const [key, data] = diseaseMatches[0]
      source = "CDC Disease Database"
      content = `**${key}**:\n\n**Description**: ${data.description}\n\n**Symptoms**: ${data.symptoms.join(", ")}\n\n**Treatments**: ${data.treatments.join(", ")}\n\n**Prevention**: ${data.prevention}`
      results.push({ source, content })
    }

    // Search symptoms database
    const symptomMatches = Object.entries(symptomsDatabase).filter(([key, data]) => {
      return (
        key.toLowerCase().includes(normalizedQuery) ||
        data.description.toLowerCase().includes(normalizedQuery) ||
        data.possibleCauses.some((cause) => cause.toLowerCase().includes(normalizedQuery))
      )
    })

    if (symptomMatches.length > 0) {
      const [key, data] = symptomMatches[0]
      source = "Mayo Clinic Symptoms Database"
      content = `**${key}**:\n\n**Description**: ${data.description}\n\n**Possible Causes**: ${data.possibleCauses.join(", ")}\n\n**When to See a Doctor**: ${data.whenToSeeDoctor}\n\n**Home Remedies**: ${data.homeRemedies.join(", ")}`
      results.push({ source, content })
    }

    // Search treatments database
    const treatmentMatches = Object.entries(treatmentsDatabase).filter(([key, data]) => {
      return (
        key.toLowerCase().includes(normalizedQuery) ||
        data.description.toLowerCase().includes(normalizedQuery) ||
        data.conditions.some((condition) => condition.toLowerCase().includes(normalizedQuery))
      )
    })

    if (treatmentMatches.length > 0) {
      const [key, data] = treatmentMatches[0]
      source = "NIH Treatment Guidelines"
      content = `**${key}**:\n\n**Description**: ${data.description}\n\n**Used For**: ${data.conditions.join(", ")}\n\n**Procedure**: ${data.procedure}\n\n**Effectiveness**: ${data.effectiveness}\n\n**Risks**: ${data.risks}`
      results.push({ source, content })
    }

    // Search nutrition database
    const nutritionMatches = Object.entries(nutritionDatabase).filter(([key, data]) => {
      return (
        key.toLowerCase().includes(normalizedQuery) ||
        data.description.toLowerCase().includes(normalizedQuery) ||
        data.benefits.some((benefit) => benefit.toLowerCase().includes(normalizedQuery))
      )
    })

    if (nutritionMatches.length > 0) {
      const [key, data] = nutritionMatches[0]
      source = "USDA Nutrition Database"
      content = `**${key}**:\n\n**Description**: ${data.description}\n\n**Benefits**: ${data.benefits.join(", ")}\n\n**Recommended Intake**: ${data.recommendedIntake}\n\n**Food Sources**: ${data.foodSources.join(", ")}`
      results.push({ source, content })
    }

    return results
  }

  // Function to generate a response based on the query
  const generateResponse = (query: string) => {
    // Search all databases
    const results = searchMedicalDatabases(query)
    setSearchResults(results)

    if (results.length > 0) {
      // Return the first result
      return {
        content: results[0].content,
        source: results[0].source,
      }
    }

    // If no specific match is found, provide a general response
    return {
      content:
        "I don't have specific information about that in my medical databases. Please try asking about common medications, diseases, symptoms, treatments, or nutrition topics. For medical concerns, I recommend consulting with a healthcare professional.",
      source: "General Response",
    }
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate processing delay
    setTimeout(() => {
      const response = generateResponse(userMessage.content)

      const botMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: response.content,
        timestamp: new Date(),
        source: response.source,
      }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1000)
  }

  const clearChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hello! I'm your healthcare assistant with access to medical databases. How can I help you today? You can ask me about medications, diseases, symptoms, treatments, or nutrition.",
        timestamp: new Date(),
      },
    ])
    setSearchResults([])
  }

  const suggestionQuestions = [
    "What is hypertension?",
    "Tell me about ibuprofen",
    "What are the symptoms of diabetes?",
    "How much vitamin C should I take daily?",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Health Assistant
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your healthcare companion with access to medical databases. Ask questions about medications, diseases,
            symptoms, treatments, or nutrition.
          </p>
        </div>

        <Card className="border-primary/20 shadow-lg overflow-hidden h-[70vh] flex flex-col">
          <div className="bg-gradient-to-r from-primary to-primary/70 h-1 w-full" />
          <CardHeader className="px-4 py-3 border-b flex-row justify-between items-center space-y-0">
            <CardTitle className="flex items-center gap-2 text-lg font-medium">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <LucideBot className="h-5 w-5 text-primary" />
              </div>
              Health Assistant
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8"
                onClick={() => setShowInfo(!showInfo)}
              >
                <LucideInfo className="h-4 w-4" />
                <span className="sr-only">Information</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8 text-muted-foreground hover:text-destructive"
                onClick={clearChat}
              >
                <LucideX className="h-4 w-4" />
                <span className="sr-only">Clear chat</span>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-0">
            <AnimatePresence>
              {showInfo && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-primary/5 p-4 border-b"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <LucideInfo className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">About Health Assistant</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        I'm a healthcare assistant with access to the following medical databases:
                      </p>
                      <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                        <li>MedlinePlus Medications Database</li>
                        <li>CDC Disease Database</li>
                        <li>Mayo Clinic Symptoms Database</li>
                        <li>NIH Treatment Guidelines</li>
                        <li>USDA Nutrition Database</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong>Note:</strong> I'm not a replacement for professional medical advice. Always consult
                        with a healthcare provider for medical concerns.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="p-4 space-y-6">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div className="flex items-start gap-3 max-w-[80%] group">
                    {message.role === "assistant" && (
                      <Avatar className="mt-1">
                        <AvatarFallback className="bg-primary/20">
                          <LucideBot className="h-5 w-5 text-primary" />
                        </AvatarFallback>
                      </Avatar>
                    )}

                    <div
                      className={cn(
                        "rounded-2xl px-4 py-3 shadow-sm",
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                      )}
                    >
                      <div className="text-sm whitespace-pre-wrap">
                        {message.source && message.role === "assistant" && (
                          <div className="mb-1">
                            <Badge variant="outline" className="text-xs font-normal">
                              Source: {message.source}
                            </Badge>
                          </div>
                        )}
                        {message.content
                          .split("**")
                          .map((part, i) => (i % 2 === 0 ? part : <strong key={i}>{part}</strong>))}
                      </div>
                      <p className="text-xs opacity-70 mt-1 text-right">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>

                    {message.role === "user" && (
                      <Avatar className="mt-1">
                        <AvatarFallback className="bg-primary">
                          <LucideUser className="h-5 w-5 text-primary-foreground" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="mt-1">
                      <AvatarFallback className="bg-primary/20">
                        <LucideBot className="h-5 w-5 text-primary" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="rounded-2xl px-4 py-3 bg-muted shadow-sm">
                      <div className="flex space-x-2">
                        <div className="h-2 w-2 rounded-full bg-primary/40 animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="h-2 w-2 rounded-full bg-primary/40 animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="h-2 w-2 rounded-full bg-primary/40 animate-bounce"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {messages.length === 1 && !isLoading && (
                <div className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {suggestionQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="justify-start h-auto py-3 px-4 text-left"
                        onClick={() => {
                          setInput(question)
                          setTimeout(() => handleSendMessage(), 100)
                        }}
                      >
                        <LucideMessageSquare className="h-4 w-4 mr-2 text-primary" />
                        {question}
                      </Button>
                    ))}
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <LucideSearch className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Available Medical Databases</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                      <Badge variant="secondary" className="justify-center">
                        Medications
                      </Badge>
                      <Badge variant="secondary" className="justify-center">
                        Diseases
                      </Badge>
                      <Badge variant="secondary" className="justify-center">
                        Symptoms
                      </Badge>
                      <Badge variant="secondary" className="justify-center">
                        Treatments
                      </Badge>
                      <Badge variant="secondary" className="justify-center">
                        Nutrition
                      </Badge>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </CardContent>

          <div className="border-t p-4 bg-background">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="flex w-full gap-2"
            >
              <Input
                ref={inputRef}
                placeholder="Ask about medications, diseases, symptoms, treatments, or nutrition..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 border-primary/20 focus-visible:ring-primary"
              />
              <Button type="submit" disabled={isLoading || !input.trim()} className="rounded-full">
                {isLoading ? <LucideLoader2 className="h-4 w-4 animate-spin" /> : <LucideSend className="h-4 w-4" />}
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  )
}

