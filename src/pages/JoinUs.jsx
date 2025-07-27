
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Users, 
  Zap, 
  Globe, 
  Award, 
  BookOpen, 
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const JoinUs = () => {
  const { toast } = useToast();

  const benefits = [
    {
      icon: Zap,
      title: 'Technical Skill Development',
      description: 'Access to workshops, hackathons, and hands-on projects to sharpen your technical abilities.'
    },
    {
      icon: Globe,
      title: 'Global Networking',
      description: 'Connect with a global community of engineers, academics, and industry professionals.'
    },
    {
      icon: Award,
      title: 'Career Opportunities',
      description: 'Exclusive access to internships, job boards, and career development resources.'
    },
    {
      icon: BookOpen,
      title: 'Access to Publications',
      description: 'Get complimentary access to IEEE Spectrum magazine and other top-tier publications.'
    }
  ];

  const faqs = [
    {
      question: 'Who can join the IEEE Student Chapter?',
      answer: 'Any undergraduate or graduate student enrolled at our college with an interest in technology and engineering is welcome to join.'
    },
    {
      question: 'What is the membership fee?',
      answer: 'Membership fees vary. Please refer to the official IEEE website for current student membership rates. Our chapter may have a small additional activity fee.'
    },
    {
      question: 'What is the time commitment?',
      answer: 'The time commitment is flexible. You can participate as much as your schedule allows, from attending occasional events to taking on leadership roles.'
    },
    {
      question: 'Do I need to be in a specific major?',
      answer: 'No! While many of our members are from engineering and computer science, we welcome students from all disciplines who are passionate about technology.'
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "✅ Thank you for your interest!",
      description: "Your submission has been received. We will get back to you shortly.",
    });
    e.target.reset();
  };

  return (
    <>
      <Helmet>
        <title>Join Us - IEEE Student Chapter</title>
        <meta name="description" content="Become a member of our IEEE Student Chapter and unlock a world of opportunities for technical growth, networking, and professional development." />
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
              Join Our Community
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Become a part of the world&apos;s largest technical professional organization and accelerate your journey in technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Membership Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlock a world of opportunities by becoming an IEEE member.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-lift">
                  <CardContent className="p-8 flex items-start space-x-6">
                    <div className="feature-icon">
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Join?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fill out the form below to express your interest in joining our IEEE Student Chapter. 
                We&apos;ll get in touch with you with the next steps. For official membership, you will also need to register on the main IEEE website.
              </p>
              <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  Official IEEE Registration
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="contact-form p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john.doe@college.edu" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Input id="department" placeholder="e.g., Computer Science" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year">Graduation Year</Label>
                      <Input id="year" type="number" placeholder="e.g., 2025" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason">Why do you want to join?</Label>
                    <Textarea id="reason" placeholder="Tell us about your interests and what you hope to gain..." required />
                  </div>
                  <Button type="submit" className="w-full btn-ieee" size="lg">
                    Submit Interest Form
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about joining our chapter.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-start space-x-3">
                      <HelpCircle className="w-5 h-5 text-primary mt-1" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed pl-8">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinUs;