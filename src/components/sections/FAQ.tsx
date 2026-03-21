"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Do you offer free estimates?",
        answer: "Yes, we provide free, no-obligation estimates for all of our services, including regular maintenance, landscaping projects, and snow removal.",
    },
    {
        question: "What areas do you service?",
        answer: "We proudly serve the Cedar Valley in Iowa and surrounding suburbs. Contact us to see if you fall within our regular service routes.",
    },
    {
        question: "Do I need to be home when you service my property?",
        answer: "Not at all. As long as we have access to all areas requiring service (like unlocked gates for fenced backyards), our team can complete the work while you are away.",
    },
    {
        question: "What happens if it rains on my scheduled mowing day?",
        answer: "In the event of heavy rain or severe weather, your service will be automatically rescheduled to the next available dry day, typically the very next day, without you needing to call.",
    },
    {
        question: "Do you offer commercial contracts for businesses/HOAs?",
        answer: "Yes, we handle year-round commercial property maintenance including plowing, salting, mowing, and landscape bed care for businesses and Homeowner Associations.",
    },
    {
        question: "How does billing work?",
        answer: "Billing is simple and hassle-free. We keep a card on file and charge automatically after each service is completed — no invoices to chase, no billing cycles to track. For larger landscaping projects, we typically require a deposit upfront with the remainder billed once the work is done.",
    },
]

export function FAQ() {
    return (
        <section id="faq" className="py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Have questions about our services? Check out the answers to some of the most common questions we receive.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion className="w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`}>
                                <AccordionTrigger className="text-left text-lg font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
