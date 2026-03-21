"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center space-x-2">
                    <motion.div
                        initial={{ rotate: -10 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-full overflow-hidden border border-border bg-white flex items-center justify-center p-0.5 shadow-sm"
                    >
                        <Image src="/logo.png" alt="Kelly & Co Logo" width={48} height={48} className="object-contain w-full h-full" unoptimized />
                    </motion.div>
                    <span className="inline-block font-bold text-lg tracking-tight">
                        Kelly & Co Property Services
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <a href="#services" className="transition-colors hover:text-primary">
                        Services
                    </a>
                    <a href="#plans" className="transition-colors hover:text-primary">
                        Plans
                    </a>
                    <a href="#faq" className="transition-colors hover:text-primary">
                        FAQ
                    </a>
                </nav>
                <div className="flex items-center gap-4">
                    <a
                        href="tel:319-988-1650"
                        className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                        <Phone className="h-4 w-4" />
                        319-988-1650
                    </a>
                    <a
                        href="#get-started"
                        className={buttonVariants({ variant: "default", className: "hidden md:inline-flex" })}
                    >
                        Get a Quote
                    </a>
                </div>
            </div>
        </header>
    )
}
