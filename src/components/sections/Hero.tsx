"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, Phone } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
            {/* Background gradients */}
            <div className="absolute top-0 -z-10 h-full w-full bg-background">
                <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 transform blur-3xl" aria-hidden="true">
                    <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-green-500 to-emerald-700 opacity-20 sm:opacity-30 mix-blend-multiply dark:mix-blend-lighten" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 text-center">
                {/* Logo */}
                <div className="mx-auto mb-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/20 bg-white shadow-lg flex items-center justify-center p-2">
                    <Image src="/logo.png" alt="Kelly & Co Property Services" width={256} height={256} className="object-contain w-full h-full" unoptimized />
                </div>

                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70 mb-6">
                        Expert Lawn Care & Landscaping
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
                        Professional mowing, landscaping, and property maintenance services. We take pride in keeping your outdoor spaces looking perfect year-round.
                    </p>
                    <p className="text-sm font-medium text-primary mb-10">
                        Proudly Serving the Cedar Valley, Iowa
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#get-started"
                            className={buttonVariants({ size: "lg", className: "w-full sm:w-auto gap-2" })}
                        >
                            Get a Free Quote
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a
                            href="tel:319-988-1650"
                            className={buttonVariants({ variant: "default", size: "lg", className: "w-full sm:w-auto gap-2" })}
                        >
                            <Phone className="h-4 w-4" />
                            319-988-1650
                        </a>
                        <a
                            href="#services"
                            className={buttonVariants({ variant: "default", size: "lg", className: "w-full sm:w-auto gap-2" })}
                        >
                            <Leaf className="h-4 w-4" />
                            View Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
