'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Compass, 
  Sparkles, 
  Lock, 
  Trophy, 
  BookOpen, 
  ShieldCheck, 
  Map, 
  Workflow, 
  BrainCircuit, 
  Flame,
  Clock,
  UserCheck,
  ArrowUp
} from 'lucide-react';
import * as motion from 'motion/react-client';

export default function OptInPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [firstNameBottom, setFirstNameBottom] = useState('');
  const [emailBottom, setEmailBottom] = useState('');
  const [mobileBottom, setMobileBottom] = useState('');
  const [isSubmittingBottom, setIsSubmittingBottom] = useState(false);

  const [registeredUser, setRegisteredUser] = useState<{ name: string; email: string } | null>(null);
  const [copiedTop, setCopiedTop] = useState(false);
  const [copiedBottom, setCopiedBottom] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyTop = () => {
    navigator.clipboard.writeText('https://zoom.auth/j/theaskt-live-reset');
    setCopiedTop(true);
    setTimeout(() => setCopiedTop(false), 2000);
  };

  const handleCopyBottom = () => {
    navigator.clipboard.writeText('https://zoom.auth/j/theaskt-live-reset');
    setCopiedBottom(true);
    setTimeout(() => setCopiedBottom(false), 2000);
  };

  const handleSubmitTop = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || !mobile) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    setIsSubmitting(true);
    setErrorMessage('');
    try {
      const response = await fetch('/api/pre-book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: firstName, email, mobile }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }
      setIsSubmitting(false);
      // Redirect to the thank you page
      router.push(`/thank-you?name=${encodeURIComponent(firstName)}&email=${encodeURIComponent(email)}`);
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage(err.message || 'An error occurred during secure pre-booking.');
    }
  };

  const handleSubmitBottom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstNameBottom || !emailBottom || !mobileBottom) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    setIsSubmittingBottom(true);
    setErrorMessage('');
    try {
      const response = await fetch('/api/pre-book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: firstNameBottom, email: emailBottom, mobile: mobileBottom }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }
      setIsSubmittingBottom(false);
      // Redirect to the thank you page
      router.push(`/thank-you?name=${encodeURIComponent(firstNameBottom)}&email=${encodeURIComponent(emailBottom)}`);
    } catch (err: any) {
      setIsSubmittingBottom(false);
      setErrorMessage(err.message || 'An error occurred during secure pre-booking.');
    }
  };


  return (
    <div className="min-h-screen bg-ivory text-night selection:bg-saffron/10 selection:text-saffron antialiased flex flex-col justify-start">
      
      {/* Top Warning Banner */}
      <div className="w-full bg-saffron text-ivory text-center py-3 px-8 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 flex-wrap shrink-0">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ivory opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-ivory"></span>
        </span>
        ॐ Limited Live Seats Left • Register Now and Save Your Spot ॐ
      </div>

      {/* Main Container */}
      <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
        
        {/* =======================================
            SECTION 1 — ABOVE THE FOLD
           ======================================= */}
        <section className="py-16 md:py-24 text-center flex flex-col items-center">
          
          {/* Pre-Headline */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 px-4 py-2 bg-cream/75 border border-saffron/10 rounded-full max-w-3xl flex items-center gap-2 justify-center"
          >
            <span className="text-saffron font-serif font-bold text-sm">ॐ</span>
            <p className="text-xs md:text-sm font-semibold tracking-wide text-earth leading-relaxed">
              For the ambitious Indian professional who is working harder than ever — and still feels like they are falling behind.
            </p>
            <span className="text-saffron font-serif font-bold text-sm">ॐ</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-night uppercase mb-8 leading-tight max-w-4xl"
          >
            What If the <span className="text-saffron">Bhagavad Gita</span>, the <span className="text-indigo">Law of Karma</span>, and <span className="text-saffron">AI Skills</span> Could All Work Together — To Build the Exact Life You Have Been Trying to Create?
          </motion.h1>

          {/* Sub-Headline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-earth font-medium mb-12 max-w-3xl leading-relaxed italic"
          >
            In 90 minutes, you will discover the one system that fuses ancient Indian wisdom with modern AI, automation, and digital skills — so you can build a dream career, a stress-free mind, and a financially free life. At the same time.
          </motion.p>

          {/* Form & Blurb Block */}
          <div className="w-full grid lg:grid-cols-12 gap-12 text-left items-start mt-4">
            
            {/* Blurb Side */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pr-6">
              <div className="border-l-4 border-saffron pl-4 py-1">
                <p className="text-night font-bold uppercase tracking-wider text-xs">A Different Kind of Workshop</p>
              </div>
              <p className="text-earth text-base md:text-lg leading-relaxed">
                We are currently accepting pre-booking entries for this upcoming transformational live masterclass, which will run live every Sunday at 8:00 PM IST.
              </p>
              <p className="text-earth text-base md:text-lg leading-relaxed">
                You will not get a recording of someone else&apos;s highlights. You will get <strong className="text-night">real tools, real clarity, and a real plan</strong> — built specifically for the pressure, the pace, and the possibilities of life in India right now.
              </p>

            </div>

            {/* Form Side */}
            <div id="registration-card-top" className="lg:col-span-12 xl:col-span-5 w-full bg-cream p-6 md:p-8 rounded-3xl border border-saffron/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-saffron"></div>
              
              {registeredUser ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 bg-saffron/10 p-3 rounded-2xl border border-saffron/20">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-saffron"></span>
                    </span>
                    <p className="text-xs font-black text-saffron uppercase tracking-widest font-mono">FOUNDING SEAT PRE-BOOKED</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-night uppercase tracking-tight">
                      You&apos;re On the List, {registeredUser.name}!
                    </h3>
                    <p className="text-xs text-earth leading-relaxed font-semibold">
                      We have pre-booked your founding seat. Once launched, this transformational live session runs live every Sunday at 8:00 PM IST. A confirmation message and launch updates have been dispatched to <strong className="text-night">{registeredUser.email}</strong>.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-cream shadow-sm space-y-3 text-xs text-earth">
                    <div className="flex justify-between items-center border-b border-cream/50 pb-2">
                      <span className="font-bold uppercase tracking-wider text-[10px]">Frequency</span>
                      <span className="font-black text-night uppercase">Every Sunday (Launch Soon)</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-cream/50 pb-2">
                      <span className="font-bold uppercase tracking-wider text-[10px]">Time</span>
                      <span className="font-black text-night uppercase">8:00 PM IST</span>
                    </div>
                    <div className="flex justify-between items-center pb-1">
                      <span className="font-bold uppercase tracking-wider text-[10px]">Access Link</span>
                      <span className="font-black text-saffron uppercase">Emailed Before Launch</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a 
                      href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=THEASKT+The+90-Minute+Life+Reset&dates=20260531T143000Z/20260531T160000Z&details=Fusing+ancient+Indian+wisdom+with+AI+and+future-ready+skills+to+build+a+stress-free,+financially+free,+purpose-driven+life.&location=Zoom+Meeting`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-night text-ivory hover:bg-neutral-800 font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <BookOpen className="w-4 h-4 text-saffron" />
                      Add Launch Slot to Calendar
                    </a>

                    <div className="bg-white rounded-xl border border-cream p-3 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono font-bold text-earth/80 truncate">
                        https://zoom.auth/j/theaskt-live-reset
                      </span>
                      <button 
                        onClick={handleCopyTop}
                        className="text-[10px] font-black uppercase text-indigo hover:text-indigo/85 shrink-0 bg-indigo/5 px-2.5 py-1 rounded-md transition"
                      >
                        {copiedTop ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <p className="text-[10px] text-earth text-center italic">
                    &ldquo;Learn One Thing. Apply One Thing. Become 1% Better Every Day.&rdquo;
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl md:text-2xl font-black uppercase text-night tracking-tight mb-4 flex items-center gap-2">
                    <span className="text-saffron">⚡</span> Yes — reserve my free seat now
                  </h3>
                  
                  <form onSubmit={handleSubmitTop} className="space-y-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-bold uppercase text-earth mb-1.5 tracking-wider">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="e.g. Rahul"
                        className="w-full text-sm font-medium bg-ivory border border-saffron/25 rounded-lg px-4 py-3 placeholder:text-earth/40 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent text-night transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase text-earth mb-1.5 tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rahul@example.com"
                        className="w-full text-sm font-medium bg-ivory border border-saffron/25 rounded-lg px-4 py-3 placeholder:text-earth/40 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent text-night transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="mobile" className="block text-xs font-bold uppercase text-earth mb-1.5 tracking-wider">
                        WhatsApp / Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        required
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full text-sm font-medium bg-ivory border border-saffron/25 rounded-lg px-4 py-3 placeholder:text-earth/40 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent text-night transition-all"
                      />
                    </div>

                    {errorMessage && (
                      <p className="text-xs font-bold text-red-600 animate-pulse">{errorMessage}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 bg-saffron hover:bg-saffron-hover text-ivory font-black py-4 px-6 rounded-lg transition-all shadow-lg text-sm md:text-base tracking-tight uppercase flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-ivory" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          SAVING YOUR SEAT...
                        </span>
                      ) : (
                        <>
                          Ancient Wisdom + AI Changes Everything
                          <ArrowRight className="w-5 h-5 shrink-0" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-6 pt-4 border-t border-saffron/10 flex items-center justify-center gap-2 text-[11px] text-earth font-medium">
                    <Lock className="w-3.5 h-3.5 text-saffron shrink-0" />
                    <span>Your information is safe. No spam, ever. Unsubscribe with one click.</span>
                  </div>
                </>
              )}
            </div>

          </div>

        </section>

        {/* =======================================
            SECTION 2 — THE CREDIBILITY BAR
           ======================================= */}
        <section className="py-12 border-y border-cream/80 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-earth mb-6">
            Professionals featured in THEASKT have been recognised by:
          </p>
          
          {/* Scrolling Container for Mobile / Grid on Desktop */}
          <div className="relative w-full overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex md:grid md:grid-cols-7 items-center justify-start md:justify-center gap-8 md:gap-4 min-w-[850px] md:min-w-0 pb-4 md:pb-0 px-2 select-none">
              {[
                { name: 'The Hindu BusinessLine', icon: '📰' },
                { name: 'YourStory', icon: '⭐' },
                { name: 'Inc42', icon: '🚀' },
                { name: 'Entrepreneur India', icon: '💼' },
                { name: 'Forbes India', icon: '🏆' },
                { name: 'Mindful Business Review', icon: '🧘' },
                { name: 'HuffPost India', icon: '🌱' }
              ].map((logo, i) => (
                <div key={i} className="flex flex-col items-center justify-center space-y-1.5 opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap text-center">
                  <span className="text-lg">{logo.icon}</span>
                  <span className="text-[11px] font-bold text-night tracking-tight font-display uppercase">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =======================================
            SECTION 3 — THE "THIS IS FOR YOU IF" SECTION
           ======================================= */}
        <section className="py-20 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-saffron bg-saffron/10 px-3 py-1 rounded-full">Alignment Search</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-night uppercase tracking-tight mt-4">
              Is This Workshop Built For You?
            </h2>
            <p className="text-base md:text-lg text-earth font-medium mt-4 max-w-2xl mx-auto">
              This workshop was built for one specific kind of person — someone who is smart, capable, and tired of being the hardest-working person in the room with the least to show for it.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              "If you wake up most mornings already feeling behind — like the to-do list started before you even opened your eyes — and no matter how much you cross off, the weight never actually lifts.",
              "If you know the Gita talks about karma and detachment, and you nod along when someone quotes a shloka — but you have no idea how to actually apply any of it when your manager sends a Friday evening message that ruins your weekend.",
              "If you have taken courses, read books, watched YouTube videos about productivity and mindset — and you still feel like you are one crisis away from completely losing your grip on things.",
              "If your income has grown over the last three years but somehow your savings account tells a completely different story — and you feel a quiet shame about that, even though you can not quite explain why the money is never enough.",
              "If you keep hearing about AI, automation, and the digital economy — and you feel a low hum of panic that the world is moving very fast and you are somehow already late to something important.",
              "If you lie awake some nights knowing — really knowing — that the version of your life you imagined at 22 is not what you are living right now, and you are not entirely sure when you stopped believing it was possible."
            ].map((text, i) => (
              <div key={i} className="bg-cream/40 p-6 md:p-8 rounded-2xl border-l-[6px] border-saffron border-y border-r border-cream shadow-sm hover:translate-x-1 transition-transform">
                <p className="text-night text-base md:text-lg font-medium leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================
            SECTION 4 — THE "THIS IS NOT FOR YOU IF" SECTION
           ======================================= */}
        <section className="py-20 max-w-4xl mx-auto border-t border-cream">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-indigo bg-indigo/10 px-3 py-1 rounded-full">Who Should Skip</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-night uppercase tracking-tight mt-4">
              Who This Is NOT For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "This workshop is not for you if you are looking for a motivational speech that makes you feel good for 48 hours and then disappears.",
              "It is not for you if you want someone to hand you a magic script, a shortcut, or a get-rich-fast formula with zero inner work required.",
              "And it is not for you if you are genuinely content with where you are — this is for people who know, in their gut, that there is more."
            ].map((text, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-cream shadow-md flex items-start gap-4">
                <XCircle className="w-5 h-5 text-saffron shrink-0 mt-1" />
                <p className="text-earth text-sm md:text-base leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================
            SECTION 5 — THE AGITATION SECTION
           ======================================= */}
        <section className="py-20 bg-cream/30 border-y border-cream -mx-4 px-4 md:-mx-8 md:px-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-0">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-8"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-saffron">The Agitation</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-night uppercase tracking-tight mt-3">
                Here is what nobody talks about honestly enough.
              </h2>
            </motion.div>

            <div className="space-y-8 text-base md:text-lg text-earth leading-relaxed">
              <p className="font-bold text-night text-lg md:text-xl">
                You are not stuck because you are lazy. You are not stuck because you are not smart enough. You are not stuck because you lack opportunities. You are stuck because the tools you were given — by school, by family, by the success playbooks of a previous generation — were never designed for the world you are actually living in.
              </p>

              <div className="bg-cream p-6 rounded-2xl border border-saffron/10 space-y-4">
                <div className="border-l-4 border-indigo pl-3">
                  <p className="font-bold text-night">Think about the last Sunday evening you felt that slow, creeping dread before the week began.</p>
                </div>
                <p className="text-sm md:text-base">
                  Not because anything specific was wrong. Just that background noise — a pressure without a name, a tiredness that sleep does not fix. You scrolled your phone, maybe watched something to distract yourself, and went to bed knowing Monday would feel exactly the same as last Monday.
                </p>
              </div>

              <div className="bg-cream p-6 rounded-2xl border border-saffron/10 space-y-4">
                <div className="border-l-4 border-indigo pl-3">
                  <p className="font-bold text-night">Think about the last time you sat in a meeting — or on a call, or at a family dinner — and for a moment felt like a fraud.</p>
                </div>
                <p className="text-sm md:text-base">
                  Like everyone else had figured something out that you had somehow missed. Like your confidence was a performance and not a foundation.
                </p>
              </div>

              <div className="bg-cream p-6 rounded-2xl border border-saffron/10 space-y-4">
                <div className="border-l-4 border-indigo pl-3">
                  <p className="font-bold text-night">Think about the goals you set in January. The savings target you quietly abandoned.</p>
                </div>
                <p className="text-sm md:text-base">
                  The skill you said you would learn. The relationship you said you would invest more in. You did not fail those goals because you did not want them. You failed them because no one ever showed you how to align your inner state with your outer actions — so that discipline feels like direction instead of punishment.
                </p>
              </div>

              <div className="bg-cream p-6 rounded-2xl border border-saffron/10 space-y-4">
                <div className="border-l-4 border-indigo pl-3">
                  <p className="font-bold text-night">Think about every time someone told you to &ldquo;manifest it&rdquo; or &ldquo;be positive&rdquo; or &ldquo;just be disciplined&rdquo; — and you tried, genuinely tried, and it worked for a little while and then the old patterns came back, faster and stronger than before.</p>
                </div>
                <p className="text-sm md:text-base">
                  The self-help you have consumed gave you ideas. The skills training you have done gave you tools. The spiritual content you have watched gave you moments of peace. But none of it gave you a complete system — and that is the only thing that produces permanent change.
                </p>
              </div>

              <p className="text-xl md:text-2xl font-display font-black text-night text-center uppercase tracking-tight pt-6">
                The problem was never your drive. The problem was never your intelligence. The problem was that no one ever gave you the right architecture.
              </p>
            </div>
            
          </div>
        </section>

        {/* =======================================
            SECTION 6 — THE UNIQUE MECHANISM
           ======================================= */}
        <section className="py-20 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-indigo bg-indigo/10 px-3 py-1 rounded-full">The Core Strategy</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-night uppercase tracking-tight mt-4">
              Why THEASKT Works When Courses, Books, and Workshops Haven&apos;t
            </h2>
            <p className="text-base md:text-lg text-earth mt-4 leading-relaxed">
              Let us be honest about why smart people stay stuck despite trying hard. Most people who want to change their life end up in one of three traps — and each trap is disguised as progress.
            </p>
          </motion.div>

          {/* Golden Bento / The Three Traps Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            {/* Trap 1 */}
            <div className="bg-white p-8 rounded-3xl border border-cream shadow-lg relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-saffron/5 rounded-full -mr-6 -mt-6"></div>
              <div>
                <div className="w-12 h-12 bg-saffron/15 rounded-2xl flex items-center justify-center text-saffron mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black uppercase text-night tracking-tight mb-3">
                  The Ancient Trap
                </h3>
                <p className="text-earth text-sm leading-relaxed">
                  You go deep into philosophy, spirituality, the Gita, law of attraction, karma, Vedantic wisdom. And it is profound. It genuinely moves you. But when Monday morning arrives and your inbox is full and your EMI is due, you have no practical bridge between the depth you feel inside and the decisions you need to make right now.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-cream">
                <span className="text-[10px] font-black uppercase tracking-wider text-saffron bg-saffron/10 px-2 py-0.5 rounded">The Consequence</span>
                <p className="text-xs font-bold text-night mt-1.5 italic">&ldquo;Peace in meditation and paralysis in action.&rdquo;</p>
              </div>
            </div>

            {/* Trap 2 */}
            <div className="bg-white p-8 rounded-3xl border border-cream shadow-lg relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo/5 rounded-full -mr-6 -mt-6"></div>
              <div>
                <div className="w-12 h-12 bg-indigo/15 rounded-2xl flex items-center justify-center text-indigo mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black uppercase text-night tracking-tight mb-3">
                  The Modern Self-Help Trap
                </h3>
                <p className="text-earth text-sm leading-relaxed">
                  You try the productivity systems, the habit stacks, the morning routines, the goal-setting frameworks. And they work — for a while. But modern self-help is built on a foundation of willpower, and willpower is a resource that runs out. Without addressing the deeper patterns — the subconscious beliefs, the karmic conditioning, the emotional reactivity — every tactic eventually collapses.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-cream">
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo bg-indigo/10 px-2 py-0.5 rounded">The Consequence</span>
                <p className="text-xs font-bold text-night mt-1.5 italic">&ldquo;A high-performance vehicle with no fuel.&rdquo;</p>
              </div>
            </div>

            {/* Trap 3 */}
            <div className="bg-white p-8 rounded-3xl border border-cream shadow-lg relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-saffron/5 rounded-full -mr-6 -mt-6"></div>
              <div>
                <div className="w-12 h-12 bg-saffron/15 rounded-2xl flex items-center justify-center text-saffron mb-6">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black uppercase text-night tracking-tight mb-3">
                  The Skills Trap
                </h3>
                <p className="text-earth text-sm leading-relaxed">
                  You take the course. You learn the digital marketing, the AI tools, the automation, the freelancing framework. Real, valuable, in-demand skills. But six months later, you still have not applied them fully. Not because you do not know them — but because the inner blocks that sabotage action were never touched.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-cream">
                <span className="text-[10px] font-black uppercase tracking-wider text-saffron bg-saffron/10 px-2 py-0.5 rounded">The Consequence</span>
                <p className="text-xs font-bold text-night mt-1.5 italic">&ldquo;A world-class kitchen and a chef too anxious to cook.&rdquo;</p>
              </div>
            </div>

          </div>

          {/* CTA Mechanics Explanation */}
          <div className="bg-cream/50 p-8 md:p-12 rounded-3xl border border-cream space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-display font-black text-night uppercase tracking-tight mb-3">
                THEASKT closes all three gaps at once
              </h3>
              <p className="text-sm font-bold text-saffron tracking-widest uppercase">
                Introducing the Complete Transformation Architecture
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-4">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo">
                  <CheckCircle2 className="w-4 h-4" />
                  <h4 className="font-bold text-sm uppercase tracking-wide">Ancient Wisdom</h4>
                </div>
                <p className="text-xs text-earth leading-relaxed">
                  Gives you the unshakeable foundation — the practical understanding of karma, detachment, dharma, and the law of attraction that the Gita has been teaching for thousands of years. Not as philosophy. As a daily operating system.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo">
                  <CheckCircle2 className="w-4 h-4" />
                  <h4 className="font-bold text-sm uppercase tracking-wide">Modern Mindset</h4>
                </div>
                <p className="text-xs text-earth leading-relaxed">
                  Gives you the psychological tools to rewire the patterns that keep you reactive, stuck, and self-sabotaging — so that your outer behaviour finally matches your inner intentions.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo">
                  <CheckCircle2 className="w-4 h-4" />
                  <h4 className="font-bold text-sm uppercase tracking-wide">Future-Ready Skills</h4>
                </div>
                <p className="text-xs text-earth leading-relaxed">
                  Give you the actual capabilities to build income, career momentum, and financial freedom in the economy that exists right now — AI, automation, digital marketing, and the tools that are reshaping every industry.
                </p>
              </div>

            </div>

            <div className="text-center pt-8 border-t border-saffron/10">
              <p className="text-night text-base md:text-lg font-bold">
                Together, they do not just change what you do. They change who you are when you do it. <span className="text-saffron">That is why the results last.</span>
              </p>
            </div>
          </div>

        </section>

        {/* =======================================
            SECTION 7 — THE WORKSHOP PROMISE
           ======================================= */}
        <section className="py-20 md:py-24 border-t border-cream">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-saffron bg-saffron/10 px-3 py-1 rounded-full">The Deliverables</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-night uppercase tracking-tight mt-4">
              Here is exactly what this 90-minute live workshop will give you
            </h2>
            <p className="text-base text-earth font-medium mt-4">
              Not as ideas to think about later, but as working tools you can use the moment the session ends.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                num: "1",
                title: "The Karma-to-Career Blueprint",
                desc: "You will finally understand why working hard is not the same as working right — and what the Gita actually says about action, result, and the one shift that makes consistent performance feel effortless instead of exhausting. You will leave with a simple daily framework that connects your deepest values to your most practical goals — so your career starts moving in the direction of your dharma, not just your deadline."
              },
              {
                num: "2",
                title: "The Stress-to-Strength Reset",
                desc: "Modern life creates a specific kind of pressure that ancient traditions anticipated and modern psychology has now confirmed — and in this section, you will learn exactly how to interrupt it. You will walk through a three-step inner reset that combines the Gita's teaching on the witness consciousness with proven nervous system regulation techniques — so that when the pressure spikes, you have a real tool, not just a breathing exercise you forget under stress."
              },
              {
                num: "3",
                title: "The Digital Freedom Stack",
                desc: "This is where ancient meets AI. You will get a clear, no-overwhelm map of the three modern skills — AI productivity, digital marketing fundamentals, and basic automation — that create the most income leverage for professionals and entrepreneurs in India right now. You will understand exactly where to start, what to ignore, and how to build a real digital income stream alongside your current work, without burning out or spending months learning the wrong things."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-3xl border border-cream shadow-lg flex flex-col md:flex-row gap-6 md:gap-8 hover:border-saffron/20 transition-all">
                <div className="shrink-0 w-12 h-12 bg-indigo font-display text-ivory font-black text-xl rounded-2xl flex items-center justify-center">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase text-night tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-earth text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-earth text-base md:text-lg italic leading-relaxed">
              These are not just ideas you will carry home and think about. These are shifts that happen inside the room. Many people walk out of this workshop and within 24 hours make a decision, send a message, or take a step they had been sitting on for months. Not because they were pushed. Because something inside them finally clicked.
            </p>
          </div>
        </section>

        {/* =======================================
            SECTION 8 — THE STORY SECTION
           ======================================= */}
        <section className="py-20 bg-cream/35 border-y border-cream -mx-4 px-4 md:-mx-8 md:px-8">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-0">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center mb-10"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-indigo">Deep Alignment</span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-night uppercase tracking-tight mt-3">
                From Anuj Sharma, Founder of THEASKT
              </h2>
            </motion.div>

            <div className="space-y-6 text-earth text-base md:text-lg leading-relaxed">
              <p>
                Three years ago, I was earning what most people would call a good income.
              </p>
              <p>
                I had a stable job. My family was proud. On paper, everything was fine.
              </p>
              <p className="font-bold text-night italic border-l-2 border-saffron pl-4 py-1">
                But I used to sit at my desk on Tuesday afternoons — not Monday mornings, not Friday evenings, but random Tuesday afternoons — and feel this hollow, inexplicable tiredness. Not physical. Something deeper. Like I was very busy going somewhere I had not actually chosen.
              </p>
              <p>
                I tried everything the standard playbooks suggested. I read the productivity books, built the habits, tracked the goals. I went through a phase of pure hustle — longer hours, more output, aggressive targets. I also went through a spiritual phase — meditation retreats, Gita study, manifestation journals. Both phases helped. Neither one fixed it.
              </p>
              <p>
                What I eventually found — slowly, through a lot of searching, a lot of mistakes, and eventually through a deep immersion in both ancient Vedantic philosophy and modern behavioural psychology — was that I had been trying to solve an architectural problem with cosmetic solutions.
              </p>
              <p>
                The missing piece was not more discipline. It was not more spirituality. It was the bridge between the two — and the practical modern skills to build something real on top of that bridge.
              </p>
              <p>
                I started applying what I was learning. Small things at first — the way I made decisions, the way I related to outcomes, the way I approached my work and my money and my relationships. Then larger things. My income changed. My nervous system changed. My sense of direction changed.
              </p>
              <p>
                I built THEASKT because I needed it to exist — and because I knew I was not the only one sitting at a desk on a Tuesday afternoon wondering if this was it.
              </p>
              <p className="font-bold text-night">
                You deserve this system. That is the only reason this workshop exists. See you inside.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-saffron/15 flex items-center justify-between">
              <div>
                <p className="font-bold text-night text-lg">Anuj Sharma</p>
                <p className="text-xs font-bold text-saffron uppercase tracking-widest">Founder, THEASKT</p>
              </div>
              <Compass className="w-8 h-8 text-saffron opacity-40" />
            </div>

          </div>
        </section>

        {/* =======================================
            SECTION 9 — THE SOCIAL PROOF SECTION
           ======================================= */}
        <section className="py-20 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-saffron bg-saffron/10 px-3 py-1 rounded-full">Attendee Realities</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-night uppercase tracking-tight mt-4">
              Here is what people say after attending the THEASKT workshop
            </h2>
          </motion.div>

          <div className="space-y-8">
            
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-3xl border border-cream shadow-md hover:shadow-xl transition-shadow relative">
              <span className="absolute top-6 right-8 text-4xl text-cream select-none font-serif">“</span>
              <p className="text-[17px] font-bold text-night tracking-tight mb-4 leading-snug">
                &ldquo;I walked in sceptical and walked out with a decision I had avoided for two years.&rdquo;
              </p>
              <p className="text-earth text-sm md:text-base leading-relaxed mb-6">
                I am not someone who cries in workshops. I cried in this one — not out of sadness, out of relief. The section on karma and career gave me a framework I had been looking for without knowing what I was looking for. Within 48 hours I had registered for a digital marketing course and told my manager I wanted a role change. Both things happened. I am not the same person I was before that 90 minutes.
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-cream">
                <span className="w-2 h-2 rounded-full bg-saffron"></span>
                <span className="font-semibold text-xs uppercase tracking-wider text-night">Priya M., 31, Pune — Senior HR Executive</span>
              </div>
            </div>

            {/* Review 2 - Alternate bg */}
            <div className="bg-cream/40 p-8 rounded-3xl border border-cream/80 shadow-md hover:shadow-xl transition-shadow relative">
              <span className="absolute top-6 right-8 text-4xl text-cream select-none font-serif">“</span>
              <p className="text-[17px] font-bold text-night tracking-tight mb-4 leading-snug">
                &ldquo;Finally — ancient wisdom that does not feel like a lecture.&rdquo;
              </p>
              <p className="text-earth text-sm md:text-base leading-relaxed mb-6">
                I have read the Gita three times. I have done courses on productivity. I still could not connect the dots between what I believed and how I was actually living. This workshop did it in 90 minutes. The Digital Freedom Stack section alone was worth more than a ₹10,000 course I paid for last year. Genuinely useful. Genuinely different.
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-cream">
                <span className="w-2 h-2 rounded-full bg-indigo"></span>
                <span className="font-semibold text-xs uppercase tracking-wider text-night">Arjun S., 38, Bengaluru — Product Manager</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-3xl border border-cream shadow-md hover:shadow-xl transition-shadow relative">
              <span className="absolute top-6 right-8 text-4xl text-cream select-none font-serif">“</span>
              <p className="text-[17px] font-bold text-night tracking-tight mb-4 leading-snug">
                &ldquo;My anxiety did not disappear, but I stopped being afraid of it.&rdquo;
              </p>
              <p className="text-earth text-sm md:text-base leading-relaxed mb-6">
                I registered because a friend sent me the link and I had nothing to lose. I did not expect to feel understood. The stress reset section described my exact internal experience — the Sunday dread, the overthinking, the way I go blank in high-pressure moments. The tool they gave us is something I still use every morning. Simple, but it actually works.
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-cream">
                <span className="w-2 h-2 rounded-full bg-saffron"></span>
                <span className="font-semibold text-xs uppercase tracking-wider text-night">Neha R., 27, Delhi — Freelance Graphic Designer</span>
              </div>
            </div>

            {/* Review 4 - Alternate bg */}
            <div className="bg-cream/40 p-8 rounded-3xl border border-cream/80 shadow-md hover:shadow-xl transition-shadow relative">
              <span className="absolute top-6 right-8 text-4xl text-cream select-none font-serif">“</span>
              <p className="text-[17px] font-bold text-night tracking-tight mb-4 leading-snug">
                &ldquo;I had been sitting on an AI skills plan for eight months. I started the next morning.&rdquo;
              </p>
              <p className="text-earth text-sm md:text-base leading-relaxed mb-6">
                I knew I needed to learn AI tools. Everyone knows that right now. But every time I sat down to start, I either felt overwhelmed or talked myself out of it. The workshop broke down exactly what to learn, in what order, and why — without the hype. More importantly, something in the mindset section removed the block I did not even know I had. I am three weeks into building my automation side project and it is already generating small income.
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-cream">
                <span className="w-2 h-2 rounded-full bg-indigo"></span>
                <span className="font-semibold text-xs uppercase tracking-wider text-night">Rohan K., 34, Mumbai — Corporate Finance Professional</span>
              </div>
            </div>

            {/* Review 5 */}
            <div className="bg-white p-8 rounded-3xl border border-cream shadow-md hover:shadow-xl transition-shadow relative">
              <span className="absolute top-6 right-8 text-4xl text-cream select-none font-serif">“</span>
              <p className="text-[17px] font-bold text-night tracking-tight mb-4 leading-snug">
                &ldquo;I came for the skills content and left with something much more valuable.&rdquo;
              </p>
              <p className="text-earth text-sm md:text-base leading-relaxed mb-6">
                Honestly I signed up because I wanted practical AI and digital marketing guidance. I got that. But the section on the law of attraction — not as a wishful thinking exercise, but as a practical principle of focused action and energetic alignment — shifted something I had been carrying for years. I left feeling lighter and more focused than I have in a long time. This is not your average free webinar.
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-cream">
                <span className="w-2 h-2 rounded-full bg-saffron"></span>
                <span className="font-semibold text-xs uppercase tracking-wider text-night">Kavitha N., 42, Chennai — Independent Business Consultant</span>
              </div>
            </div>

          </div>
        </section>

        {/* =======================================
            SECTION 10 — THE HOST INTRODUCTION
           ======================================= */}
        <section className="py-20 bg-indigo/5 border border-indigo/10 rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-20 h-20 bg-indigo/15 rounded-full flex items-center justify-center text-indigo mb-4 relative">
                <Compass className="w-10 h-10" />
                <span className="absolute bottom-0 right-0 bg-saffron text-ivory text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest">
                  Live
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase text-night tracking-tight">
                THEASKT
              </h3>
              <p className="text-xs font-bold text-indigo mt-1 tracking-wider uppercase">
                The Movement
              </p>
            </div>

            <div className="md:col-span-8 text-earth text-sm md:text-base leading-relaxed space-y-4">
              <h4 className="text-lg font-bold text-night">
                Who Is THEASKT — And Why This Is Different
              </h4>
              <p>
                THEASKT is not a coaching brand. It is not a self-help company. It is a transformation movement — built on the conviction that real, lasting change requires three things working in alignment: the depth of ancient wisdom, the precision of modern psychology, and the practical power of future-ready skills.
              </p>
              <p>
                The movement was founded by <strong className="text-night">Anuj Sharma</strong>, whose work sits at a rare intersection — formal training in Vedantic philosophy and the Bhagavad Gita, advanced study in modern behavioural psychology and neuroscience, and hands-on expertise in AI, digital marketing, and the skills economy. This is not a combination you find in most rooms. It is the combination that produces results that actually hold.
              </p>
              <p>
                While the founder&apos;s previous insights have reached over <strong className="text-night">3,200 professionals, entrepreneurs, and seekers</strong>, the official integrated THEASKT project is launching right now. Participants of our foundational systems include working professionals from FMCG, tech, finance, and healthcare; freelancers building digital income streams; and entrepreneurs rebuilding after burnout.
              </p>
              <p>
                What makes THEASKT different is not the content. It is the architecture. Every session is designed so that insight and action happen simultaneously — so that you do not walk away inspired but unchanged.
              </p>
            </div>

          </div>
        </section>

        {/* =======================================
            SECTION 11 — THE WORKSHOP DETAILS BOX
           ======================================= */}
        <section className="py-12">
          <div className="bg-night text-ivory rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center pb-6 border-b border-ivory/10"
              >
                <span className="text-[10px] uppercase tracking-widest text-saffron bg-saffron/10 px-3 py-1 rounded-full font-bold">
                  Exclusive Pre-Booking Details
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black uppercase tracking-tight text-white mt-4">
                  The Workshop Details
                </h3>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-saffron uppercase tracking-widest block">What</span>
                    <p className="text-base font-bold text-white leading-snug">Free 90-Minute Live Workshop — The 90-Minute Life Reset</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-saffron uppercase tracking-widest block">When</span>
                    <p className="text-base font-bold text-white leading-snug">Every Sunday at 8:00 PM IST (Launching Soon — Pre-Booking Now Open)</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-saffron uppercase tracking-widest block">Where</span>
                    <p className="text-base font-bold text-white leading-snug">Live on Zoom — onboarding & join link will be emailed close to launch</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-saffron uppercase tracking-widest block">Who It Is For</span>
                    <p className="text-sm font-medium text-cream/90 leading-relaxed">
                      Working professionals, entrepreneurs, and freelancers in India aged 24–45 who want to combine ancient wisdom with AI and modern skills to build a stress-free, financially free, purpose-driven life
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-saffron uppercase tracking-widest block">Investment</span>
                    <p className="text-base font-bold text-white flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-indigo text-[10px] font-bold tracking-wider rounded">100% FREE (Pre-Booking Price)</span>
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-saffron uppercase tracking-widest block">Founding Slots</span>
                    <p className="text-sm font-bold text-white leading-snug">Limited to 150 founding pioneers</p>
                  </div>
                </div>

              </div>

              <div className="pt-6 border-t border-ivory/10 text-center text-xs md:text-sm text-cream/85 leading-relaxed">
                <p>
                  These pre-booking seats are not a marketing tactic — they are a practical constraint. Once launched, our Sunday live, interactive format requires a close-knit group for real conversation, real Q&A, and direct attention. Once the 150 inaugural founding slots are claimed, early pre-booking registration closes. Secure your spot now to be on our launching list.
                </p>
                <p className="mt-4 font-bold text-saffron uppercase tracking-widest text-[11px]">
                  Pre-book today, confirm your founding seat, and we will notify you of our launching Sundays!
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =======================================
            SECTION 12 — THE SECOND OPT-IN
           ======================================= */}
        <section className="py-20 max-w-xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 animate-none"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-indigo">Join Today</span>
            <h2 className="text-3xl font-display font-black text-night uppercase tracking-tight mt-3">
              I am ready — save my seat
            </h2>
          </motion.div>
          
          <p className="text-earth text-sm md:text-base leading-relaxed mb-8">
            You have read this far because something on this page felt true. That recognition — that quiet sense of <em className="text-night font-bold">this is exactly what I have been looking for</em> — is not an accident. It is information. Do not let it fade into the background noise of a busy week.
          </p>

          <div className="bg-white p-6 md:p-8 rounded-3xl border border-cream shadow-xl text-left relative">
            {registeredUser ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3 bg-saffron/10 p-3 rounded-2xl border border-saffron/20 text-center">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-saffron"></span>
                  </span>
                  <p className="text-xs font-black text-saffron uppercase tracking-widest font-mono">FOUNDING SEAT PRE-BOOKED</p>
                </div>
                
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-2xl font-black text-night uppercase tracking-tight">
                    You&apos;re On the List, {registeredUser.name}!
                  </h3>
                  <p className="text-xs text-earth leading-relaxed font-semibold">
                    We have pre-booked your founding seat. Once launched, this transformational live session runs live every Sunday at 8:00 PM IST. A confirmation message and launch updates have been dispatched to <strong className="text-night">{registeredUser.email}</strong>.
                  </p>
                </div>

                <div className="p-4 bg-cream/20 rounded-2xl border border-cream/50 space-y-3 text-xs text-earth">
                  <div className="flex justify-between items-center border-b border-cream/50 pb-2">
                    <span className="font-bold uppercase tracking-wider text-[10px]">Frequency</span>
                    <span className="font-black text-night uppercase">Every Sunday (Launch Soon)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-cream/50 pb-2">
                    <span className="font-bold uppercase tracking-wider text-[10px]">Time</span>
                    <span className="font-black text-night uppercase">8:00 PM IST</span>
                  </div>
                  <div className="flex justify-between items-center pb-1">
                    <span className="font-bold uppercase tracking-wider text-[10px]">Access Link</span>
                    <span className="font-black text-saffron uppercase">Emailed Before Launch</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a 
                    href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=THEASKT+The+90-Minute+Life+Reset&dates=20260531T143000Z/20260531T160000Z&details=Fusing+ancient+Indian+wisdom+with+AI+and+future-ready+skills+to+build+a+stress-free,+financially+free,+purpose-driven+life.&location=Zoom+Meeting`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-night text-ivory hover:bg-neutral-800 font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <BookOpen className="w-4 h-4 text-saffron" />
                    Add Launch Slot to Calendar
                  </a>

                  <div className="bg-cream/10 rounded-xl border border-cream p-3 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold text-earth/80 truncate">
                      https://zoom.auth/j/theaskt-live-reset
                    </span>
                    <button 
                      onClick={handleCopyBottom}
                      className="text-[10px] font-black uppercase text-indigo hover:text-indigo/85 shrink-0 bg-indigo/5 px-2.5 py-1 rounded-md transition"
                    >
                      {copiedBottom ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <p className="text-[10px] text-earth text-center italic">
                  Learn One Thing. Apply One Thing. Become 1% Better.
                </p>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmitBottom} className="space-y-4">
                  <div>
                    <label htmlFor="firstNameBottom" className="block text-xs font-bold uppercase text-earth mb-1.5 tracking-wider">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstNameBottom"
                      required
                      value={firstNameBottom}
                      onChange={(e) => setFirstNameBottom(e.target.value)}
                      placeholder="Rahul"
                      className="w-full text-sm font-medium bg-ivory border border-saffron/25 rounded-lg px-4 py-3 placeholder:text-earth/40 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent text-night transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="emailBottom" className="block text-xs font-bold uppercase text-earth mb-1.5 tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="emailBottom"
                      required
                      value={emailBottom}
                      onChange={(e) => setEmailBottom(e.target.value)}
                      placeholder="rahul@example.com"
                      className="w-full text-sm font-medium bg-ivory border border-saffron/25 rounded-lg px-4 py-3 placeholder:text-earth/40 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent text-night transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="mobileBottom" className="block text-xs font-bold uppercase text-earth mb-1.5 tracking-wider">
                      WhatsApp / Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobileBottom"
                      required
                      value={mobileBottom}
                      onChange={(e) => setMobileBottom(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full text-sm font-medium bg-ivory border border-saffron/25 rounded-lg px-4 py-3 placeholder:text-earth/40 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent text-night transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingBottom}
                    className="w-full mt-2 bg-saffron hover:bg-saffron-hover text-ivory font-black py-4 px-6 rounded-lg transition-all shadow-lg text-sm md:text-base tracking-tight uppercase flex items-center justify-center gap-2"
                  >
                    {isSubmittingBottom ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-ivory" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        RESERVING SPOT...
                      </span>
                    ) : (
                      <>
                        Claim My Spot Before It Is Gone — I Am Ready
                        <ArrowRight className="w-5 h-5 shrink-0" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-4 pt-4 border-t border-cream flex items-center justify-center gap-1.5 text-[10px] text-earth font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-saffron shrink-0" />
                  <span>Zero spam. Full privacy. You can unsubscribe any time.</span>
                </div>
              </>
            )}
          </div>

          <p className="mt-6 text-xs text-earth italic">
            Ninety minutes. Free. Live. Everything changes — or nothing does. The choice is yours to make right now.
          </p>

        </section>

        {/* =======================================
            SECTION 13 — THE TRANSITION TEASER
           ======================================= */}
        <section className="py-12 border-t border-cream max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-saffron mb-4">Looking Ahead</p>
          <p className="text-earth text-sm md:text-base leading-relaxed">
            For those who want to go further after the workshop — THEASKT&apos;s 90-Day Live Transformation Program exists for exactly that reason. It takes everything from this session and builds it into a complete, guided, community-supported process over three months. We will share everything about it inside the workshop, for those who feel ready. There is no pressure, no hard sell. Just an open door for the people who are ready to walk through it.
          </p>
        </section>

        {/* =======================================
            SECTION 14 — THE FINAL CLOSE
           ======================================= */}
        <section className="py-20 border-t border-cream text-center max-w-4xl mx-auto space-y-10">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-display font-black text-night uppercase tracking-tight leading-tight"
          >
            This Is the Workshop That Starts the Shift.
          </motion.h2>

          <div className="max-w-2xl mx-auto text-earth text-base md:text-lg space-y-6 leading-relaxed">
            <p>
              You have been working hard. No one is questioning that.
            </p>
            <p>
              But hard work in the wrong direction — without the right inner foundation, without the right modern skills, without a system that connects your ancient knowing to your present action — produces exhaustion, not results. You know this. You have lived it.
            </p>
            <p className="font-bold text-night text-lg md:text-xl">
              What becomes possible when you finally have the architecture?
            </p>
            <p>
              A career that feels like purpose, not just performance. A mind that stays clear under pressure instead of spinning. An income that grows because you understand both the outer tools and the inner laws that govern how abundance actually moves. A version of your life that does not require you to be someone else to achieve it.
            </p>
            <p className="font-bold text-night text-xl italic text-saffron">
              That version of your life is not far. It is ninety minutes away.
            </p>
            <p>
              Register now. Show up live. Let something shift.
            </p>
          </div>

          <div className="pt-8 max-w-md mx-auto">
            <button 
              onClick={() => {
                const element = document.getElementById('registration-card-top');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full bg-indigo hover:bg-indigo/95 text-ivory font-black py-4 px-6 rounded-lg shadow-xl uppercase tracking-tighter text-base transition-all"
            >
              Reserve My Guaranteed Seat Live →
            </button>
          </div>

          <div className="pt-12 text-center space-y-8 border-t border-cream">
            <div className="max-w-xl mx-auto bg-cream/40 p-8 rounded-3xl border border-cream shadow-sm text-center space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-saffron bg-saffron/10 px-3 py-1 rounded-full flex items-center justify-center gap-1.5 w-max mx-auto">
                  <span>ॐ</span> THEASKT <span>ॐ</span>
                </span>
                <p className="text-xl md:text-2xl font-display font-black text-night uppercase tracking-tight">
                  Better Humans. Better Future.
                </p>
              </div>

              <p className="text-earth text-sm md:text-base leading-relaxed max-w-md mx-auto">
                THEASKT helps students, professionals, entrepreneurs, and seekers become better humans through timeless wisdom, mindset transformation, and future-ready skills.
              </p>

              <div className="pt-6 border-t border-cream/80 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-white rounded-xl border border-cream/40 shadow-sm hover:translate-y-[-2px] transition-transform">
                  <span className="text-[10px] font-bold text-saffron uppercase tracking-widest block mb-1">ॐ 01</span>
                  <p className="text-xs font-bold text-night uppercase tracking-tight">Learn One Thing</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-cream/40 shadow-sm hover:translate-y-[-2px] transition-transform">
                  <span className="text-[10px] font-bold text-indigo uppercase tracking-widest block mb-1">卐 02</span>
                  <p className="text-xs font-bold text-night uppercase tracking-tight">Apply One Thing</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-cream/40 shadow-sm hover:translate-y-[-2px] transition-transform">
                  <span className="text-[10px] font-bold text-saffron uppercase tracking-widest block mb-1">ॐ 03</span>
                  <p className="text-xs font-bold text-night uppercase tracking-tight">Become 1% Better</p>
                </div>
              </div>

              <p className="text-xs text-earth italic tracking-wide">
                Learn One Thing. Apply One Thing. Become 1% Better Every Day.
              </p>
            </div>
            
            <p className="font-sans font-bold tracking-widest text-earth/50 uppercase text-[9px] pt-8">
              © 2026 THEASKT Foundation. All Rights Reserved.
            </p>
          </div>

        </section>

      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-saffron hover:bg-saffron/90 text-ivory p-3.5 rounded-full shadow-2xl flex items-center justify-center border border-cream/20 cursor-pointer focus:outline-none transition-colors"
          title="Scroll to Top"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5 text-ivory" />
        </motion.button>
      )}
    </div>
  );
}


