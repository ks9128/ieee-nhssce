
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { LogIn, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { success, error } = await login(email, password);
    setLoading(false);

    if (success) {
      toast({
        title: "✅ Login Successful",
        description: "Welcome back, Admin!",
      });
      navigate('/admin/dashboard');
    } else {
      toast({
        variant: "destructive",
        title: "❌ Login Failed",
        description: error || "Please check your credentials and try again.",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login - IEEE Student Chapter</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full max-w-md shadow-2xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                <span className="text-white font-bold text-2xl">IEEE</span>
              </div>
              <CardTitle className="text-2xl">Admin Panel Login</CardTitle>
              <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@ieee.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-10"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full btn-ieee" disabled={loading}>
                  {loading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <LogIn className="mr-2 w-4 h-4" />
                      Login
                    </>
                  )}
                </Button>
              </form>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                <p>Use email: <strong>admin@ieee.org</strong></p>
                <p>Use password: <strong>admin123</strong></p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default AdminLogin;