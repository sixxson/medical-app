import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from "react"

export type FAQItem = {
    qn: string;
    aws: string | React.ReactNode;
}

export function CustomAccordion({ FAQs }: { FAQs: FAQItem[] }) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {
                FAQs.map((faq, i) => {
                    return (
                        <AccordionItem key={i} value={faq.qn} >
                            <AccordionTrigger>{faq.qn}</AccordionTrigger>
                            <AccordionContent>
                                {faq.aws}
                            </AccordionContent>
                        </AccordionItem>
                    )
                })}
        </Accordion >
    )
}
