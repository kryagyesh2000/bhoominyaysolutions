import { Card, CardContent } from "@/components/ui/card";
import { 
  IdCard, 
  Scale, 
  FileText, 
  PenTool, 
  MapPin, 
  Search,
  CheckCircle
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: IdCard,
      title: "Land Title Verification",
      borderColor: "border-t-primary",
      iconColor: "text-primary",
      features: [
        "Jamabandi & registry checks",
        "Pre-purchase due diligence",
        "Ownership chain validation"
      ]
    },
    {
      icon: Scale,
      title: "Dispute Resolution Consulting",
      borderColor: "border-t-secondary",
      iconColor: "text-secondary",
      features: [
        "Family/ancestral land cases",
        "Partition conflict strategy",
        "Court case preparation"
      ]
    },
    {
      icon: FileText,
      title: "Mutation & Registry Support",
      borderColor: "border-t-accent",
      iconColor: "text-accent",
      features: [
        "Mutation tracking",
        "Name change and record correction",
        "Liaison with Patwari/Tehsildar"
      ]
    },
    {
      icon: PenTool,
      title: "Legal Notices & Affidavits",
      borderColor: "border-t-primary",
      iconColor: "text-primary",
      features: [
        "Drafting legal letters",
        "Format support for affidavits",
        "Case documentation help"
      ]
    },
    {
      icon: MapPin,
      title: "Land Map & Boundary Clarification",
      borderColor: "border-t-secondary",
      iconColor: "text-secondary",
      features: [
        "Khasra/Khatauni map analysis",
        "Area demarcation clarity",
        "Prevent encroachments"
      ]
    },
    {
      icon: Search,
      title: "RTI & File Follow-Up",
      borderColor: "border-t-accent",
      iconColor: "text-accent",
      features: [
        "RTI for land records",
        "Track registry/mutation applications",
        "Govt. file status updates"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Land & Revenue <span className="text-primary">Consulting Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your land-related challenges, backed by decades of government experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 ${service.borderColor}`}>
                <CardContent className="p-8">
                  <div className={`${service.iconColor} text-4xl mb-4`}>
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <ul className="space-y-3 text-gray-600">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 h-4 w-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
