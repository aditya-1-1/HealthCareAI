"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { LucideSearch, LucideLoader2, LucideInfo, LucideAlertTriangle, LucideCalendar, LucideList } from "lucide-react"
import { motion } from "framer-motion"

// Mock data for demonstration
const medicineDatabase = {
  aspirin: {
    name: "Aspirin",
    purpose:
      "Pain relief, fever reduction, and anti-inflammatory effects. Also used to reduce the risk of heart attack and stroke.",
    sideEffects: "Stomach irritation, heartburn, nausea, vomiting, and in rare cases, stomach bleeding.",
    ingredients: "Active: Acetylsalicylic acid. Inactive: Corn starch, hypromellose, powdered cellulose, triacetin.",
    expiryPeriod: "2-3 years from the manufacturing date when stored properly.",
    dosage: "Adults: 325-650 mg every 4-6 hours as needed, not exceeding 4,000 mg per day.",
    precautions:
      "Not recommended for children under 12 due to risk of Reye's syndrome. Avoid if allergic to NSAIDs or have bleeding disorders.",
    category: "NSAID",
  },
  ibuprofen: {
    name: "Ibuprofen",
    purpose: "Relief of pain, inflammation, and fever. Commonly used for headaches, menstrual cramps, and arthritis.",
    sideEffects: "Stomach pain, heartburn, nausea, vomiting, dizziness, and mild headache.",
    ingredients:
      "Active: Ibuprofen. Inactive: Carnauba wax, colloidal silicon dioxide, croscarmellose sodium, microcrystalline cellulose.",
    expiryPeriod: "24-36 months from the manufacturing date when stored properly.",
    dosage:
      "Adults: 200-400 mg every 4-6 hours as needed, not exceeding 1,200 mg in 24 hours unless directed by a doctor.",
    precautions:
      "Avoid if allergic to NSAIDs, have heart disease, high blood pressure, or are in the third trimester of pregnancy.",
    category: "NSAID",
  },
  paracetamol: {
    name: "Paracetamol (Acetaminophen)",
    purpose: "Relief of mild to moderate pain and fever reduction.",
    sideEffects:
      "Generally well-tolerated when used as directed. Rare side effects include allergic reactions and liver damage with excessive use.",
    ingredients: "Active: Acetaminophen. Inactive: Corn starch, pregelatinized starch, povidone, stearic acid.",
    expiryPeriod: "2-3 years from the manufacturing date when stored properly.",
    dosage: "Adults: 325-650 mg every 4-6 hours as needed, not exceeding 3,000 mg in 24 hours.",
    precautions:
      "Avoid alcohol consumption while taking paracetamol. Use caution if you have liver disease or consume alcohol regularly.",
    category: "Analgesic",
  },
  amoxicillin: {
    name: "Amoxicillin",
    purpose:
      "Treatment of bacterial infections including respiratory tract infections, urinary tract infections, and skin infections.",
    sideEffects: "Diarrhea, nausea, vomiting, rash, and allergic reactions.",
    ingredients:
      "Active: Amoxicillin trihydrate. Inactive: Magnesium stearate, talc, sodium starch glycolate, gelatin.",
    expiryPeriod: "12-18 months from the manufacturing date when stored properly.",
    dosage: "Adults: 250-500 mg every 8 hours or 500-875 mg every 12 hours, depending on the infection.",
    precautions:
      "Avoid if allergic to penicillin antibiotics. Complete the full course of treatment even if symptoms improve.",
    category: "Antibiotic",
  },
  lisinopril: {
    name: "Lisinopril",
    purpose: "Treatment of high blood pressure, heart failure, and to improve survival after a heart attack.",
    sideEffects:
      "Dizziness, headache, dry cough, fatigue, and in rare cases, swelling of the face, lips, tongue, or throat.",
    ingredients: "Active: Lisinopril. Inactive: Calcium phosphate, mannitol, magnesium stearate, starch.",
    expiryPeriod: "24-36 months from the manufacturing date when stored properly.",
    dosage: "Adults: 10-40 mg once daily, depending on the condition being treated.",
    precautions: "Avoid if pregnant or planning to become pregnant. Monitor blood pressure regularly.",
    category: "ACE Inhibitor",
  },
}

// Popular searches
const popularSearches = ["aspirin", "ibuprofen", "paracetamol", "amoxicillin", "lisinopril"]

// Medicine categories with colors
const categories = {
  NSAID: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Analgesic: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Antibiotic: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "ACE Inhibitor": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
}

