import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  LucideHeartPulse,
  LucideClock,
  LucideMessageSquare,
  FlashlightIcon as LucideFirstAid,
  LucideArrowRight,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 pb-16">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
        <div className="absolute h-48 w-48 rounded-full bg-primary/30 blur-3xl -top-12 -left-12 opacity-20" />
        <div className="absolute h-48 w-48 rounded-full bg-primary/30 blur-3xl -bottom-12 -right-12 opacity-20" />

        <div className="container relative mx-auto px-4 py-24 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block animate-bounce bg-primary/10 p-2 rounded-full mb-4">
              <LucideHeartPulse className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight">MediCare Assistant</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Your comprehensive healthcare companion with AI-powered assistance for medication management and health
              information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full text-lg px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
              >
                <Link href="/chatbot" className="flex items-center gap-2">
                  Talk to Health Assistant
                  <LucideArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8">
                <Link href="/medical-dictionary">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="hsl(var(--background))"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Comprehensive Healthcare Features
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            href="/medical-dictionary"
            icon={<LucideHeartPulse className="h-6 w-6 text-white" />}
            title="Medical Dictionary"
            description="Search for medicines and get detailed information about purpose, side effects, ingredients, and more."
            gradient="from-blue-500 to-cyan-400"
          />

          <FeatureCard
            href="/dose-reminder"
            icon={<LucideClock className="h-6 w-6 text-white" />}
            title="Dose Reminder"
            description="Schedule and track your medications with intelligent reminders to never miss a dose again."
            gradient="from-emerald-500 to-teal-400"
          />

          <FeatureCard
            href="/chatbot"
            icon={<LucideMessageSquare className="h-6 w-6 text-white" />}
            title="Health Assistant"
            description="Get answers to your health-related questions from our advanced AI assistant that remembers your medical history."
            gradient="from-violet-500 to-purple-400"
          />

          <FeatureCard
            href="/first-aid"
            icon={<LucideFirstAid className="h-6 w-6 text-white" />}
            title="First Aid Guide"
            description="Access critical first aid information for emergencies like cardiac arrest and other common injuries."
            gradient="from-rose-500 to-red-400"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Control of Your Health?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start using our AI-powered healthcare assistant today and experience the difference.
          </p>
          <Button
            size="lg"
            className="rounded-full text-lg px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
          >
            <Link href="/chatbot" className="flex items-center gap-2">
              Get Started Now
              <LucideArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  href,
  icon,
  title,
  description,
  gradient,
}: {
  href: string
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}) {
  return (
    <Link href={href} className="block group">
      <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
        <div className={`bg-gradient-to-r ${gradient} h-2 w-full`} />
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className={`bg-gradient-to-r ${gradient} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <Card className="bg-background border-none shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 text-primary">
          <svg
            width="45"
            height="36"
            className="fill-current opacity-20"
            viewBox="0 0 45 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.4 36C8.86667 36 5.2 34.4667 2.4 31.4C0.8 29.4 0 26.8667 0 23.8C0 17.8667 3.06667 12.4667 9.2 7.6L20 0L22.8 4.8C17.4667 9.06667 14.2667 12.8 13.2 16C14.1333 15.7333 15.0667 15.6 16 15.6C18.9333 15.6 21.4 16.6 23.4 18.6C25.4 20.6 26.4 23.0667 26.4 26C26.4 29.0667 25.4 31.6 23.4 33.6C21.4 35.2 17.8667 36 13.4 36ZM34.6 36C30.0667 36 26.4 34.4667 23.6 31.4C22 29.4 21.2 26.8667 21.2 23.8C21.2 17.8667 24.2667 12.4667 30.4 7.6L41.2 0L44 4.8C38.6667 9.06667 35.4667 12.8 34.4 16C35.3333 15.7333 36.2667 15.6 37.2 15.6C40.1333 15.6 42.6 16.6 44.6 18.6C46.6 20.6 47.6 23.0667 47.6 26C47.6 29.0667 46.6 31.6 44.6 33.6C42.6 35.2 39.0667 36 34.6 36Z" />
          </svg>
        </div>
        <p className="mb-4 italic">{quote}</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}

