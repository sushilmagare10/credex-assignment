"use client"

import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"

const Testimonials = () => {
    const testimonials = [
        {
            img: "https://avatar.vercel.sh/jack",
            name: "Sarah Johnson",
            role: "CTO",
            company: "TechStart Inc.",
            content:
                "SoftSell made it incredibly easy to sell our unused enterprise licenses. The valuation was fair and the payment was processed within 24 hours. Highly recommended!",
            stars: 5
        },
        {
            img: "https://avatar.vercel.sh/jill",
            name: "Michael Chen",
            role: "IT Manager",
            company: "Global Solutions",
            content:
                "After downsizing our team, we had several unused software licenses. SoftSell helped us recover a significant portion of our investment with minimal hassle.",
            stars: 5
        },
        {
            img: "https://avatar.vercel.sh/emily",
            name: "Emily Rodriguez",
            role: "Operations Director",
            company: "Creative Media",
            content:
                "The process was straightforward and transparent. I appreciated the quick valuation and secure transaction process. Will definitely use again!",
            stars: 4
        },
        {
            img: "https://avatar.vercel.sh/alex",
            name: "Alexander Thomas",
            role: "Finance Director",
            company: "InnovateCorp",
            content:
                "SoftSell's platform gave us the best return on our unused software investments. Their team was professional and the entire process was completed faster than expected.",
            stars: 5
        },
        {
            img: "https://avatar.vercel.sh/priya",
            name: "Priya Patel",
            role: "Procurement Manager",
            company: "NextWave Technologies",
            content:
                "We had a surplus of licenses after a project cancellation. SoftSell not only found buyers quickly but also secured better pricing than we anticipated.",
            stars: 4
        },
        {
            img: "https://avatar.vercel.sh/marco",
            name: "Marco Rossi",
            role: "Head of IT",
            company: "European Dynamics",
            content:
                "The dashboard for tracking our license sales is intuitive and provides excellent visibility into the process. A truly valuable service for any business managing software assets.",
            stars: 5
        },
        {
            img: "https://avatar.vercel.sh/tanya",
            name: "Tanya Williams",
            role: "Software Asset Manager",
            company: "DigitalFirst Solutions",
            content:
                "As someone who manages software licenses daily, I can attest that SoftSell provides unmatched value. Their marketplace connected us with the right buyers immediately.",
            stars: 5
        },
        {
            img: "https://avatar.vercel.sh/david",
            name: "David Park",
            role: "COO",
            company: "Synergy Systems",
            content:
                "Our company saved thousands by liquidating unused licenses through SoftSell. The platform is secure and their verification process gave us confidence in every transaction.",
            stars: 5
        },
        {
            img: "https://avatar.vercel.sh/sofia",
            name: "Sofia Garcia",
            role: "VP of Technology",
            company: "Future Tech",
            content:
                "SoftSell's analytics helped us understand our software utilization and make better purchasing decisions going forward. Beyond just sales, they're a genuine asset management partner.",
            stars: 4
        }
    ]
    const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
    const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

    return (
        <section id="testimonials" className="py-24 container mx-auto relative flex flex-col items-center ">
            <div className="container mx-auto  text-center">
                <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
                <p className="text-lg  max-w-2xl mx-auto">
                    Trusted by IT leaders and procurement professionals worldwide
                </p>
            </div>

            <div className="relative flex h-[700px] w-10/12 px-10 flex-col items-center justify-center overflow-hidden bg-transparent">
                <Marquee pauseOnHover className="[--duration:30s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:30s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>

            </div>
        </section>
    )
}


const ReviewCard = ({
    img,
    name,
    role,
    company,
    content,
}: {
    img: string;
    name: string;
    role: string;
    company: string;
    content: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-80 mx-4 m2-4 cursor-pointer overflow-hidden rounded-xl border p-6 transition-all duration-300",
                // light styles
                "border-gray-200 bg-white shadow-sm hover:border-gray-300 hover:shadow-md",
                // dark styles
                "dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700",
            )}
        >
            <Quote size={24} className="text-gray-300 dark:text-neutral-300 mb-2 opacity-50" />

            <blockquote className="text-sm mb-4">{content}</blockquote>

            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <img
                    className="rounded-full h-10 w-10 object-cover"
                    width="40"
                    height="40"
                    alt={`Photo of ${name}`}
                    src={img}
                />
                <div>
                    <figcaption className="font-medium text-gray-900 dark:text-white">
                        {name}
                    </figcaption>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                        {role} · {company}
                    </div>
                </div>
            </div>
        </figure>
    );
};

export default Testimonials