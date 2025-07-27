
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ExternalLink,
  Share2,
  Download,
  Tag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useData } from '@/contexts/DataContext';
import { useToast } from '@/components/ui/use-toast';

const EventDetail = () => {
  const { id } = useParams();
  const { data } = useData();
  const { toast } = useToast();

  const event = data.events.find(e => e.id === id);

  const handleRegisterClick = () => {
    toast({
      title: "🚧 Event registration isn&apos;t implemented yet—but don&apos;t worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleShareClick = () => {
    toast({
      title: "🚧 Event sharing isn&apos;t implemented yet—but don&apos;t worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleDownloadClick = () => {
    toast({
      title: "🚧 Resource download isn&apos;t implemented yet—but don&apos;t worry! You can request it in your next prompt! 🚀"
    });
  };

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Event Not Found</h1>
          <p className="text-muted-foreground">The event you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/events">
            <Button>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Events
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getEventTypeColor = (type) => {
    const colors = {
      workshop: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      webinar: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      competition: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      celebration: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      presentation: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
    };
    return colors[type] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  };

  const getStatusColor = (status) => {
    const colors = {
      upcoming: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      completed: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
      cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    };
    return colors[status] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  };

  // Related events (same type or organizer)
  const relatedEvents = data.events
    .filter(e => e.id !== event.id && (e.type === event.type || e.organizer === event.organizer))
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{event.title} - IEEE Student Chapter</title>
        <meta name="description" content={event.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img  
            className="w-full h-full object-cover"
            alt={event.title}
           src={event.image} />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            {/* Back Button */}
            <div className="flex justify-start mb-8">
              <Link to="/events">
                <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Events
                </Button>
              </Link>
            </div>

            {/* Event Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className={`${getEventTypeColor(event.type)} border-white/30`}>
                {event.type}
              </Badge>
              <Badge className={`${getStatusColor(event.status)} border-white/30`}>
                {event.status}
              </Badge>
            </div>

            {/* Event Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {event.title}
            </h1>

            {/* Event Meta */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white/90">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>{event.organizer}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {event.status === 'upcoming' && (
                <Button 
                  size="lg" 
                  className="btn-ieee text-lg px-8 py-4"
                  onClick={handleRegisterClick}
                >
                  Register Now
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              )}
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary"
                onClick={handleShareClick}
              >
                Share Event
                <Share2 className="ml-2 w-5 h-5" />
              </Button>
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
              {/* Event Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>About This Event</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {event.description}
                      </p>
                      
                      {/* Extended description for demo */}
                      <div className="mt-6 space-y-4 text-muted-foreground">
                        <p>
                          This event is designed to provide participants with hands-on experience and practical knowledge 
                          that can be immediately applied in their academic and professional endeavors. Our expert speakers 
                          and facilitators bring years of industry experience and academic expertise to ensure a 
                          comprehensive learning experience.
                        </p>
                        
                        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">What You'll Learn</h3>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Fundamental concepts and advanced techniques</li>
                          <li>Real-world applications and case studies</li>
                          <li>Best practices and industry standards</li>
                          <li>Networking opportunities with peers and professionals</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Who Should Attend</h3>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Students interested in {event.type} topics</li>
                          <li>Professionals looking to expand their knowledge</li>
                          <li>IEEE members and technology enthusiasts</li>
                          <li>Anyone passionate about innovation and learning</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Event Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Event Gallery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div key={index} className="gallery-item aspect-video bg-muted rounded-lg overflow-hidden">
                          <img  
                            className="w-full h-full object-cover"
                            alt={`Event gallery image ${index}`}
                           src={`https://images.unsplash.com/photo-${1580000000000 + index}?w=400&h=300&fit=crop`} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Event Resources */}
              {event.status === 'completed' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Event Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { name: 'Presentation Slides', type: 'PDF', size: '2.5 MB' },
                          { name: 'Workshop Materials', type: 'ZIP', size: '15.2 MB' },
                          { name: 'Reference Links', type: 'TXT', size: '1.2 KB' },
                          { name: 'Certificate Template', type: 'PDF', size: '850 KB' }
                        ].map((resource, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Download className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-medium text-foreground">{resource.name}</h4>
                                <p className="text-sm text-muted-foreground">{resource.type} • {resource.size}</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" onClick={handleDownloadClick}>
                              Download
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Event Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Event Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="font-medium text-foreground">
                          {new Date(event.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Time</p>
                        <p className="font-medium text-foreground">{event.time}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium text-foreground">{event.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Organizer</p>
                        <p className="font-medium text-foreground">{event.organizer}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Tag className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Type</p>
                        <Badge className={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Registration/Action Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {event.status === 'upcoming' ? 'Registration' : 'Event Status'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {event.status === 'upcoming' ? (
                      <>
                        <p className="text-muted-foreground">
                          Don't miss this opportunity to enhance your skills and network with fellow engineers.
                        </p>
                        <Button 
                          className="w-full btn-ieee" 
                          size="lg"
                          onClick={handleRegisterClick}
                        >
                          Register Now
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          Registration is free for IEEE members
                        </p>
                      </>
                    ) : event.status === 'completed' ? (
                      <>
                        <p className="text-muted-foreground">
                          This event has been completed. Check out the resources and gallery above.
                        </p>
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={handleDownloadClick}
                        >
                          Download Resources
                          <Download className="ml-2 w-4 h-4" />
                        </Button>
                      </>
                    ) : (
                      <p className="text-muted-foreground">
                        This event has been cancelled. Please check our events page for upcoming opportunities.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Share Event */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Share This Event</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleShareClick}
                    >
                      <Share2 className="mr-2 w-4 h-4" />
                      Share on Social Media
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleShareClick}
                    >
                      Copy Event Link
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
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
                Related Events
              </h2>
              <p className="text-xl text-muted-foreground">
                You might also be interested in these events
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedEvents.map((relatedEvent, index) => (
                <motion.div
                  key={relatedEvent.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="event-card hover-lift h-full overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img  
                        className="w-full h-full object-cover"
                        alt={relatedEvent.title}
                       src={relatedEvent.image} />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge className={getEventTypeColor(relatedEvent.type)}>
                          {relatedEvent.type}
                        </Badge>
                        <Badge className={getStatusColor(relatedEvent.status)}>
                          {relatedEvent.status}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                        {relatedEvent.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(relatedEvent.date).toLocaleDateString()} • {relatedEvent.location}
                      </p>
                      <Link to={`/events/${relatedEvent.id}`}>
                        <Button variant="outline" className="w-full">
                          View Event
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default EventDetail;
