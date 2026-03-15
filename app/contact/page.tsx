'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
      <h1 className="font-serif text-4xl text-white">Contact Us</h1>
      <p className="mt-2 text-slate-300">Send a message to the editorial team at THE MOON.</p>

      <form className="mt-6 space-y-4" onSubmit={(event) => event.preventDefault()}>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Name</label>
          <Input required placeholder="Your name" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Email</label>
          <Input required type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Message</label>
          <Textarea required placeholder="Tell us what's on your mind..." rows={6} />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </section>
  );
}
