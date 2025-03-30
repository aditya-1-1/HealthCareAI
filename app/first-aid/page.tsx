"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  LucideSearch,
  LucideHeart,
  LigatureIcon as LucideBandage,
  LucideThermometer,
  LucideAlertTriangle,
  LucidePhone,
  LucideArrowRight,
} from "lucide-react"
import { motion } from "framer-motion"

const emergencyData = {
  cardiac: {
    title: "Cardiac Arrest",
    description: "A sudden loss of heart function, often caused by irregular heart rhythms.",
    steps: [
      "Call emergency services (911) immediately.",
      "Check if the person is responsive and breathing.",
      "If not breathing normally, begin CPR immediately.",
      "Push hard and fast on the center of the chest at a rate of 100-120 compressions per minute.",
      "If trained, give rescue breaths after 30 compressions (30:2 ratio).",
      "Continue CPR until emergency services arrive or an AED becomes available.",
      "If an AED is available, turn it on and follow the voice prompts.",
    ],
    warning: "Time is critical in cardiac arrest. Every minute without treatment decreases survival chances by 7-10%.",
    severity: "critical",
    image: "/placeholder.svg?height=200&width=300",
  },
  bleeding: {
    title: "Severe Bleeding",
    description: "Uncontrolled bleeding that can lead to shock and life-threatening complications.",
    steps: [
      "Apply direct pressure to the wound using a clean cloth or bandage.",
      "If possible, elevate the injured area above the level of the heart.",
      "Add more cloth or bandages if blood soaks through.",
      "If bleeding continues and you suspect an arterial bleed, apply pressure to the appropriate pressure point.",
      "Secure the bandage with tape or continue to hold pressure.",
      "Do not remove bandages once applied - add more on top if needed.",
      "Seek immediate medical attention or call emergency services.",
    ],
    warning: "Do not apply a tourniquet unless you have proper training and the bleeding is life-threatening.",
    severity: "high",
    image: "/placeholder.svg?height=200&width=300",
  },
  burns: {
    title: "Burns",
    description: "Tissue damage caused by heat, chemicals, electricity, or radiation.",
    steps: [
      "Remove the person from the source of the burn.",
      "Cool the burn with cool (not cold) running water for 10-15 minutes.",
      "Remove jewelry or tight items from the burned area before swelling occurs.",
      "Cover the burn with a sterile, non-stick bandage or clean cloth.",
      "Do not apply butter, oil, or ointments to the burn.",
      "Take over-the-counter pain relievers if needed.",
      "Seek medical attention for burns larger than 3 inches, or burns on the face, hands, feet, genitals, or major joints.",
    ],
    warning:
      "Never use ice, as it can further damage the tissue. Do not break blisters as this increases infection risk.",
    severity: "medium",
    image: "/placeholder.svg?height=200&width=300",
  },
  choking: {
    title: "Choking",
    description: "Blockage of the airway that prevents normal breathing.",
    steps: [
      "Ask the person if they are choking. If they can speak, cough, or breathe, do not interfere.",
      "If they cannot speak, cough, or breathe, stand behind them and wrap your arms around their waist.",
      "Make a fist with one hand and place it just above their navel (belly button).",
      "Grab your fist with your other hand and press into their abdomen with quick, upward thrusts.",
      "Repeat until the object is expelled or the person becomes unconscious.",
      "If the person becomes unconscious, lower them to the ground and begin CPR.",
      "Call emergency services immediately.",
    ],
    warning: "For pregnant women or obese individuals, perform chest thrusts instead of abdominal thrusts.",
    severity: "high",
    image: "/placeholder.svg?height=200&width=300",
  },
  stroke: {
    title: "Stroke",
    description: "A medical emergency where blood flow to the brain is interrupted, causing brain cells to die.",
    steps: [
      "Remember the acronym FAST: Face, Arms, Speech, Time.",
      "Face: Ask the person to smile. Does one side of the face droop?",
      "Arms: Ask the person to raise both arms. Does one arm drift downward?",
      "Speech: Ask the person to repeat a simple phrase. Is their speech slurred or strange?",
      "Time: If you observe any of these signs, call emergency services immediately.",
      "Note the time when symptoms first appeared.",
      "Do not give the person anything to eat or drink.",
      "If the person is unconscious, place them in the recovery position.",
    ],
    warning: "Time is critical in stroke treatment. The sooner treatment begins, the better the chances of recovery.",
    severity: "critical",
    image: "/placeholder.svg?height=200&width=300",
  },
  fracture: {
    title: "Fractures (Broken Bones)",
    description: "A break in the continuity of a bone, often caused by trauma or medical conditions.",
    steps: [
      "Keep the injured area immobile and support it in the position found.",
      "Apply ice wrapped in a cloth to reduce swelling and pain.",
      "If there's bleeding, apply pressure with a clean bandage.",
      "For open fractures (bone protruding through skin), do not push the bone back in.",
      "Cover open fractures with a clean, sterile bandage.",
      "Immobilize the area using a splint if available.",
      "Seek immediate medical attention.",
    ],
    warning:
      "Do not attempt to realign the bone or push a protruding bone back in place. This could cause further damage.",
    severity: "medium",
    image: "/placeholder.svg?height=200&width=300",
  },
}

