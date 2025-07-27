
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/components/ui/use-toast';

const EventsPage = () => {
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
        <title>Events | IEEE Student Chapter</title>
        <meta name="description" content="Explore our past and upcoming events, including workshops, webinars, and competitions." />
      </Helmet>
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Events</h1>
        <p className="text-xl text-muted-foreground mb-8">This page is currently under construction.</p>
        <div className="max-w-2xl mx-auto p-16 bg-card rounded-xl border border-dashed border-border">
          <p className="text-lg">Event listings, filters, and detail pages will be available here soon.</p>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
  