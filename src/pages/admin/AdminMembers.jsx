
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminMembers = () => {
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
        <h1 className="text-3xl font-bold">Manage Members</h1>
        <Button onClick={handleAction}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Member
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Members List</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Member management interface will be here. You'll be able to add, edit, and manage member profiles.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminMembers;