import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Synapse: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-4xl font-bold">Synapse</CardTitle>
          <p className="text-center text-lg text-muted-foreground">Bridging the Gap Between Human and Artificial Intelligence</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">
            Synapse is a research and development initiative dedicated to eliminating the latency of interaction between humans and AI. We believe that by creating a frictionless interface between human thought and artificial cognition, we can unlock a new era of creativity, collaboration, and problem-solving.
          </p>
          <p className="text-lg">
            Our work focuses on the entire human-AI interaction pipeline, from hardware and software to data and algorithms. We are building an open and collaborative platform that will enable researchers and developers to create a new generation of low-latency, intuitive, and powerful AI applications.
          </p>
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/synapse-whitepaper">Read the Whitepaper</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Synapse;