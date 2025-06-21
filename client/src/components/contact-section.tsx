import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  PhoneCall
} from "lucide-react";

const consultationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  issue: z.string().min(10, "Please provide at least 10 characters describing your issue"),
});

type ConsultationForm = z.infer<typeof consultationSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ConsultationForm>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      issue: "",
    },
  });

  const onSubmit = async (data: ConsultationForm) => {
    setIsSubmitting(true);
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzpA1YXSx0hzoty71amzcVfeBuaR3ltMu2ZI_ueMZ3KEdjvJYn2kdw1iCJt1JHZoBmi/exec';
    
    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('service', data.service);
    formData.append('issue', data.issue);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        toast({
          title: "Consultation Scheduled Successfully!",
          description: "Thank you for your consultation request! We will contact you within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem scheduling the consultation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your <span className="text-primary">Free Consultation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to resolve your land matters? Contact us today for expert guidance backed by decades of experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Consultation</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Required *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Land Dispute Resolution">Land Dispute Resolution</SelectItem>
                            <SelectItem value="Ownership Verification">Ownership Verification</SelectItem>
                            <SelectItem value="Mutation Assistance">Mutation Assistance</SelectItem>
                            <SelectItem value="Court Case Support">Court Case Support</SelectItem>
                            <SelectItem value="Land Title Verification">Land Title Verification</SelectItem>
                            <SelectItem value="Legal Notices & Affidavits">Legal Notices & Affidavits</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="issue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Describe Your Issue *</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Please provide details about your land-related concern..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-4 px-6 text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Submitting..." : "Schedule Free Consultation"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                    <p className="text-gray-600">123 Revenue Block, Sector 45<br />Government Area, Delhi - 110001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone Number</h4>
                    <p className="text-gray-600">+91 7677406032</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">bhoominyaysolutions@outlook.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Emergency consultations only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Box */}
            <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-3">Urgent Land Matter?</h4>
              <p className="mb-4 opacity-90">Get immediate expert guidance for time-sensitive land disputes and legal issues.</p>
              <a
                href="tel:+917677406032"
                className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                Call Now: +91 7677406032
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
