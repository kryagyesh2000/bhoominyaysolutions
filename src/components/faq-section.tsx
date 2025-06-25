import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "What documents do I need to verify land ownership?",
      answer: "Jamabandi, registry, mutation, and Khasra/Khatauni. We'll help you collect and interpret them."
    },
    {
      question: "Can you help with family land disputes?",
      answer: "Yes, we specialize in partition and ancestral property issues."
    },
    {
      question: "How long does mutation take?",
      answer: "Usually 15–30 days depending on document completeness."
    },
    {
      question: "Do you assist in court or RTI matters?",
      answer: "Yes, we support RTI drafting and case preparation."
    },
    {
      question: "How much does a consultation cost?",
      answer: "Your first consultation is free. Post that, we offer fixed, transparent pricing."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get quick answers to common land and revenue related questions
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Box */}
        <Card className="bg-gradient-to-r from-primary to-secondary text-white">
          <CardContent className="p-8 text-center">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-3">Can't find your answer?</h3>
            <p className="text-lg mb-6 opacity-90">
              Talk to our expert for personalized guidance.
            </p>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-primary px-8 py-3 text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}