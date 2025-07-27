
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Calendar,
  Award,
  Users,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useData } from '@/contexts/DataContext';
import { useToast } from '@/components/ui/use-toast';

const MemberProfile = () => {
  const { slug } = useParams();
  const { data } = useData();
  const { toast } = useToast();

  const member = data.members.find(m => m.slug === slug);

  const handleContactClick = () => {
    toast({
      title: "🚧 Direct contact isn&apos;t implemented yet—but don&apos;t worry! You can request it in your next prompt! 🚀"
    });
  };

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Member Not Found</h1>
          <p className="text-muted-foreground">The member profile you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/members">
            <Button>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Members
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getTeamBadgeClass = (team) => {
    const classes = {
      technical: 'team-technical',
      management: 'team-management',
      marketing: 'team-marketing',
      design: 'team-design'
    };
    return classes[team] || 'team-technical';
  };

  const getStatusBadgeClass = (status) => {
    const classes = {
      active: 'status-active',
      alumni: 'status-alumni',
      inactive: 'status-inactive'
    };
    return classes[status] || 'status-inactive';
  };

  // Get member's contributed events
  const memberEvents = data.events.filter(event => 
    event.organizer && event.organizer.toLowerCase().includes(member.team.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>{member.name} - IEEE Student Chapter</title>
        <meta name="description" content={`Meet ${member.name}, ${member.role} at IEEE Student Chapter. ${member.bio || `${member.name} is a dedicated member of our ${member.team} team.`}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="profile-hero py-20 lg:py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white space-y-6"
          >
            {/* Back Button */}
            <div className="flex justify-start mb-8">
              <Link to="/members">
                <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Members
                </Button>
              </Link>
            </div>

            {/* Profile Image */}
            <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40">
              <img  
                className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white/20"
                alt={member.name}
               src={member.image} />
              <div className="absolute inset-0 rounded-full ring-4 ring-white/30"></div>
            </div>

            {/* Basic Info */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">{member.name}</h1>
              <p className="text-xl md:text-2xl text-white/90">{member.role}</p>
              <p className="text-lg text-white/80">{member.department}</p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <span className={`team-badge ${getTeamBadgeClass(member.team)} bg-white/20 text-white border-white/30`}>
                {member.team} Team
              </span>
              <span className={`status-badge ${getStatusBadgeClass(member.status)} bg-white/20 text-white border-white/30`}>
                {member.status}
              </span>
              <span className="status-badge bg-white/20 text-white border-white/30">
                Class of {member.year}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span>About {member.name.split(' ')[0]}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.bio || `${member.name} is a dedicated member of our IEEE Student Chapter, contributing to the ${member.team} team with passion and expertise. As a ${member.role}, they play a crucial role in advancing our chapter's mission of technological innovation and professional development.`}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Skills & Expertise */}
              {member.skills && member.skills.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-primary" />
                        <span>Skills & Expertise</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="skill-tag">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Contributed Events */}
              {memberEvents.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>Contributed Events</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {memberEvents.slice(0, 3).map((event) => (
                          <div key={event.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                            <div>
                              <h4 className="font-semibold text-foreground">{event.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {new Date(event.date).toLocaleDateString()} • {event.location}
                              </p>
                            </div>
                            <Link to={`/events/${event.id}`}>
                              <Button variant="outline" size="sm">
                                View Event
                              </Button>
                            </Link>
                          </div>
                        ))}
                        {memberEvents.length > 3 && (
                          <div className="text-center">
                            <Link to="/events">
                              <Button variant="outline">
                                View All Events
                                <ExternalLink className="ml-2 w-4 h-4" />
                              </Button>
                            </Link>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {member.email && (
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-primary" />
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">Email</p>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-foreground hover:text-primary"
                            onClick={() => handleContactClick(member.email)}
                          >
                            {member.email}
                          </Button>
                        </div>
                      </div>
                    )}

                    {member.phone && (
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-primary" />
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-foreground hover:text-primary"
                            onClick={() => handleContactClick(member.phone)}
                          >
                            {member.phone}
                          </Button>
                        </div>
                      </div>
                    )}

                    {member.linkedin && (
                      <div className="flex items-center space-x-3">
                        <Linkedin className="w-4 h-4 text-primary" />
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">LinkedIn</p>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-foreground hover:text-primary"
                            onClick={() => handleContactClick(member.linkedin)}
                          >
                            View Profile
                          </Button>
                        </div>
                      </div>
                    )}

                    {member.github && (
                      <div className="flex items-center space-x-3">
                        <Github className="w-4 h-4 text-primary" />
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">GitHub</p>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-foreground hover:text-primary"
                            onClick={() => handleContactClick(member.github)}
                          >
                            View Profile
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Member Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Member Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Department</p>
                        <p className="font-medium text-foreground">{member.department}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Graduation Year</p>
                        <p className="font-medium text-foreground">{member.year}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Users className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Team</p>
                        <p className="font-medium text-foreground capitalize">{member.team}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Award className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Member Since</p>
                        <p className="font-medium text-foreground">
                          {new Date(member.joinDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long'
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <div className={`w-3 h-3 rounded-full ${
                          member.status === 'active' ? 'bg-green-500' :
                          member.status === 'alumni' ? 'bg-purple-500' : 'bg-gray-500'
                        }`}></div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Status</p>
                        <p className="font-medium text-foreground capitalize">{member.status}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      className="w-full" 
                      onClick={() => handleContactClick('message')}
                    >
                      <Mail className="mr-2 w-4 h-4" />
                      Send Message
                    </Button>
                    <Link to="/members" className="block">
                      <Button variant="outline" className="w-full">
                        <Users className="mr-2 w-4 h-4" />
                        View All Members
                      </Button>
                    </Link>
                    <Link to="/join" className="block">
                      <Button variant="outline" className="w-full">
                        <Award className="mr-2 w-4 h-4" />
                        Join IEEE Chapter
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MemberProfile;
