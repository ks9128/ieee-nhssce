
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const FooterLink = ({ to, children }) => (
  <NavLink to={to} className="text-muted-foreground hover:text-primary transition-colors duration-300">
    {children}
  </NavLink>
);

const SocialIcon = ({ href, icon: Icon, label }) => {
  const { toast } = useToast();
  const handleClick = (e) => {
    if (!href || href === '#') {
      e.preventDefault();
      toast({
        title: "🚧 Feature Not Implemented",
        description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      });
    }
  };

  return (
    <a href={href || '#'} target="_blank" rel="noopener noreferrer" onClick={handleClick} aria-label={label} className="text-muted-foreground hover:text-primary transition-colors duration-300">
      <Icon className="h-6 w-6" />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <NavLink to="/" className="flex items-center gap-3 mb-4">
              <img src="/ieee-logo.svg" alt="IEEE Logo" className="h-12 w-12" />
              <div>
                <p className="font-heading text-lg font-bold">IEEE</p>
                <p className="text-sm text-muted-foreground">Student Chapter</p>
              </div>
            </NavLink>
            <p className="text-muted-foreground text-sm">Advancing Technology for Humanity.</p>
          </div>
          
          <div>
            <p className="font-heading font-semibold uppercase tracking-wider text-foreground mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li><FooterLink to="/about">About Us</FooterLink></li>
              <li><FooterLink to="/events">Events</FooterLink></li>
              <li><FooterLink to="/members">Members</FooterLink></li>
              <li><FooterLink to="/join-us">Join Us</FooterLink></li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold uppercase tracking-wider text-foreground mb-4">Resources</p>
            <ul className="space-y-2">
              <li><FooterLink to="/blog">Blog</FooterLink></li>
              <li><FooterLink to="/gallery">Gallery</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
              <li><FooterLink to="/admin">Admin Login</FooterLink></li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold uppercase tracking-wider text-foreground mb-4">Connect</p>
            <div className="flex items-center space-x-4">
              <SocialIcon href="#" icon={Twitter} label="Twitter" />
              <SocialIcon href="#" icon={Linkedin} label="LinkedIn" />
              <SocialIcon href="#" icon={Github} label="GitHub" />
              <SocialIcon href="mailto:info@ieeechapter.com" icon={Mail} label="Email" />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IEEE Student Chapter. All Rights Reserved.</p>
          <p className="mt-1">Powered by <a href="https://hostinger.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Hostinger</a> & Horizons AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  