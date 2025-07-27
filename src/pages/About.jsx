
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Calendar,
  MapPin,
  Mail,
  Linkedin
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const About = () => {
  const { toast } = useToast();

  const boardMembers = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Faculty Advisor',
      department: 'Electrical Engineering',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      email: 'sarah.mitchell@college.edu',
      linkedin: '#'
    },
    {
      name: 'Prof. Michael Johnson',
      role: 'Co-Faculty Advisor',
      department: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      email: 'michael.johnson@college.edu',
      linkedin: '#'
    },
    {
      name: 'Sarah Johnson',
      role: 'Chapter President',
      department: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      email: 'sarah.johnson@college.edu',
      linkedin: '#'
    },
    {
      name: 'Michael Chen',
      role: 'Vice President',
      department: 'Electrical Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      email: 'michael.chen@college.edu',
      linkedin: '#'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Secretary',
      department: 'Information Technology',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      email: 'emily.rodriguez@college.edu',
      linkedin: '#'
    },
    {
      name: 'Alex Thompson',
      role: 'Treasurer',
      department: 'Computer Engineering',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      email: 'alex.thompson@college.edu',
      linkedin: '#'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Chapter Founded',
      description: 'IEEE Student Chapter established with 25 founding members'
    },
    {
      year: '2019',
      title: 'First Major Event',
      description: 'Organized our first technical symposium with 200+ participants'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Successfully transitioned to virtual events during pandemic'
    },
    {
      year: '2021',
      title: 'Outstanding Chapter Award',
      description: 'Received IEEE Region 3 Outstanding Student Branch Award'
    },
    {
      year: '2022',
      title: 'Community Outreach',
      description: 'Launched STEM education program for local high schools'
    },
    {
      year: '2023',
      title: 'International Recognition',
      description: 'Featured as model chapter in IEEE Student Activities'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Established dedicated makerspace and innovation lab'
    }
  ];

  const handleContactClick = (email) => {
    toast({
      title: "🚧 Direct email contact isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>About Us - IEEE Student Chapter</title>
        <meta name="description" content="Learn about our IEEE Student Chapter's mission, vision, history, and the dedicated team working to advance technology for humanity." />
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
              About Our Chapter
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Empowering the next generation of engineers and technologists through innovation, 
              education, and professional development since 2018.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="feature-icon">
                    <Target className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To foster technological innovation and excellence among students by providing 
                  opportunities for professional development, technical skill enhancement, and 
                  meaningful contributions to society through engineering and technology.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="feature-icon">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading student organization that bridges the gap between academic 
                  learning and industry practice, creating a community of innovative engineers 
                  who will shape the future of technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img  
                  className="w-full h-full object-cover"
                  alt="IEEE Student Chapter team meeting"
                 src="https://images.unsplash.com/photo-1595240297051-70f807007b92" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent/20 rounded-full animate-float"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapter History Timeline */}
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
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to becoming a recognized leader in student engineering organizations
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-0.5"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="timeline-item ml-8 md:ml-0">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                          <h3 className="text-xl font-semibold text-foreground">{milestone.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty & Student Board */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated faculty advisors and student leaders who guide our chapter
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="member-card hover-lift h-full text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="relative mx-auto w-24 h-24">
                      <img  
                        className="w-full h-full rounded-full object-cover shadow-lg"
                        alt={member.name}
                       src="https://images.unsplash.com/photo-1652841190565-b96e0acbae17" />
                      <div className="absolute inset-0 rounded-full ring-4 ring-primary/20"></div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.department}</p>
                    </div>

                    <div className="flex justify-center space-x-3 pt-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleContactClick(member.email)}
                        className="w-8 h-8"
                      >
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleContactClick(member.linkedin)}
                        className="w-8 h-8"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Stats */}
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
              Chapter Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our achievements and contributions to the engineering community
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Active Members', value: '150+', color: 'text-blue-600' },
              { icon: Calendar, label: 'Events Organized', value: '50+', color: 'text-green-600' },
              { icon: Award, label: 'Awards Received', value: '25+', color: 'text-purple-600' },
              { icon: MapPin, label: 'Community Projects', value: '15+', color: 'text-orange-600' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="stats-counter">{stat.value}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do as an organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We embrace creativity and encourage innovative thinking to solve complex challenges.',
                icon: '💡'
              },
              {
                title: 'Excellence',
                description: 'We strive for the highest standards in everything we do, from events to projects.',
                icon: '⭐'
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and building strong professional networks.',
                icon: '🤝'
              },
              {
                title: 'Integrity',
                description: 'We maintain the highest ethical standards and promote responsible engineering practices.',
                icon: '🛡️'
              },
              {
                title: 'Diversity',
                description: 'We celebrate diverse perspectives and create an inclusive environment for all.',
                icon: '🌍'
              },
              {
                title: 'Service',
                description: 'We are committed to serving our community and making a positive impact on society.',
                icon: '❤️'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-lift">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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

export default About;
