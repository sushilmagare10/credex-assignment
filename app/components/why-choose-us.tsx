"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    Zap,
    Shield,
    Users,
    Clock,
    RefreshCcw,
    HeartHandshake,
    Globe,
    BadgeCheck,
    TrendingUp
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const WhyChooseUs = () => {

    const features = [
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Fast Valuation",
            description: "Get an instant valuation for your software licenses within minutes, powered by our AI pricing algorithm.",
            className: "md:col-span-1 lg:col-span-2 lg:row-span-1",
            iconBg: "bg-blue-500 group-hover:bg-blue-600",
            stats: "Average time: 2 minutes",
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Secure Transactions",
            description: "Our platform ensures all transactions are secure with enterprise-grade encryption and your data is protected by our strict privacy policies.",
            className: "md:col-span-1 lg:col-span-1 lg:row-span-1",
            iconBg: "bg-orange-500 group-hover:bg-orange-600",
            stats: "100% secure payment",
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: "Trusted by 1000+ Users",
            description: "Join our growing community of satisfied customers who have successfully sold their licenses across 40+ countries worldwide.",
            className: "md:col-span-2 lg:col-span-1 lg:row-span-1",
            iconBg: "bg-purple-500 group-hover:bg-purple-600",
            stats: "4.9/5 rating from 1000+ users",
        },
        {
            icon: <Clock className="h-8 w-8" />,
            title: "Instant Payouts",
            description: "Receive your payment quickly through your preferred payment method with same-day processing on most transactions.",
            className: "md:col-span-1 lg:col-span-1 lg:row-span-1",
            iconBg: "bg-violet-500 group-hover:bg-violet-600",
            stats: "Payments in 24-48 hours",
        },
        {
            icon: <RefreshCcw className="h-8 w-8" />,
            title: "License Recycling",
            description: "Environmentally friendly process that gives your unused licenses a second life, reducing digital waste and maximizing software utility.",
            className: "md:col-span-1 lg:col-span-1 lg:row-span-1",
            iconBg: "bg-teal-500 group-hover:bg-teal-600",
            stats: "Saved 2000+ licenses from waste",
        },
        {
            icon: <HeartHandshake className="h-8 w-8" />,
            title: "Dedicated Support",
            description: "Our expert team is available 24/7 to assist with any questions or concerns through live chat, email, or phone support.",
            className: "md:col-span-2 lg:col-span-2 lg:row-span-1",
            iconBg: "bg-red-500 group-hover:bg-red-600",
            stats: "Average response time: 5 minutes",
        },

        {
            icon: <Globe className="h-8 w-8" />,
            title: "Global Marketplace",
            description: "Access buyers from around the world with our international marketplace supporting multiple currencies and languages.",
            className: "md:col-span-1 lg:col-span-2 lg:row-span-1",
            iconBg: "bg-sky-500 group-hover:bg-sky-600",
            stats: "Available in 40+ countries",
        },
        {
            icon: <BadgeCheck className="h-8 w-8" />,
            title: "Verified Buyers",
            description: "All our buyers are thoroughly vetted to ensure legitimate transactions and prevent fraud or license misuse.",
            className: "md:col-span-1 lg:col-span-1 lg:row-span-1",
            iconBg: "bg-yellow-500 group-hover:bg-yellow-600",
            stats: "100% verified buyer network",
        },
        {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "Market Insights",
            description: "Access real-time data on license values and market trends to make informed decisions about when to sell.",
            className: "md:col-span-1 lg:col-span-1 lg:row-span-1",
            iconBg: "bg-pink-500 group-hover:bg-pink-600",
            stats: "Updated pricing every 24 hours",
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    const textVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }
        }
    }

    return (
        <section id="why-choose-us" className="py-16 md:py-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-16 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute bottom-32 right-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-3"
                    >
                        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
                            The Reliable Choice
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Why Choose Us
                    </motion.h2>

                    <motion.p
                        className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        We provide the best experience for selling your unused software licenses with
                        <span className="text-primary font-medium"> guaranteed satisfaction</span> and
                        <span className="text-primary font-medium"> maximum value</span>.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={cn("h-full", feature.className)}
                        >
                            <Card
                                className={cn(
                                    "h-full overflow-hidden border border-border bg-card",
                                    "transition-all duration-300 hover:shadow-xl relative group",
                                    "hover:border-primary/30 hover:scale-[1.02]"
                                )}
                            >
                                <CardContent className="p-6 flex flex-col h-full relative z-10">
                                    <div
                                        className="mb-4 text-foreground"
                                    >
                                        <div className={cn(
                                            "p-3 rounded-lg inline-flex items-center justify-center",
                                            "transition-all duration-300 text-white",
                                            feature.iconBg,
                                            " group-hover:scale-110"
                                        )}>
                                            {feature.icon}
                                        </div>
                                    </div>

                                    <motion.h3
                                        className="text-xl font-medium mb-2 "
                                        initial={{ opacity: 1 }}
                                    >
                                        {feature.title}
                                    </motion.h3>

                                    <p className="text-muted-foreground text-sm md:text-base mb-3">
                                        {feature.description}
                                    </p>

                                    <div className="mt-auto pt-3 border-t border-border/50">
                                        <motion.p
                                            className="text-xs font-medium text-primary flex items-center"
                                            initial={{ opacity: 0.7 }}
                                            whileHover={{ opacity: 1, scale: 1.02 }}
                                        >
                                            <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-primary"></span>
                                            {feature.stats}
                                        </motion.p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default WhyChooseUs