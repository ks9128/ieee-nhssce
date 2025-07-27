
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Calendar, 
  Award, 
  BookOpen,
  Zap,
  Target,
  Globe,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useData } from '@/contexts/DataContext';
import { useToast } from '@/components/ui/use-toast';

const Home = () => {
  const { data } = useData();
  const { toast } = useToast();

  const stats = [
    { label: 'Active Members', value: '150+', icon: Users },
    { label: 'Events Organized', value: '50+', icon: Calendar },
    { label: 'Awards Won', value: '25+', icon: Award },
    { label: 'Publications', value: '30+', icon: BookOpen }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Technical Excellence',
      description: 'Cutting-edge workshops and hands-on projects to enhance your technical skills.'
    },
    {
      icon: Target,
      title: 'Professional Development',
      description: 'Career guidance, mentorship, and networking opportunities with industry experts.'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with IEEE members worldwide and participate in international initiatives.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Chapter President',
      content: 'IEEE has been instrumental in shaping my technical and leadership skills. The opportunities here are endless!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'Technical Lead',
      content: 'The hands-on projects and workshops have given me practical experience that complements my academic learning.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Newsletter signup isn&apos;t implemented yet—but don&apos;t worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>IEEE Student Chapter - Advancing Technology for Humanity</title>
        <meta name="description" content="Join our IEEE Student Chapter and be part of a community dedicated to advancing technology for humanity through innovation, education, and professional development." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl"
              >
                <span className="text-white font-bold text-3xl">IEEE</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-shadow">
                IEEE Student Chapter
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Advancing Technology for Humanity
              </p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Join our vibrant community of engineers, innovators, and technology enthusiasts. 
              Discover opportunities to learn, grow, and make a meaningful impact in the world of technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/join">
                <Button size="lg" className="btn-ieee text-lg px-8 py-4">
                  Join Our Chapter
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="feature-icon mx-auto">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="stats-counter">{stat.value}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Join IEEE?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the benefits of being part of the world's largest technical professional organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover h-full">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="feature-icon mx-auto">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Recent Events
              </h2>
              <p className="text-xl text-muted-foreground">
                Stay updated with our latest activities and workshops
              </p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="hidden sm:flex">
                View All Events
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.events.slice(0, 3).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="event-card hover-lift h-full overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img  
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      alt={event.title}
                     src="https://images.unsplash.com/photo-1617140242458-f561a51710af" />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`status-badge ${event.status === 'upcoming' ? 'status-active' : 'status-alumni'}`}>
                        {event.status}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {event.description}
                    </p>
                    <Link to={`/events/${event.id}`}>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link to="/events">
              <Button variant="outline">
                View All Events
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Latest from Our Blog
              </h2>
              <p className="text-xl text-muted-foreground">
                Insights, tutorials, and updates from our community
              </p>
            </div>
            <Link to="/blog">
              <Button variant="outline" className="hidden sm:flex">
                View All Posts
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.blogPosts.slice(0, 2).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="blog-card h-full overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img  
                      className="w-full h-full object-cover"
                      alt={post.title}
                     src="https://images.unsplash.com/photo-1587645663324-d7fc65590f25" />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>By {post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link to="/blog">
              <Button variant="outline">
                View All Posts
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Members Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our community about their IEEE experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="testimonial-card"
              >
                <p className="text-foreground text-lg leading-relaxed mb-6">
                  {testimonial.content}
                </p>
                <div className="flex items-center space-x-4">
                  <img  
                    className="w-12 h-12 rounded-full object-cover"
                    alt={testimonial.name}
                   src="https://images.unsplash.com/photo-1578390432942-d323db577792" />
                  <div>
                    <span className="font-semibold text-foreground">{testimonial.name}</span>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 ieee-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Take the first step towards advancing your career in technology. 
              Join IEEE and connect with like-minded individuals who share your passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  Become a Member
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Stay in the Loop
            </h2>
            <p className="text-lg text-muted-foreground">
              Get the latest updates on events, opportunities, and IEEE news delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" className="btn-ieee">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
