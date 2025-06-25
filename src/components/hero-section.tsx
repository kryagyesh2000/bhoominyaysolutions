import { Button } from "@/components/ui/button";
import { CalendarCheck, Award, IdCard } from "lucide-react";
import image1 from "@assets/image2_1750538376573.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-green-50 to-green-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Land. Your Rights.{" "}
              <span className="text-primary">Our Expertise.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We simplify complex land matters—title verification, dispute resolution, registry issues, and more. 
              Backed by <span className="font-semibold text-primary">30+ years</span> of government expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
              >
                <CalendarCheck className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('about')}
                className="border-2 border-primary text-primary px-8 py-4 text-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                <Award className="mr-2 h-5 w-5" />
                Explore Our Legacy
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={image1}
                alt="Indian farmer holding land ownership certificate with government officer in agricultural field"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-white bg-opacity-95 px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center text-primary font-semibold">
                  <IdCard className="mr-2 h-4 w-4" />
                  <span className="text-sm">Land Rights Secured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
