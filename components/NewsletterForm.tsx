'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');

  return (
    <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 p-6 md:p-10">
      <h3 className="font-serif text-3xl text-white">Stay in Orbit</h3>
      <p className="mt-2 text-slate-300">Get the top stories and deep dives from THE MOON in your inbox every morning.</p>
      <form
        className="mt-5 flex flex-col gap-3 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          setEmail('');
        }}
      >
        <Input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="h-11"
        />
        <Button type="submit" className="h-11 bg-violetBrand hover:bg-violet-500">
          Subscribe
        </Button>
      </form>
    </section>
  );
}
