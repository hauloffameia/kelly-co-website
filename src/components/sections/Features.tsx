import { Scissors, Sunrise, Shovel, Trash2, Droplets, Plus } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
    {
        title: "Lawn Care Maintenance",
        description: "Reliable, consistent mowing schedules tailored to your yard's needs to keep your grass healthy and pristine.",
        icon: Scissors,
    },
    {
        title: "Spring & Fall Cleanups",
        description: "Seasonal clearing of leaves, debris, and dead foliage to prepare your property for the changing weather.",
        icon: Sunrise,
    },
    {
        title: "Mulch Installation",
        description: "Fresh mulch application to protect your plants, retain moisture, and keep your garden beds looking sharp year-round.",
        icon: Shovel,
    },
    {
        title: "Junk and Debris Removal",
        description: "Quick and efficient removal of unwanted items, yard waste, and general debris to keep your property clear.",
        icon: Trash2,
    },
    {
        title: "Powerwashing",
        description: "High-pressure cleaning to restore the original look of your driveways, patios, and walkways.",
        icon: Droplets,
    },
    {
        title: "And So Much More",
        description: "From minor repairs to specialized property maintenance, we handle the projects you don't have time for.",
        icon: Plus,
    },
]

export function Features() {
    return (
        <section id="services" className="py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Professional Property Services
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        From basic weekly maintenance to complete landscape transformations, our team provides everything you need for a stunning property.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <Card key={i} className="border bg-background transition-colors hover:bg-muted/50">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <feature.icon className="h-5 w-5 text-primary" />
                                </div>
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
