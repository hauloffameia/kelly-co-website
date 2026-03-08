"use client"

import { Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Homeowner",
        company: "Westside Neighborhood",
        quote: "Kelly & Co transformed our overgrown backyard into a beautiful oasis. Their attention to detail during the spring cleanup was incredible, and we've kept them on for weekly mowing ever since.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Property Manager",
        company: "Oakwood Estates",
        quote: "As a property manager, I need reliable contractors. This team shows up on time every week, does pristine edging around the walkways, and leaves zero mess behind. Highly recommended.",
        rating: 5,
    },
    {
        name: "Emily Rodriguez",
        role: "Local Business Owner",
        company: "Main Street Cafe",
        quote: "They handle the landscaping and snow removal for my cafe. My storefront always looks inviting with fresh mulch and trimmed bushes, and my sidewalks are always safe in the winter.",
        rating: 5,
    },
    {
        name: "David Thompson",
        role: "Resident",
        company: "North Hills",
        quote: "The team installed a beautiful paver patio and fire pit for us last summer. The crew was professional, worked efficiently, and the final result exceeded our expectations.",
        rating: 5,
    },
    {
        name: "Jessica Patel",
        role: "Homeowner",
        company: "Pine Valley",
        quote: "I've gone through three different lawn care services in the past, but Kelly & Co is by far the best. My grass has never looked this green and healthy since they started their fertilization program.",
        rating: 5,
    },
    {
        name: "Robert Wilson",
        role: "HOA President",
        company: "The Willows",
        quote: "Handling the common areas for our neighborhood is a big job, but they manage it effortlessly. Professional communication, transparent pricing, and excellent quality of work.",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <section id="reviews" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Trusted by the Community
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Don't just take our word for it. Here's what your neighbors have to say about our services.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto px-12 md:px-0">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 h-full">
                                        <Card className="h-full border bg-background">
                                            <CardContent className="flex flex-col h-full p-6">
                                                <div className="flex gap-1 mb-4">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                                    ))}
                                                </div>
                                                <blockquote className="flex-1 mb-6 text-base leading-relaxed">
                                                    "{testimonial.quote}"
                                                </blockquote>
                                                <div className="flex items-center gap-4 mt-auto">
                                                    <div className="h-10 w-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                                                        {testimonial.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold">{testimonial.name}</div>
                                                        <div className="text-sm text-muted-foreground">
                                                            {testimonial.role}, {testimonial.company}
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
