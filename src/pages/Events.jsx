
import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Filter, 
  Search,
  Users,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useData } from '@/contexts/DataContext';
import { useToast } from '@/components/ui/use-toast';

const Events = () => {
  const { data } = useData();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const eventTypes = ['all', 'workshop', 'webinar', 'competition', 'celebration', 'presentation'];
  const eventStatuses = ['all', 'upcoming', 'completed', 'cancelled'];
  const eventYears = ['all', '2024', '2023', '2022'];

  const filteredEvents = useMemo(() => {
    return data.events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === 'all' || event.type === selectedType;
      const matchesStatus = selectedStatus === 'all' || event.status === selectedStatus;
      const eventYear = new Date(event.date).getFullYear().toString();
      const matchesYear = selectedYear === 'all' || eventYear === selectedYear;

      return matchesSearch && matchesType && matchesStatus && matchesYear;
    });
  }, [data.events, searchTerm, selectedType, selectedStatus, selectedYear]);

  const upcomingEvents = data.events.filter(event => event.status === 'upcoming');
  const completedEvents = data.events.filter(event => event.status === 'completed');

  const handleRegisterClick = () => {
    toast({
      title: "🚧 Event registration isn&apos;t implemented yet—but don&apos;t worry! You can request it in your next prompt! 🚀"
    });
  };

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

  return (
    <>
      <Helmet>
        <title>Events - IEEE Student Chapter</title>
        <meta name="description" content="Discover upcoming workshops, webinars, competitions, and celebrations organized by our IEEE Student Chapter. Join us for exciting learning and networking opportunities." />
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
              Events & Activities
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Join us for workshops, competitions, and networking events that will enhance your technical skills and professional development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, label: 'Total Events', value: data.events.length, color: 'text-blue-600' },
              { icon: Clock, label: 'Upcoming Events', value: upcomingEvents.length, color: 'text-green-600' },
              { icon: Users, label: 'Completed Events', value: completedEvents.length, color: 'text-purple-600' },
              { icon: MapPin, label: 'Event Types', value: [...new Set(data.events.map(e => e.type))].length, color: 'text-orange-600' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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

      {/* Filters Section */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search events by title, description, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filters:</span>
              </div>
              
              {/* Type Filter */}
              <div className="flex flex-wrap gap-2">
                {eventTypes.map(type => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className="capitalize"
                  >
                    {type === 'all' ? 'All Types' : type}
                  </Button>
                ))}
              </div>

              {/* Status Filter */}
              <div className="flex flex-wrap gap-2">
                {eventStatuses.map(status => (
                  <Button
                    key={status}
                    variant={selectedStatus === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedStatus(status)}
                    className="capitalize"
                  >
                    {status === 'all' ? 'All Status' : status}
                  </Button>
                ))}
              </div>

              {/* Year Filter */}
              <div className="flex flex-wrap gap-2">
                {eventYears.map(year => (
                  <Button
                    key={year}
                    variant={selectedYear === year ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedYear(year)}
                  >
                    {year === 'all' ? 'All Years' : year}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-muted-foreground">
                Showing {filteredEvents.length} of {data.events.length} events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Calendar className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No events found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="event-card hover-lift h-full overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img  
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        alt={event.title}
                       src={event.image} />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      {/* Event Meta */}
                      <div className="flex items-center justify-between">
                        <Badge className={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                        <Badge className={getStatusColor(event.status)}>
                          {event.status}
                        </Badge>
                      </div>

                      {/* Event Title */}
                      <h3 className="text-xl font-semibold text-foreground line-clamp-2">
                        {event.title}
                      </h3>

                      {/* Event Description */}
                      <p className="text-muted-foreground line-clamp-3">
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span>Organized by {event.organizer}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2 pt-4">
                        <Link to={`/events/${event.id}`} className="flex-1">
                          <Button variant="outline" className="w-full">
                            Learn More
                            <ChevronRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                        {event.status === 'upcoming' && (
                          <Button 
                            className="flex-1 btn-ieee"
                            onClick={() => handleRegisterClick(event)}
                          >
                            Register
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
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
              Don't Miss Our Upcoming Events
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay connected with our community and never miss an opportunity to learn, network, and grow. 
              Join our mailing list for event updates and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  Join Our Chapter
                  <Users className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
                  Contact Us
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Events;
