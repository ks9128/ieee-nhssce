
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  FileText, 
  Image, 
  Mail,
  Activity,
  BarChart2,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useData } from '@/contexts/DataContext';

const StatCard = ({ title, value, icon: Icon, color }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className={`h-4 w-4 text-muted-foreground ${color}`} />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

const AdminDashboard = () => {
  const { data } = useData();

  const stats = [
    { title: 'Total Members', value: data.members.length, icon: Users, color: 'text-blue-500' },
    { title: 'Total Events', value: data.events.length, icon: Calendar, color: 'text-green-500' },
    { title: 'Blog Posts', value: data.blogPosts.length, icon: FileText, color: 'text-purple-500' },
    { title: 'Gallery Images', value: data.gallery.length, icon: Image, color: 'text-orange-500' },
    { title: 'Form Submissions', value: data.formSubmissions.length, icon: Mail, color: 'text-pink-500' },
  ];

  const recentActivities = [
    { text: 'New member joined: Alex Thompson', time: '2 hours ago' },
    { text: 'Event "AI Workshop" created', time: '5 hours ago' },
    { text: 'New blog post published: "Future of AI"', time: '1 day ago' },
    { text: 'Contact form submitted by John Doe', time: '2 days ago' },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-foreground">Welcome, Admin!</h1>
        <p className="text-muted-foreground">Here&apos;s a quick overview of your website&apos;s activity.</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <p className="text-sm text-foreground">{activity.text}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart2 className="mr-2 h-5 w-5" />
                Site Traffic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <TrendingUp className="mx-auto h-12 w-12 mb-2" />
                  <p>Traffic chart will be displayed here.</p>
                  <p className="text-xs">(Analytics integration required)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;