export default function MedicalDictionary() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  // Load recent searches from localStorage
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentMedicineSearches")
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches))
    }
  }, [])

  // Save recent searches to localStorage
  const saveRecentSearch = (term: string) => {
    const updatedSearches = [term, ...recentSearches.filter((s) => s !== term)].slice(0, 5)
    setRecentSearches(updatedSearches)
    localStorage.setItem("recentMedicineSearches", JSON.stringify(updatedSearches))
  }

  const handleSearch = (term: string = searchTerm) => {
    if (!term.trim()) {
      setError("Please enter a medicine name")
      return
    }

    setLoading(true)
    setError("")
    setSearchTerm(term)

    // Simulate API call with timeout
    setTimeout(() => {
      const searchKey = term.toLowerCase()
      const result = medicineDatabase[searchKey as keyof typeof medicineDatabase]

      if (result) {
        setSearchResults(result)
        saveRecentSearch(term)
      } else {
        setError("Medicine not found. Please try another name.")
        setSearchResults(null)
      }

      setLoading(false)
    }, 800)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Medical Dictionary
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Search our comprehensive database for detailed information about medications, including purpose, side
            effects, ingredients, and more.
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl mb-8">
          <div className="relative">
            <LucideSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search for a medicine (e.g., aspirin, ibuprofen, paracetamol)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="pl-10 h-12 text-lg border-primary/20 focus-visible:ring-primary"
            />
            <Button
              onClick={() => handleSearch()}
              disabled={loading}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full"
            >
              {loading ? (
                <LucideLoader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <LucideSearch className="h-4 w-4 mr-2" />
              )}
              Search
            </Button>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-500 mt-2"
            >
              <LucideAlertTriangle className="h-4 w-4" />
              <p>{error}</p>
            </motion.div>
          )}

          <div className="mt-4">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-muted-foreground">Popular:</span>
              {popularSearches.map((term) => (
                <Badge
                  key={term}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary/10 transition-colors"
                  onClick={() => handleSearch(term)}
                >
                  {term}
                </Badge>
              ))}
            </div>

            {recentSearches.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center mt-2">
                <span className="text-sm text-muted-foreground">Recent:</span>
                {recentSearches.map((term) => (
                  <Badge
                    key={term}
                    variant="secondary"
                    className="cursor-pointer hover:bg-secondary/80 transition-colors"
                    onClick={() => handleSearch(term)}
                  >
                    {term}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <LucideLoader2 className="h-12 w-12 animate-spin mx-auto text-primary mb-4" />
              <p className="text-muted-foreground">Searching medical database...</p>
            </div>
          </div>
        ) : searchResults ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="overflow-hidden border-primary/20 shadow-lg">
              <div className="bg-gradient-to-r from-primary to-primary/70 h-2 w-full" />
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      {searchResults.name}
                      <Badge className={categories[searchResults.category as keyof typeof categories]}>
                        {searchResults.category}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-base mt-1">{searchResults.purpose}</CardDescription>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-full">
                    <LucideInfo className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="mt-4">
                  <TabsList className="grid grid-cols-3 mb-6 w-full">
                    <TabsTrigger value="overview" className="flex items-center gap-2">
                      <LucideInfo className="h-4 w-4" />
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="details" className="flex items-center gap-2">
                      <LucideList className="h-4 w-4" />
                      Details
                    </TabsTrigger>
                    <TabsTrigger value="usage" className="flex items-center gap-2">
                      <LucideCalendar className="h-4 w-4" />
                      Usage
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h3 className="font-medium text-primary text-lg mb-2">Purpose</h3>
                      <p>{searchResults.purpose}</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border-l-4 border-red-500">
                      <h3 className="font-medium text-red-600 dark:text-red-400 text-lg mb-2 flex items-center gap-2">
                        <LucideAlertTriangle className="h-5 w-5" />
                        Side Effects
                      </h3>
                      <p className="text-red-700 dark:text-red-300">{searchResults.sideEffects}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-6">
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h3 className="font-medium text-primary text-lg mb-2">Ingredients</h3>
                      <p>{searchResults.ingredients}</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h3 className="font-medium text-primary text-lg mb-2">Expiry Period</h3>
                      <p>{searchResults.expiryPeriod}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="usage" className="space-y-6">
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h3 className="font-medium text-primary text-lg mb-2">Recommended Dosage</h3>
                      <p>{searchResults.dosage}</p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border-l-4 border-amber-500">
                      <h3 className="font-medium text-amber-600 dark:text-amber-400 text-lg mb-2 flex items-center gap-2">
                        <LucideAlertTriangle className="h-5 w-5" />
                        Precautions
                      </h3>
                      <p className="text-amber-700 dark:text-amber-300">{searchResults.precautions}</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <div className="text-center py-12 bg-primary/5 rounded-xl">
            <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
              <LucideSearch className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Search for a medicine</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Enter a medicine name to get detailed information about its purpose, side effects, ingredients, and more.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

