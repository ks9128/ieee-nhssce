
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Calendar, Mic, Award } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const StatCard = ({ icon, value, label, delay }) => (
  <motion.div
    className="bg-card/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center border border-primary/20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {icon}
    <p className="text-4xl font-bold text-primary mt-2">{value}</p>
    <p className="text-muted-foreground uppercase tracking-widest text-sm">{label}</p>
  </motion.div>
);

const HomePage = () => {
  const { toast } = useToast();

  const handleNotImplemented = () => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Home | IEEE Student Chapter</title>
        <meta name="description" content="Welcome to the official website of the IEEE Student Chapter. Discover our events, projects, and how to join our community of innovators." />
      </Helmet>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        
        <section className="relative container mx-auto min-h-[calc(100vh-5rem)] flex items-center justify-center text-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10"
          >
            <motion.div 
              className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Advancing Technology for Humanity
            </motion.div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6">
              <span className="block">Innovate.</span>
              <span className="block text-primary">Collaborate.</span>
              <span className="block">Inspire.</span>
            </h1>
            <motion.p 
              className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Join our vibrant community of tech enthusiasts, developers, and future leaders. Explore the world of technology with IEEE.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button asChild size="lg" className="rounded-full text-lg uppercase font-bold tracking-wider w-full sm:w-auto">
                <NavLink to="/join-us">Become a Member</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-lg uppercase font-bold tracking-wider w-full sm:w-auto">
                <NavLink to="/events">
                  Upcoming Events <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section className="relative container mx-auto py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard icon={<Users className="h-10 w-10 text-accent" />} value="150+" label="Members" delay={0.2} />
            <StatCard icon={<Calendar className="h-10 w-10 text-accent" />} value="50+" label="Events Hosted" delay={0.4} />
            <StatCard icon={<Mic className="h-10 w-10 text-accent" />} value="20+" label="Workshops" delay={0.6} />
            <StatCard icon={<Award className="h-10 w-10 text-accent" />} value="10+" label="Awards Won" delay={0.8} />
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Don&apos;t miss out on our exciting lineup of workshops, seminars, and competitions.
            </p>
            <div className="text-xl text-muted-foreground p-16 bg-card rounded-xl border border-dashed border-border">
              <p>Event cards will be displayed here.</p>
              <Button onClick={handleNotImplemented} className="mt-4">View All Events</Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">From Our Blog</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Read the latest articles, project showcases, and insights from our members.
            </p>
            <div className="text-xl text-muted-foreground p-16 bg-background rounded-xl border border-dashed border-border">
              <p>Blog post cards will be displayed here.</p>
              <Button onClick={handleNotImplemented} variant="outline" className="mt-4">Read The Blog</Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Our Partners & Sponsors</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              We are grateful for the support of our partners who help us make our events a success.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              <img  className="h-12" alt="Partner Logo 1" src="https://images.unsplash.com/photo-1585065799297-ce07d1855c01" />
              <img  className="h-12" alt="Partner Logo 2" src="https://images.unsplash.com/photo-1643546352161-3c34e040b495" />
              <img  className="h-12" alt="Partner Logo 3" src="https://images.unsplash.com/photo-1586374131028-038f2661600f" />
              <img  className="h-12" alt="Partner Logo 4" src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
              <img  className="h-12" alt="Partner Logo 5" src="https://images.unsplash.com/photo-1579424471975-46ac8089543b" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
  