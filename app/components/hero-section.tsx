"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { GridPattern } from "@/components/magicui/grid-pattern"
import { cn } from "@/lib/utils"
import { Particles } from "@/components/magicui/particles"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const HeroSection = () => {

    const { resolvedTheme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }, [resolvedTheme]);

    return (
        <section id="hero" className=" relative h-screen flex flex-col container mx-auto justify-center items-center overflow-hidden">
            <GridPattern
                width={90}
                height={90}
                x={-1}
                y={-1}
                className={cn(
                    "opacity-50",
                    "[mask-image:radial-gradient(550px_circle_at_center,white,transparent)]",
                )}
            />
            <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                color={color}
                refresh

            />
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-6">
                            <span className="gradient-text">Plan and navigate</span>
                            <br />
                            from idea to launch.
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-sm sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Easily sell your extra software licenses and get paid fast. Our platform provides instant valuations and
                            secure transactions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-row items-center justify-center gap-4"
                    >
                        <Button className=" px-8 py-4 text-sm relative overflow-hidden group">
                            <span className="relative z-10">Get Started</span>
                            <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        </Button>
                        <Button className="px-8 py-4 text-sm group bg-neutral-900 hover:bg-neutral-900 border-neutral-700 text-white">
                            <span>Learn More</span>
                            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-16 text-white/50 text-sm"
                    >
                        Trusted by 1000+ companies worldwide
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="flex flex-wrap justify-center gap-8 mt-6"
                    >
                        {["Adobe", "Microsoft", "Autodesk", "JetBrains", "Atlassian"].map((company, index) => (
                            <motion.div
                                key={company}
                                className="text-white/40 font-semibold"
                                whileHover={{ scale: 1.05, color: "rgba(255, 255, 255, 0.7)" }}
                                transition={{ duration: 0.2 }}
                            >
                                {company}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


export default HeroSection