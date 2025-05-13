"use client"

import { useState, useEffect, FC, MouseEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

type NavLinkItem = {
    href: string
    label: string
}

type NavLinkProps = {
    href: string
    children: React.ReactNode
    onClick: (e: MouseEvent<HTMLAnchorElement>) => void
}

const navigationLinks: NavLinkItem[] = [
    { href: "#hero", label: "Home" },
    { href: "#why-choose-us", label: "Why Choose Us" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#testimonials", label: "Testimonials" },
]

const Navbar: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        setIsOpen(false)

        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-4 left-0 right-0 z-50 transition-all w-11/12  md:w-3/5 mx-auto rounded-full shadow-2xl duration-300 ${isScrolled
                ? "bg-background/95 backdrop-blur-2xl "
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 py-3 rounded-full">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center group">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                            SoftSell
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        {navigationLinks.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex items-center space-x-3">
                        <Button
                            variant="outline"
                            className="hidden md:inline-flex text-foreground/80 hover:text-foreground hover:bg-muted rounded-2xl"
                        >
                            Sign In
                        </Button>
                        <Button className="hidden lg:block bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 rounded-2xl">
                            Get Started
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden hover:bg-muted"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </Button>
                        <ThemeToggle />
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-background backdrop-blur-md border-t border-border"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
                            {navigationLinks.map((link) => (
                                <MobileNavLink
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                >
                                    {link.label}
                                </MobileNavLink>
                            ))}
                            <div className="pt-4 mt-2 border-t border-border flex flex-col space-y-3">
                                <Button variant="outline" className="w-full bg-background hover:bg-muted">
                                    Sign In
                                </Button>
                                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                    Get Started <ChevronRight className="ml-1 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

const NavLink: FC<NavLinkProps> = ({ href, children, onClick }) => (
    <Link
        href={href}
        onClick={onClick}
        className="relative py-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 group"
    >
        {children}
        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
    </Link>
)

const MobileNavLink: FC<NavLinkProps> = ({ href, children, onClick }) => (
    <Link
        href={href}
        onClick={onClick}
        className="py-3 px-2 text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-md transition-colors flex items-center justify-between"
    >
        <span>{children}</span>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </Link>
)

export default Navbar
