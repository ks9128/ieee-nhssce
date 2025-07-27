
import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Users, 
  Mail, 
  Linkedin, 
  Github,
  MapPin,
  Calendar,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useData } from '@/contexts/DataContext';
import { useToast } from '@/components/ui/use-toast';

const Members = () => {
  const { data } = useData();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const teams = ['all', 'management', 'technical', 'marketing', 'design'];
  const years = ['all', '2024', '2025', '2026', '2027'];
  const statuses = ['all', 'active', 'alumni', 'inactive'];

  const filteredMembers = useMemo(() => {
    return data.members.filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           member.department.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTeam = selectedTeam === 'all' || member.team === selectedTeam;
      const matchesYear = selectedYear === 'all' || member.year === selectedYear;
      const matchesStatus = selectedStatus === 'all' || member.status === selectedStatus;

      return matchesSearch && matchesTeam && matchesYear && matchesStatus;
    });
  }, [data.members, searchTerm, selectedTeam, selectedYear, selectedStatus]);

  const memberStats = useMemo(() => {
    const total = data.members.length;
    const active = data.members.filter(m => m.status === 'active').length;
    const alumni = data.members.filter(m => m.status === 'alumni').length;
    const teams = [...new Set(data.members.map(m => m.team))].length;

    return { total, active, alumni, teams };
  }, [data.members]);

  const handleContactClick = () => {
    toast({
      title: "🚧 Direct contact isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

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

  return (
    <>
      <Helmet>
        <title>Members - IEEE Student Chapter</title>
        <meta name="description" content="Meet our diverse community of IEEE Student Chapter members, including current students, alumni, and faculty advisors from various engineering disciplines." />
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
              Our Members
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Meet the passionate engineers, innovators, and leaders who make our chapter a thriving community of excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Total Members', value: memberStats.total, color: 'text-blue-600' },
              { icon: Award, label: 'Active Members', value: memberStats.active, color: 'text-green-600' },
              { icon: Calendar, label: 'Alumni', value: memberStats.alumni, color: 'text-purple-600' },
              { icon: MapPin, label: 'Teams', value: memberStats.teams, color: 'text-orange-600' }
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
                placeholder="Search members by name, role, or department..."
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
              
              {/* Team Filter */}
              <div className="flex flex-wrap gap-2">
                {teams.map(team => (
                  <Button
                    key={team}
                    variant={selectedTeam === team ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTeam(team)}
                    className="capitalize"
                  >
                    {team === 'all' ? 'All Teams' : team}
                  </Button>
                ))}
              </div>

              {/* Year Filter */}
              <div className="flex flex-wrap gap-2">
                {years.map(year => (
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

              {/* Status Filter */}
              <div className="flex flex-wrap gap-2">
                {statuses.map(status => (
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
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-muted-foreground">
                Showing {filteredMembers.length} of {data.members.length} members
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMembers.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Users className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No members found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="member-card hover-lift h-full">
                    <CardContent className="p-6 space-y-4">
                      {/* Profile Image */}
                      <div className="relative mx-auto w-20 h-20">
                        <img  
                          className="w-full h-full rounded-full object-cover shadow-lg"
                          alt={member.name}
                         src={member.image} />
                        <div className="absolute inset-0 rounded-full ring-2 ring-primary/20"></div>
                      </div>

                      {/* Member Info */}
                      <div className="text-center space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                        <p className="text-primary font-medium text-sm">{member.role}</p>
                        <p className="text-xs text-muted-foreground">{member.department}</p>
                      </div>

                      {/* Badges */}
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className={`team-badge ${getTeamBadgeClass(member.team)}`}>
                          {member.team}
                        </span>
                        <span className={`status-badge ${getStatusBadgeClass(member.status)}`}>
                          {member.status}
                        </span>
                      </div>

                      {/* Additional Info */}
                      <div className="text-center space-y-1 text-xs text-muted-foreground">
                        <p>Class of {member.year}</p>
                        <p>Joined {new Date(member.joinDate).toLocaleDateString()}</p>
                      </div>

                      {/* Skills Preview */}
                      {member.skills && member.skills.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-1">
                          {member.skills.slice(0, 3).map((skill, skillIndex) => (
                            <span key={skillIndex} className="skill-tag">
                              {skill}
                            </span>
                          ))}
                          {member.skills.length > 3 && (
                            <span className="skill-tag">
                              +{member.skills.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Contact Icons */}
                      <div className="flex justify-center space-x-2 pt-2">
                        {member.email && (
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleContactClick(member.email)}
                            className="w-8 h-8"
                          >
                            <Mail className="w-3 h-3" />
                          </Button>
                        )}
                        {member.linkedin && (
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleContactClick(member.linkedin)}
                            className="w-8 h-8"
                          >
                            <Linkedin className="w-3 h-3" />
                          </Button>
                        )}
                        {member.github && (
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleContactClick(member.github)}
                            className="w-8 h-8"
                          >
                            <Github className="w-3 h-3" />
                          </Button>
                        )}
                      </div>

                      {/* View Profile Button */}
                      <Link to={`/members/${member.slug}`} className="block">
                        <Button variant="outline" className="w-full">
                          View Profile
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join CTA */}
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
              Want to Join Our Community?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Become part of our diverse and talented community of engineers and innovators. 
              Start your journey with IEEE today!
            </p>
            <Link to="/join">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Join IEEE Chapter
                <Users className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Members;
