import Link from "next/link"
import { LucideHeartPulse, LucideGithub, LucideTwitter, LucideInstagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <LucideHeartPulse className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-xl text-primary">MediCare</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your comprehensive healthcare companion with AI-powered assistance for medication management and health
              information.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <LucideGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <LucideTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <LucideInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/medical-dictionary"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Medical Dictionary
                </Link>
              </li>
              <li>
                <Link
                  href="/dose-reminder"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Dose Reminder
                </Link>
              </li>
              <li>
                <Link href="/chatbot" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Health Assistant
                </Link>
              </li>
              <li>
                <Link href="/first-aid" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  First Aid Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Email: contact@medicare.com</li>
              <li className="text-muted-foreground text-sm">Phone: +1 (555) 123-4567</li>
              <li className="text-muted-foreground text-sm">Address: 123 Health Street, Medical City, MC 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MediCare Assistant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