// Severity badges
const severityBadges = {
  critical: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 border-red-200 dark:border-red-800",
  high: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 border-orange-200 dark:border-orange-800",
  medium:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
  low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-800",
}

export default function FirstAid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredEmergencies, setFilteredEmergencies] = useState<string[]>(Object.keys(emergencyData))
  const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null)

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    if (!term.trim()) {
      setFilteredEmergencies(Object.keys(emergencyData))
      return
    }

    const filtered = Object.keys(emergencyData).filter(
      (key) =>
        key.toLowerCase().includes(term.toLowerCase()) ||
        emergencyData[key as keyof typeof emergencyData].title.toLowerCase().includes(term.toLowerCase()) ||
        emergencyData[key as keyof typeof emergencyData].description.toLowerCase().includes(term.toLowerCase()),
    )

    setFilteredEmergencies(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            First Aid Guide
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quick access to emergency procedures and first aid instructions for common medical emergencies.
          </p>

          <div className="mt-6 flex justify-center">
            <Button
              variant="outline"
              className="rounded-full bg-red-100 text-red-800 border-red-200 hover:bg-red-200 hover:text-red-900 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800 dark:hover:bg-red-900/50"
            >
              <LucidePhone className="h-4 w-4 mr-2" />
              Emergency: Call 911
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl mb-8">
          <div className="relative">
            <LucideSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search for emergency situations..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 h-12 text-lg border-primary/20 focus-visible:ring-primary"
            />
          </div>
          <p className="text-muted-foreground mt-2 text-sm">
            Find first aid instructions for common emergencies. In case of severe emergency, always call 911 first.
          </p>
        </div>

        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="critical" className="flex items-center gap-1">
              <LucideHeart className="h-4 w-4 text-red-500" /> Critical
            </TabsTrigger>
            <TabsTrigger value="injuries" className="flex items-center gap-1">
              <LucideBandage className="h-4 w-4 text-orange-500" /> Injuries
            </TabsTrigger>
            <TabsTrigger value="other" className="flex items-center gap-1">
              <LucideAlertTriangle className="h-4 w-4 text-yellow-500" /> Other
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEmergencies.length > 0 ? (
                filteredEmergencies.map((key) => (
                  <EmergencyCard
                    key={key}
                    data={emergencyData[key as keyof typeof emergencyData]}
                    type={key}
                    isSelected={selectedEmergency === key}
                    onClick={() => setSelectedEmergency(selectedEmergency === key ? null : key)}
                  />
                ))
              ) : (
                <Card className="md:col-span-2">
                  <CardContent className="pt-6 text-center">
                    <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                      <LucideSearch className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-lg mb-2">No emergency procedures found for "{searchTerm}".</p>
                    <p className="text-muted-foreground mb-4">Try a different search term or browse the categories.</p>
                    <Button variant="outline" onClick={() => handleSearch("")} className="rounded-full">
                      Clear search
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="critical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EmergencyCard
                data={emergencyData.cardiac}
                type="cardiac"
                isSelected={selectedEmergency === "cardiac"}
                onClick={() => setSelectedEmergency(selectedEmergency === "cardiac" ? null : "cardiac")}
              />
              <EmergencyCard
                data={emergencyData.stroke}
                type="stroke"
                isSelected={selectedEmergency === "stroke"}
                onClick={() => setSelectedEmergency(selectedEmergency === "stroke" ? null : "stroke")}
              />
            </div>
          </TabsContent>

          <TabsContent value="injuries">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EmergencyCard
                data={emergencyData.bleeding}
                type="bleeding"
                isSelected={selectedEmergency === "bleeding"}
                onClick={() => setSelectedEmergency(selectedEmergency === "bleeding" ? null : "bleeding")}
              />
              <EmergencyCard
                data={emergencyData.burns}
                type="burns"
                isSelected={selectedEmergency === "burns"}
                onClick={() => setSelectedEmergency(selectedEmergency === "burns" ? null : "burns")}
              />
              <EmergencyCard
                data={emergencyData.fracture}
                type="fracture"
                isSelected={selectedEmergency === "fracture"}
                onClick={() => setSelectedEmergency(selectedEmergency === "fracture" ? null : "fracture")}
              />
            </div>
          </TabsContent>

          <TabsContent value="other">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EmergencyCard
                data={emergencyData.choking}
                type="choking"
                isSelected={selectedEmergency === "choking"}
                onClick={() => setSelectedEmergency(selectedEmergency === "choking" ? null : "choking")}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

type EmergencyCardProps = {
  data: {
    title: string
    description: string
    steps: string[]
    warning: string
    severity: string
    image: string
  }
  type: string
  isSelected: boolean
  onClick: () => void
}

function EmergencyCard({ data, type, isSelected, onClick }: EmergencyCardProps) {
  const getIcon = () => {
    switch (type) {
      case "cardiac":
      case "stroke":
        return <LucideHeart className="h-5 w-5 text-red-500" />
      case "bleeding":
      case "fracture":
        return <LucideBandage className="h-5 w-5 text-orange-500" />
      case "burns":
        return <LucideThermometer className="h-5 w-5 text-orange-500" />
      case "choking":
        return <LucideAlertTriangle className="h-5 w-5 text-yellow-500" />
      default:
        return <LucideAlertTriangle className="h-5 w-5 text-primary" />
    }
  }

  return (
    <motion.div layout transition={{ duration: 0.3 }} className={isSelected ? "md:col-span-2" : ""}>
      <Card
        className={`overflow-hidden cursor-pointer transition-all hover:shadow-md ${isSelected ? "shadow-lg" : ""}`}
        onClick={onClick}
      >
        <div className="bg-gradient-to-r from-primary to-primary/70 h-1 w-full" />
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">{getIcon()}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <CardTitle>{data.title}</CardTitle>
                  <Badge className={severityBadges[data.severity as keyof typeof severityBadges]}>
                    {data.severity.charAt(0).toUpperCase() + data.severity.slice(1)}
                  </Badge>
                </div>
                <CardDescription>{data.description}</CardDescription>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <LucideArrowRight className="h-4 w-4" />
              <span className="sr-only">View details</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {isSelected ? (
            <div className="space-y-6">
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <img
                  src={data.image || "/placeholder.svg"}
                  alt={`${data.title} procedure`}
                  className="w-full h-full object-cover"
                />
              </div>

              <Accordion type="single" collapsible defaultValue="steps">
                <AccordionItem value="steps" className="border-none">
                  <AccordionTrigger className="py-2 px-4 bg-primary/5 rounded-lg hover:bg-primary/10 hover:no-underline">
                    <span className="font-medium">Emergency Steps</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ol className="list-decimal pl-5 space-y-3">
                      {data.steps.map((step, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {step}
                        </motion.li>
                      ))}
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="warning" className="border-none">
                  <AccordionTrigger className="py-2 px-4 bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300 rounded-lg hover:bg-red-100 dark:hover:bg-red-950/50 hover:no-underline">
                    <span className="font-medium flex items-center gap-2">
                      <LucideAlertTriangle className="h-4 w-4" />
                      Important Warning
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 p-4 rounded">
                      <p className="text-red-800 dark:text-red-300">{data.warning}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex justify-center">
                <Button className="rounded-full">
                  <LucidePhone className="h-4 w-4 mr-2" />
                  Call Emergency Services
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground line-clamp-2">{data.steps[0]}</p>
              <Badge variant="outline" className="ml-2 shrink-0">
                {data.steps.length} steps
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

