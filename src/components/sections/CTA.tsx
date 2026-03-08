"use client"

import { useEffect, useRef } from "react"

export function CTA() {
    const formContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Load the Cognito Forms seamless script
        const script = document.createElement("script")
        script.src = "https://www.cognitoforms.com/f/seamless.js"
        script.setAttribute("data-key", "s6w6emTA8EyGSLYeJSFCHg")
        script.setAttribute("data-form", "2")
        script.async = true

        if (formContainerRef.current) {
            formContainerRef.current.appendChild(script)
        }

        return () => {
            // Cleanup on unmount
            if (formContainerRef.current && script.parentNode === formContainerRef.current) {
                formContainerRef.current.removeChild(script)
            }
        }
    }, [])

    return (
        <section id="get-started" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-primary/5 dark:bg-primary/10"></div>
            <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform blur-3xl opacity-20 dark:opacity-30">
                <div className="aspect-square w-[40rem] rounded-full bg-gradient-to-tr from-primary to-green-500"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 text-center border bg-background/50 backdrop-blur-md rounded-3xl p-10 md:p-20 max-w-5xl shadow-xl">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl mb-6">
                    Request a Free Estimate
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                    Ready to transform your property? Fill out the form below and we'll be in touch within 24 hours to schedule a consultation.
                </p>

                {/* Cognito Forms Embed */}
                <div ref={formContainerRef} className="max-w-2xl mx-auto text-left" />

                <p className="text-sm text-muted-foreground mt-6">
                    No obligation. Free consultations for all new projects.
                </p>
            </div>
        </section>
    )
}
