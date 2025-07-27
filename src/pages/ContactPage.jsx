
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const showToast = () => {
    toast({
      title: "🚧 Coming Soon!",
      description: "This page is under construction. Check back later for more details!",
    });
  };

  React.useEffect(() => {
    showToast();
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | IEEE Student Chapter</title>
        <meta name="description" content="Get in touch with us. Find our contact information, social media links, and location." />
      </Helmet>
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground mb-8">This page is currently under construction.</p>
        <div className="max-w-2xl mx-auto p-16 bg-card rounded-xl border border-dashed border-border">
          <p className="text-lg">A contact form, map, and our contact details will be available here soon.</p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
  