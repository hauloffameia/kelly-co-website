"use client"

import { Check, X } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { cn } from "@/lib/utils"

const tiers = [
    {
        name: "Standard Mowing",
        id: "tier-mowing",
        href: "#get-started",
        price: "Starts at",
        description: "Reliable, weekly maintenance to keep your grass healthy and neat.",
        features: [
            "Weekly or Bi-Weekly Mowing",
            "Line Trimming",
            "Walkway Edging",
            "Cleanup of Clippings",
        ],
        notIncluded: [
            "Shrub Trimming",
            "Mulch Installation",
        ],
        cta: "Request Quote",
        mostPopular: false,
    },
    {
        name: "Property Maintenance",
        id: "tier-maintenance",
        href: "#get-started",
        price: "Most Popular",
        period: "",
        description: "Our comprehensive package for a worry-free, pristine yard.",
        features: [
            "Weekly Mowing & Edging",
            "Weed Control for Beds",
            "Bi-annual Shrub Trimming",
            "Spring & Fall Cleanups",
            "Priority Scheduling",
        ],
        notIncluded: [],
        cta: "Request Quote",
        mostPopular: true,
    },
    {
        name: "Projects & Cleanups",
        id: "tier-projects",
        href: "#get-started",
        price: "Custom",
        description: "One-off services tailored to your specific outdoor needs.",
        features: [
            "Mulch Installation",
            "Junk & Debris Removal",
            "Powerwashing",
            "Overgrown Yard Cleanups",
            "Snow Removal",
        ],
        notIncluded: [],
        cta: "Schedule Consultation",
        mostPopular: false,
    },
]

export function Pricing() {
    return (
        <section id="plans" className="py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Service Plans & Pricing
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We offer flexible maintenance plans and custom project pricing to fit your property's exact needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier) => (
                        <Card
                            key={tier.id}
                            className={cn(
                                "relative flex flex-col items-start p-2",
                                tier.mostPopular ? "border-primary shadow-lg scale-105 z-10" : "border-border"
                            )}
                        >
                            {tier.mostPopular && (
                                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground text-center">
                                    Recommended
                                </div>
                            )}
                            <CardHeader className="w-full">
                                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                                <CardDescription className="min-h-[40px]">{tier.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="w-full flex-1">
                                <div className="mb-6">
                                    <span className="text-3xl font-extrabold">{tier.price}</span>
                                    {tier.period && <span className="text-muted-foreground font-medium">{tier.period}</span>}
                                </div>
                                <ul className="space-y-3 text-sm">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-3 text-foreground">
                                            <Check className="h-5 w-5 text-primary shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                    {tier.notIncluded.map((feature) => (
                                        <li key={feature} className="flex gap-3 text-muted-foreground">
                                            <X className="h-5 w-5 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="w-full">
                                <Link
                                    href={tier.href}
                                    className={buttonVariants({
                                        variant: tier.mostPopular ? "default" : "outline",
                                        className: "w-full"
                                    })}
                                >
                                    {tier.cta}
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
