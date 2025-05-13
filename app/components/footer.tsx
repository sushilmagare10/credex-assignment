"use client"

import React from "react"
import Link from "next/link"
import { Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-background w-full py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl font-bold">SoftSell</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              The leading marketplace for software license resale. Convert your unused licenses into capital quickly and securely.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <div><Link href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></div>
              <div><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></div>
              <div><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></div>
              <div><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Press</Link></div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <div><Link href="#" className="text-sm text-muted-foreground hover:text-primary">License Valuation</Link></div>
              <div><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Seller Guide</Link></div>
              <div><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Buyer Guide</Link></div>
              <div><Link href="#" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <div><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></div>
              <div><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></div>
              <div><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Cookie Policy</Link></div>
              <div><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Compliance</Link></div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
              © {new Date().getFullYear()} SoftSell Inc. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
