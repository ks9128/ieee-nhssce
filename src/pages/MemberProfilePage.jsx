
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const MemberProfilePage = () => {
  const { slug } = useParams();
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
        <title>Member Profile | IEEE Student Chapter</title>
        <meta name="description" content={`Profile page for member ${slug}.`} />
      </Helmet>
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Member Profile: {slug}</h1>
        <p className="text-xl text-muted-foreground mb-8">This page is currently under construction.</p>
        <div className="max-w-2xl mx-auto p-16 bg-card rounded-xl border border-dashed border-border">
          <p className="text-lg">The full, dynamic profile for each member will be displayed here soon.</p>
        </div>
      </div>
    </>
  );
};

export default MemberProfilePage;
  