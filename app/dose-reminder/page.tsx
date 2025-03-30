"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LucidePlus,
  LucideClock,
  LucideTrash2,
  LucideBell,
  LucideBellOff,
  LucideCalendarDays,
  LucideList,
  LucideCheck,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

type Medication = {
  id: string
  name: string
  dosage: string
  frequency: string
  time: string
  active: boolean
  color: string
  lastTaken?: Date
}

// Color options for medications
const colorOptions = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-amber-500",
  "bg-pink-500",
  "bg-teal-500",
  "bg-indigo-500",
]

export default function DoseReminder() {
  const [medications, setMedications] = useState<Medication[]>([
    {
      id: "1",
      name: "Aspirin",
      dosage: "81mg",
      frequency: "Daily",
      time: "08:00",
      active: true,
      color: "bg-red-500",
    },
    {
      id: "2",
      name: "Vitamin D",
      dosage: "1000 IU",
      frequency: "Daily",
      time: "09:00",
      active: true,
      color: "bg-amber-500",
    },
    {
      id: "3",
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Daily",
      time: "20:00",
      active: true,
      color: "bg-blue-500",
      lastTaken: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
    },
  ])

  const [newMedication, setNewMedication] = useState<Omit<Medication, "id" | "active" | "lastTaken">>({
    name: "",
    dosage: "",
    frequency: "Daily",
    time: "08:00",
    color: colorOptions[0],
  })

  const [dialogOpen, setDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("list")
  const [currentDate, setCurrentDate] = useState(new Date())
  const [showSuccess, setShowSuccess] = useState<string | null>(null)

  // Load medications from localStorage
  useEffect(() => {
    const savedMedications = localStorage.getItem("medications")
    if (savedMedications) {
      try {
        const parsed = JSON.parse(savedMedications)
        // Convert string dates back to Date objects
        const processed = parsed.map((med: any) => ({
          ...med,
          lastTaken: med.lastTaken ? new Date(med.lastTaken) : undefined,
        }))
        setMedications(processed)
      } catch (e) {
        console.error("Error parsing saved medications:", e)
      }
    }
  }, [])

  // Save medications to localStorage
  useEffect(() => {
    localStorage.setItem("medications", JSON.stringify(medications))
  }, [medications])

  const handleAddMedication = () => {
    const medication: Medication = {
      ...newMedication,
      id: Date.now().toString(),
      active: true,
    }

    setMedications([...medications, medication])
    setNewMedication({
      name: "",
      dosage: "",
      frequency: "Daily",
      time: "08:00",
      color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
    })

    setDialogOpen(false)
  }

  const handleDeleteMedication = (id: string) => {
    setMedications(medications.filter((med) => med.id !== id))
  }

  const toggleMedicationStatus = (id: string) => {
    setMedications(medications.map((med) => (med.id === id ? { ...med, active: !med.active } : med)))
  }

  const markAsTaken = (id: string) => {
    setMedications(medications.map((med) => (med.id === id ? { ...med, lastTaken: new Date() } : med)))

    setShowSuccess(id)
    setTimeout(() => setShowSuccess(null), 2000)
  }

  // Get days of the week for calendar view
  const getDaysOfWeek = () => {
    const days = []
    const today = new Date()

    for (let i = -3; i <= 3; i++) {
      const day = new Date(today)
      day.setDate(today.getDate() + i)
      days.push(day)
    }

    return days
  }

  const daysOfWeek = getDaysOfWeek()

  // Check if medication is due today
  const isMedicationDueToday = (medication: Medication) => {
    if (!medication.active) return false

    const today = new Date()
    const lastTaken = medication.lastTaken

    if (!lastTaken) return true

    // Check if last taken was today
    return lastTaken.toDateString() !== today.toDateString()
  }

  // Get medications due today
  const getMedicationsDueToday = () => {
    return medications.filter((med) => med.active && isMedicationDueToday(med))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Medication Reminders
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Keep track of your medications and never miss a dose with our intelligent reminder system.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
              <TabsTrigger value="list" className="flex items-center gap-2">
                <LucideList className="h-4 w-4" />
                List View
              </TabsTrigger>
              <TabsTrigger value="calendar" className="flex items-center gap-2">
                <LucideCalendarDays className="h-4 w-4" />
                Calendar View
              </TabsTrigger>
            </TabsList>
          </div>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg z-10">
                <LucidePlus className="h-6 w-6" />
                <span className="sr-only">Add Medication</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Medication</DialogTitle>
                <DialogDescription>Enter the details of your medication to set up reminders.</DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Medication Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Aspirin"
                    value={newMedication.name}
                    onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="dosage">Dosage</Label>
                  <Input
                    id="dosage"
                    placeholder="e.g., 81mg"
                    value={newMedication.dosage}
                    onChange={(e) => setNewMedication({ ...newMedication, dosage: e.target.value })}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select
                    value={newMedication.frequency}
                    onValueChange={(value) => setNewMedication({ ...newMedication, frequency: value })}
                  >
                    <SelectTrigger id="frequency">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Daily">Daily</SelectItem>
                      <SelectItem value="Twice daily">Twice daily</SelectItem>
                      <SelectItem value="Three times daily">Three times daily</SelectItem>
                      <SelectItem value="Weekly">Weekly</SelectItem>
                      <SelectItem value="As needed">As needed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={newMedication.time}
                    onChange={(e) => setNewMedication({ ...newMedication, time: e.target.value })}
                  />
                </div>

                <div className="grid gap-2">
                  <Label>Color</Label>
                  <div className="flex flex-wrap gap-2">
                    {colorOptions.map((color) => (
                      <button
                        key={color}
                        type="button"
                        className={cn(
                          "w-8 h-8 rounded-full transition-all",
                          color,
                          newMedication.color === color ? "ring-2 ring-offset-2 ring-primary" : "",
                        )}
                        onClick={() => setNewMedication({ ...newMedication, color })}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddMedication} disabled={!newMedication.name || !newMedication.dosage}>
                  Add Medication
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <TabsContent value="list" className="mt-0">
            {medications.length === 0 ? (
              <Card className="text-center p-8 border-dashed border-2">
                <CardContent className="pt-8">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-primary/10 p-4 rounded-full mx-auto w-fit mb-4">
                      <LucideClock className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">No medications added yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Add your medications to get reminders at the right time.
                    </p>
                    <Button onClick={() => setDialogOpen(true)} className="rounded-full">
                      <LucidePlus className="h-4 w-4 mr-2" />
                      Add Your First Medication
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            ) : (
              <div>
                <h2 className="text-xl font-semibold mb-4">Today's Medications</h2>
                <div className="grid gap-4 mb-8">
                  {getMedicationsDueToday().length > 0 ? (
                    getMedicationsDueToday().map((medication) => (
                      <MedicationCard
                        key={medication.id}
                        medication={medication}
                        onDelete={handleDeleteMedication}
                        onToggle={toggleMedicationStatus}
                        onTake={markAsTaken}
                        showSuccess={showSuccess === medication.id}
                      />
                    ))
                  ) : (
                    <Card className="p-6 text-center bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900">
                      <div className="flex justify-center mb-2">
                        <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                          <LucideCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                      </div>
                      <h3 className="text-lg font-medium text-green-800 dark:text-green-400">All caught up!</h3>
                      <p className="text-green-700 dark:text-green-500">You've taken all your medications for today.</p>
                    </Card>
                  )}
                </div>

                <h2 className="text-xl font-semibold mb-4">All Medications</h2>
                <div className="grid gap-4">
                  {medications.map((medication) => (
                    <MedicationCard
                      key={medication.id}
                      medication={medication}
                      onDelete={handleDeleteMedication}
                      onToggle={toggleMedicationStatus}
                      onTake={markAsTaken}
                      showSuccess={showSuccess === medication.id}
                    />
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="calendar" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Weekly Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {daysOfWeek.map((day, index) => {
                    const isToday = day.toDateString() === new Date().toDateString()
                    return (
                      <div
                        key={index}
                        className={cn("text-center p-2 rounded-lg", isToday ? "bg-primary/10 font-bold" : "")}
                      >
                        <div className="text-sm uppercase text-muted-foreground">
                          {day.toLocaleDateString("en-US", { weekday: "short" })}
                        </div>
                        <div className={cn("text-lg", isToday ? "text-primary" : "")}>{day.getDate()}</div>
                      </div>
                    )
                  })}
                </div>

                <div className="space-y-6">
                  {medications.map((medication) => (
                    <div key={medication.id} className="border-t pt-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={cn("w-4 h-4 rounded-full", medication.color)} />
                        <h3 className="font-medium">
                          {medication.name} ({medication.dosage})
                        </h3>
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        {daysOfWeek.map((day, index) => {
                          const isToday = day.toDateString() === new Date().toDateString()
                          const isTaken =
                            medication.lastTaken && medication.lastTaken.toDateString() === day.toDateString()

                          return (
                            <div
                              key={index}
                              className={cn(
                                "text-center p-2 rounded-lg border",
                                isToday ? "border-primary" : "border-transparent",
                                isTaken ? "bg-green-50 dark:bg-green-950/30" : "",
                              )}
                            >
                              <div className="text-sm">{medication.time}</div>
                              <div className="mt-1">
                                {isTaken ? (
                                  <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full w-6 h-6 mx-auto">
                                    <LucideCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
                                  </div>
                                ) : isToday && medication.active ? (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-6 w-6 p-0 rounded-full"
                                    onClick={() => markAsTaken(medication.id)}
                                  >
                                    <LucideBell className="h-3 w-3 text-primary" />
                                    <span className="sr-only">Take</span>
                                  </Button>
                                ) : (
                                  <div className="w-6 h-6 mx-auto" />
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={() => setDialogOpen(true)} className="rounded-full">
                  <LucidePlus className="h-4 w-4 mr-2" />
                  Add Medication
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function MedicationCard({
  medication,
  onDelete,
  onToggle,
  onTake,
  showSuccess,
}: {
  medication: Medication
  onDelete: (id: string) => void
  onToggle: (id: string) => void
  onTake: (id: string) => void
  showSuccess: boolean
}) {
  const isDueToday = !medication.lastTaken || medication.lastTaken.toDateString() !== new Date().toDateString()

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all",
        medication.active ? "" : "opacity-70",
        showSuccess ? "border-green-500" : "",
      )}
    >
      <div className={cn("h-1 w-full", medication.color)} />
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-white font-medium",
                medication.color,
              )}
            >
              {medication.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <CardTitle className="text-lg">{medication.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{medication.dosage}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center space-x-2">
              <Switch
                id={`active-${medication.id}`}
                checked={medication.active}
                onCheckedChange={() => onToggle(medication.id)}
              />
              <Label htmlFor={`active-${medication.id}`} className="sr-only">
                Active
              </Label>
              {medication.active ? (
                <LucideBell className="h-4 w-4 text-primary" />
              ) : (
                <LucideBellOff className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(medication.id)}
              className="rounded-full h-8 w-8"
            >
              <LucideTrash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm">
          <LucideClock className="h-4 w-4 text-muted-foreground" />
          <span>
            {medication.frequency} at {medication.time}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-3">
        <p className="text-sm text-muted-foreground">
          {medication.lastTaken ? (
            <>
              Last taken: {medication.lastTaken.toLocaleDateString()} at{" "}
              {medication.lastTaken.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </>
          ) : (
            <>Not taken yet</>
          )}
        </p>

        <AnimatePresence>
          {showSuccess ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex items-center gap-2 text-green-600"
            >
              <LucideCheck className="h-4 w-4" />
              <span>Taken!</span>
            </motion.div>
          ) : (
            medication.active &&
            isDueToday && (
              <Button size="sm" onClick={() => onTake(medication.id)} className="rounded-full">
                Mark as Taken
              </Button>
            )
          )}
        </AnimatePresence>
      </CardFooter>
    </Card>
  )
}

