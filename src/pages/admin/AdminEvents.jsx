
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminEvents = () => {
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
        <h1 className="text-3xl font-bold">Manage Events</h1>
        <Button onClick={handleAction}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Event
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Events List</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Event management interface will be here. You&apos;ll be able to create, edit, and delete events.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminEvents;