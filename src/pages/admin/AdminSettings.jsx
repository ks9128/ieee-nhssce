
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminSettings = () => {
  const { toast } = useToast();

  const handleAction = () => {
    toast({
      title: "🚧 Feature in development",
      description: "This functionality is not yet implemented.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Site Settings</h1>
        <Button onClick={handleAction}>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            An interface to manage site-wide settings like meta information, social media links, etc., will be here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;