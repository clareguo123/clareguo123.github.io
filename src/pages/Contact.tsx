import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData();
    formData.append('entry.1762357871', name);
    formData.append('entry.581708061', email);
    formData.append('entry.670765276', message);

    try {
      await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSfY6QRdMcFjf-qHgDILZUlxZWEuEYgE7e3zOTnt_V4WOefGeA/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Contact Me</CardTitle>
        </CardHeader>
        <CardContent>
          {status === 'success' ? (
            <div className="text-center">
              <p className="text-lg font-semibold">Thank you for your message!</p>
              <p>I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name">What do you call yourself?</label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">How should I get back to you?</label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message">Tell me.</label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={status === 'loading'}>
                {status === 'loading' ? 'Submitting...' : 'Submit'}
              </Button>
              {status === 'error' && (
                <p className="text-red-500 text-center">Something went wrong. Please try again later.</p>
              )}
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;