import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'THEASKT — Live Masterclass Pre-Booking | Bhagavad Gita & AI Reset',
  description: 'Pre-book your founding seat for THEASKT\'s transformational live Sunday masterclass at 8:00 PM IST. Experience the unshakeable synthesis of ancient Indian wisdom, behavioral psychology, and practical AI automation skills.',
  keywords: 'THEASKT, THEASKT masterclass, Anuj Sharma, Bhagavad Gita, Indian philosophy, behavioral psychology, neuroscience, AI skills, professional reset, high-ticket transformation, karma law, stress-free productivity India',
  authors: [{ name: 'Anuj Sharma', url: 'https://www.theaskt.com' }],
  creator: 'Anuj Sharma',
  publisher: 'THEASKT',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'THEASKT — Live Masterclass Pre-Booking | Bhagavad Gita & AI Reset',
    description: 'Pre-book your founding seat for THEASKT\'s transformational live Sunday masterclass at 8:00 PM IST. Experience the unshakeable synthesis of ancient Indian wisdom, behavioral psychology, and practical AI automation skills.',
    url: 'https://www.theaskt.com',
    siteName: 'THEASKT',
    images: [
      {
        url: 'https://picsum.photos/seed/theaskt/1200/630',
        width: 1200,
        height: 630,
        alt: 'THEASKT Live Masterclass Pre-Booking Banner',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THEASKT — Live Masterclass Pre-Booking | Bhagavad Gita & AI Reset',
    description: 'Pre-book your founding seat for THEASKT\'s transformational live Sunday masterclass at 8:00 PM IST.',
    images: ['https://picsum.photos/seed/theaskt/1200/630'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "THEASKT",
    "url": "https://www.theaskt.com",
    "logo": "https://picsum.photos/seed/theaskt/200/200",
    "founder": {
      "@type": "Person",
      "name": "Anuj Sharma"
    },
    "description": "Fusing ancient Indian wisdom, Bhagavad Gita philosophy, modern behavioral psychology, and practical AI automation skills for high-ticket professional transformation.",
    "sameAs": [
      "https://www.youtube.com/@theaskt",
      "https://www.instagram.com/the_askt/"
    ]
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalEvent",
    "name": "THEASKT Live Masterclass Pre-Booking",
    "description": "Pre-book your founding seat for THEASKT's upcoming weekly live Sunday masterclass running at 8:00 PM IST. Experience the synthesis of timeless Vedic wisdom, subconscious profiling, and practical AI skill resets.",
    "startDate": "2026-05-31T20:00:00+05:30",
    "endDate": "2026-05-31T21:30:00+05:30",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://www.theaskt.com"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.theaskt.com",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-05-27T18:00:00Z"
    },
    "performer": {
      "@type": "Person",
      "name": "Anuj Sharma"
    },
    "organizer": {
      "@type": "Organization",
      "name": "THEASKT",
      "url": "https://www.theaskt.com"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the schedule for THEASKT's live masterclasses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The transformational live masterclass runs weekly on Sundays at 8:00 PM IST. Pre-bookings are currently open for select founding seats."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the mentor behind THEASKT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The movement was initiated by Anuj Sharma, an expert combining formal Advaita Vedanta studies, Bhagavad Gita principles, neuroscience behavioral psychology, and master-level AI automation skills."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to pay to pre-book a seat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Pre-booking slots are 100% Free as part of THEASKT's pre-launch campaign. Founding seats are highly restricted to 150 members to preserve focused attention."
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Injecting Organization Structured JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Injecting Event Structured JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
        {/* Injecting FAQ Structured JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans antialiased text-night min-h-screen border-8 border-saffron/20 bg-ivory" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

