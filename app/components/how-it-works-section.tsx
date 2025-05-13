"use client";

import { motion } from "framer-motion";
import { CheckCircle, CreditCard, DollarSign, Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
    {
        icon: <Upload className="h-8 w-8 text-primary" />,
        title: "Upload License",
        description:
            "Securely upload your unused software license to get started.",
    },
    {
        icon: <DollarSign className="h-8 w-8 text-primary" />,
        title: "Get Valuation",
        description:
            "Our AI tool evaluates the license and gives you a real-time market price.",
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-primary" />,
        title: "Review Offer",
        description:
            "Review the suggested valuation and decide if you’d like to proceed.",
    },
    {
        icon: <CreditCard className="h-8 w-8 text-primary" />,
        title: "Get Paid",
        description:
            "Accept the offer and receive your payment via your preferred method.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-background relative z-10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        How It Works
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base">
                        A streamlined process to turn your unused licenses into real money —
                        securely and effortlessly.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto"
                >
                    {steps.map((step, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="group h-full border border-border bg-muted/30 hover:bg-muted/40 backdrop-blur-md transition-all duration-300 rounded-2xl shadow-md hover:shadow-xl">
                                <CardContent className="p-8 flex flex-col items-center text-center">
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                                        <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {step.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
