
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-sm font-medium transition-colors duration-300 ${
        isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'
      }`
    }
    onClick={onClick}
  >
    {children}
  </NavLink>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/events', label: 'Events' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/blog', label: 'Blog' },
    { to: '/members', label: 'Members' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/ieee-logo.svg" alt="IEEE Logo" className="h-10 w-10" />
          <span className="font-heading text-xl font-bold hidden sm:inline">IEEE MHSSCE</span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavItem key={link.to} to={link.to}>{link.label}</NavItem>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild variant="outline" className="hidden lg:inline-flex uppercase font-bold rounded-full">
            <NavLink to="/join-us">Join Us</NavLink>
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg absolute top-full left-0 w-full pb-8 border-t border-border"
          >
            <nav className="container mx-auto flex flex-col items-center gap-6 pt-6">
              {navLinks.map((link) => (
                <NavItem key={link.to} to={link.to} onClick={() => setIsOpen(false)}>{link.label}</NavItem>
              ))}
              <Button asChild variant="outline" className="uppercase font-bold rounded-full" onClick={() => setIsOpen(false)}>
                <NavLink to="/join-us">Join Us</NavLink>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
