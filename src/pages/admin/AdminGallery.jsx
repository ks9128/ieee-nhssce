
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminGallery = () => {
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
        <h1 className="text-3xl font-bold">Manage Gallery</h1>
        <Button onClick={handleAction}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Upload Images
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Gallery Images</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Gallery management interface will be here. You'll be able to upload, categorize, and delete images.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminGallery;