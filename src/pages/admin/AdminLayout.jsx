
import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Calendar, 
  FileText, 
  Image, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  X,
  Mail,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const AdminSidebar = ({ isOpen, setIsOpen }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Events', path: '/admin/events', icon: Calendar },
    { name: 'Blog', path: '/admin/blog', icon: FileText },
    { name: 'Gallery', path: '/admin/gallery', icon: Image },
    { name: 'Members', path: '/admin/members', icon: Users },
    { name: 'Forms', path: '/admin/forms', icon: Mail },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <aside className={`fixed lg:relative z-20 h-full bg-card border-r transition-all duration-300 ${isOpen ? 'w-64' : 'w-0 lg:w-20'} overflow-hidden`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <Link to="/" className={`flex items-center space-x-2 ${!isOpen && 'lg:hidden'}`}>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IEEE</span>
            </div>
            <span className="font-bold text-foreground">Admin Panel</span>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center p-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className={`ml-4 transition-opacity duration-200 ${!isOpen && 'lg:opacity-0'}`}>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t">
          <div className={`flex items-center space-x-3 ${!isOpen && 'lg:justify-center'}`}>
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <Users className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className={`${!isOpen && 'lg:hidden'}`}>
              <p className="text-sm font-semibold text-foreground">{user?.name}</p>
              <p className="text-xs text-muted-foreground">{user?.email}</p>
            </div>
          </div>
          <Button variant="ghost" className="w-full justify-start mt-4" onClick={handleLogout}>
            <LogOut className="w-5 h-5" />
            <span className={`ml-4 ${!isOpen && 'lg:hidden'}`}>Logout</span>
          </Button>
        </div>
      </div>
    </aside>
  );
};

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-muted/50">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-card border-b flex items-center justify-between px-6">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
          <div>{/* Placeholder for header actions */}</div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;