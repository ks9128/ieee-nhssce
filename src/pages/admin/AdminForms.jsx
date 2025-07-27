
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const AdminForms = () => {
  const { toast } = useToast();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Form Submissions</h1>
      <Card>
        <CardHeader>
          <CardTitle>Submissions Viewer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            An interface to view and manage submissions from contact and join forms will be here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminForms;