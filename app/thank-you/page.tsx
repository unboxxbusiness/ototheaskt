'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Youtube, 
  Instagram, 
  ArrowRight,
  Clock,
  Sparkles,
  Calendar
} from 'lucide-react';
import * as motion from 'motion/react-client';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Founding Pioneer';
  const email = searchParams.get('email') || '';

  return (
    <div className="w-full max-w-2xl mx-auto text-center px-4 py-8 md:py-16">
      
      {/* Decorative Aura / Mandala ring */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-24 h-24 bg-saffron/10 border-2 border-dashed border-saffron/30 rounded-full flex items-center justify-center mx-auto mb-8 relative"
      >
        <span className="absolute text-saffron/20 font-serif text-5xl select-none">ॐ</span>
        <CheckCircle2 className="w-10 h-10 text-saffron relative z-10" />
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-4"
      >
        <span className="text-[11px] font-black uppercase tracking-widest text-saffron bg-saffron/10 px-4 py-1.5 rounded-full">
          ॐ PRE-BOOKING CONFIRMED ॐ
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-night uppercase tracking-tight leading-tight">
          You Are On The List, <br /><span className="text-indigo">{name}</span>!
        </h1>
      </motion.div>

      {/* Description card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8 p-6 md:p-8 bg-cream/50 rounded-3xl border border-cream shadow-md space-y-6 text-left"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 bg-saffron/10 rounded-xl text-saffron shrink-0 mt-0.5">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-night">Every Sunday at 8:00 PM IST</h3>
            <p className="text-xs text-earth mt-1 leading-relaxed">
              Once officially launched, THEASKT transformational live sessions will run weekly on Sundays. We will notify you and dispatch access/onboarding links to <strong className="text-indigo">{email || 'your registered email'}</strong> as we approach starting week.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 pt-4 border-t border-cream">
          <div className="p-3 bg-indigo/15 rounded-xl text-indigo shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-night">An Integrated Evolution</h3>
            <p className="text-xs text-earth mt-1 leading-relaxed">
              You are among the selected founding minds configured into our pre-booking system. At launch, you will possess full access to state-of-the-art live integrations of ancient Indian philosophy, karma dynamics, and strategic AI workflows.
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTAs - Social Connect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-12 space-y-8"
      >
        <div>
          <h2 className="text-lg font-bold text-night uppercase tracking-tight flex items-center justify-center gap-2">
            <span>⚡</span> Connect With Us Now
          </h2>
          <p className="text-xs text-earth mt-1">
            While we ready the final launch sequence, tap into daily wisdom, skill breakdowns, and strategic mindset resets:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          {/* YouTube Link */}
          <a
            href="https://www.youtube.com/@theaskt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl shadow-md transition-all hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-xl">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-red-100 font-bold">Subscribe</p>
                <p className="text-sm font-black tracking-tight">YouTube</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-red-100 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/the_askt/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-gradient-to-tr from-yellow-500 via-pink-500 to-indigo hover:opacity-95 text-white rounded-2xl shadow-md transition-all hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-xl">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-pink-100 font-bold">Follow</p>
                <p className="text-sm font-black tracking-tight">Instagram</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-pink-100 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Back Home Link */}
        <div className="pt-4">
          <Link 
            href="/"
            className="text-xs font-bold text-saffron hover:text-saffron-hover tracking-wider uppercase underline underline-offset-4"
          >
            ← Return to Homepage
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="min-h-[90vh] bg-ivory flex items-center justify-center py-12">
      <Suspense fallback={
        <div className="text-center font-display text-sm font-mono tracking-widest text-earth">
          ॐ Loading Pre-booking Confirmation...
        </div>
      }>
        <ThankYouContent />
      </Suspense>
    </div>
  );
}
