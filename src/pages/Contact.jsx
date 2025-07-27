
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "✅ Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    e.target.reset();
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - IEEE Student Chapter</title>
        <meta name="description" content="Get in touch with our IEEE Student Chapter. Find our contact details, office location, and send us a message through our contact form." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              We&apos;d love to hear from you! Whether you have a question, a suggestion, or just want to say hello, feel free to reach out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Contact Information</h2>
                <p className="text-lg text-muted-foreground">
                  Find us at our office, give us a call, or send us an email. We&apos;re always happy to connect.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="feature-icon">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Our Office</h3>
                    <p className="text-muted-foreground">123 University Avenue, Tech Building, Room 404<br />Tech City, TC 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="feature-icon">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Email Us</h3>
                    <p className="text-muted-foreground">info@ieeechapter.edu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="feature-icon">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="social-icon"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="contact-form p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Full Name</Label>
                      <Input id="contact-name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email Address</Label>
                      <Input id="contact-email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="e.g., Inquiry about workshop" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message here..." required rows={5} />
                  </div>
                  <Button type="submit" className="w-full btn-ieee" size="lg">
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Find Us on the Map
            </h2>
            <p className="text-xl text-muted-foreground">
              Visit our office located at the heart of the campus.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="aspect-video rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.129%2C51.506%2C-0.123%2C51.508&layer=mapnik"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IEEE Chapter Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;