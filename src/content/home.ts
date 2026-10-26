export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: 'AI Engine', href: '#ai-engine' },
  { label: 'Platform', href: '#journey' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Waitlist', href: '/waitlist' },
];

export type WaitlistPersona = {
  value: 'aspiring_founder' | 'has_idea' | 'business_owner' | 'exploring';
  label: string;
};

export const waitlistPersonas: WaitlistPersona[] = [
  {
    value: 'aspiring_founder',
    label: "I want to start a business but don't know what to start.",
  },
  {
    value: 'has_idea',
    label: 'I have a business idea and want to get started.',
  },
  {
    value: 'business_owner',
    label: 'I already run a business.',
  },
  {
    value: 'exploring',
    label: "I'm interested in exploring Servix OS.",
  },
];

export const waitlistPerks: string[] = [
  'Early access before public launch',
  'Launch updates and product previews',
  'Help shape what we build next',
];

export type FeatureStatus = 'available' | 'in-development' | 'planned' | 'prototype';

export type AIEngineStep = {
  icon: 'brain' | 'listChecks' | 'compass' | 'zap' | 'activity' | 'refreshCw';
  title: string;
  description: string;
  status: FeatureStatus;
};

export const aiEngineSteps: AIEngineStep[] = [
  {
    icon: 'brain',
    title: 'Understand',
    description:
      'Learns the details of your business-what you sell, who you serve, and how you operate.',
    status: 'available',
  },
  {
    icon: 'listChecks',
    title: 'Prioritize',
    description:
      'Looks at your operations and surfaces what actually needs your attention right now.',
    status: 'available',
  },
  {
    icon: 'compass',
    title: 'Guide',
    description:
      "Recommends the next step in plain language, so you're never stuck wondering what to do.",
    status: 'available',
  },
  {
    icon: 'zap',
    title: 'Execute',
    description:
      'Drafts or prepares the action for you-an invoice follow-up, a contract, a next step-ready for your approval.',
    status: 'available',
  },
  {
    icon: 'activity',
    title: 'Track',
    description:
      'Keeps an eye on what happens after action is taken-payments, replies, and results.',
    status: 'available',
  },
  {
    icon: 'refreshCw',
    title: 'Improve',
    description:
      'Learns from outcomes over time to make sharper recommendations the next time around.',
    status: 'in-development',
  },
];

export type JourneyItem = {
  title: string;
  description: string;
  status: FeatureStatus;
};

export type JourneyStage = {
  key: 'discover' | 'run' | 'grow';
  badge: string;
  title: string;
  description: string;
  items: JourneyItem[];
};

export const journeyStages: JourneyStage[] = [
  {
    key: 'discover',
    badge: 'Stage 1',
    title: 'Discover & Start',
    description:
      "Explore business ideas, shape a concept, and set up your foundations-even if you're starting from zero.",
    items: [
      {
        title: 'AI Business Discovery',
        description:
          'Explore ideas and opportunities based on your interests, skills, and what the market is asking for.',
        status: 'available',
      },
      {
        title: 'Guided Business Setup',
        description:
          'Answer a few questions and get a working business foundation-structure, basics, and a plan to follow.',
        status: 'available',
      },
      {
        title: 'AI Website Builder',
        description: 'Launch a professional, ready-to-go website without writing code.',
        status: 'available',
      },
    ],
  },
  {
    key: 'run',
    badge: 'Stage 2',
    title: 'Run',
    description:
      'Keep operations, customers, jobs, invoices, and contracts connected in one workspace-with daily AI guidance.',
    items: [
      {
        title: 'Online Office',
        description: 'Manage jobs, customers, and day-to-day operations from a single workspace.',
        status: 'available',
      },
      {
        title: 'Invoicing & Contracts',
        description: 'Create and send professional invoices and contracts in minutes.',
        status: 'available',
      },
      {
        title: 'Client & Team Management',
        description: 'Track customers, collaborate with your team, and stay organized as you grow.',
        status: 'available',
      },
    ],
  },
  {
    key: 'grow',
    badge: 'Stage 3',
    title: 'Grow',
    description:
      'Spot opportunities, sharpen performance, attract more customers, and make better decisions-with AI pointing the way.',
    items: [
      {
        title: 'AI Insights & Suggestions',
        description: 'Understand how your business is doing and get recommended next steps.',
        status: 'available',
      },
      {
        title: 'AI Pricing & Contract Assistance',
        description: 'Get help pricing jobs and generating contracts that protect you.',
        status: 'available',
      },
      {
        title: 'Ads Manager',
        description: 'Plan and manage customer-acquisition campaigns from inside Servix OS.',
        status: 'planned',
      },
    ],
  },
];

export type AIDemoStep = {
  num: string;
  title: string;
  description: string;
};

export const aiDemoSteps: AIDemoStep[] = [
  {
    num: '01',
    title: 'Identify',
    description: 'Servix OS notices an invoice is overdue.',
  },
  {
    num: '02',
    title: 'Explain',
    description:
      "It explains why it matters-cash flow impact, how late it is, and the customer's history.",
  },
  {
    num: '03',
    title: 'Prepare',
    description: 'It drafts a friendly follow-up message to the customer, ready to send.',
  },
  {
    num: '04',
    title: 'Approve',
    description: "You review it, make any edits, and approve it-you're always the one in control.",
  },
  {
    num: '05',
    title: 'Track',
    description: 'Once sent, Servix OS tracks whether the customer responded or paid.',
  },
];

export type SuggestionCard = {
  tag: string;
  problem: string;
  whyItMatters: string;
  action: string;
};

export const suggestionCards: SuggestionCard[] = [
  {
    tag: 'Cash flow',
    problem: 'Invoice #1042 is 12 days overdue',
    whyItMatters:
      'This customer typically pays within 5 days. The delay could signal a cash flow issue worth addressing now.',
    action: 'Send a friendly payment reminder with a 3-day grace period.',
  },
  {
    tag: 'Pricing',
    problem: "Your 'Logo Design' service is priced below similar jobs",
    whyItMatters:
      "Comparable jobs you've completed closed higher. You may be leaving money on the table.",
    action: 'Review a suggested price adjustment for this service.',
  },
  {
    tag: 'Customer retention',
    problem: "3 repeat customers haven't booked in 60+ days",
    whyItMatters: 'Customers who go quiet for two months rarely come back without a nudge.',
    action: 'Send a personalized check-in message to each customer.',
  },
];

export type BeginnerPoint = {
  text: string;
};

export const beginnerFrictionPoints: BeginnerPoint[] = [
  { text: "I don't know what business to start" },
  { text: "I don't know where to begin" },
  { text: "I'm afraid of making a costly mistake" },
  { text: "I don't know what to do next, day to day" },
];

export type HowItWorksStep = {
  num: string;
  icon: 'userPlus' | 'wand2' | 'rocket';
  title: string;
  description: string;
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    num: '01',
    icon: 'userPlus',
    title: 'Tell Servix OS About You',
    description:
      'Create your account in seconds and share a bit about yourself or your business idea-no jargon required.',
  },
  {
    num: '02',
    icon: 'wand2',
    title: 'Get Your Plan & Setup',
    description:
      'Servix OS helps shape a plan and sets up your foundation-website, documents, and workflows-ready for you to review.',
  },
  {
    num: '03',
    icon: 'rocket',
    title: 'Run and Grow With Guidance',
    description:
      'Go live and keep going. Every day, your AI engine highlights what matters and helps you act on it.',
  },
];

export type PricingPlan = {
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 29,
    description:
      'Launch with the essentials-guided business setup, job tracking, invoicing, and client management with built-in AI assistance.',
    features: [
      'AI Business Setup',
      'Jobs Management (up to 10)',
      'Invoicing (up to 10)',
      'Client Management (up to 10)',
      'AI Insights',
      'AI Suggestions (up to 5)',
      'Team Members (1)',
      'Support Center',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Growth',
    price: 79,
    description:
      'Built for growing teams-unlock more automation, smarter pricing and contracts, and higher limits to run more jobs and invoices.',
    features: [
      'Everything in Starter +',
      'AI Suggestions (up to 50)',
      'AI Pricing Assistant',
      'AI Contract Generator',
      'Invoicing (up to 50)',
      'Client Management (up to 50)',
      'Team Members (up to 10)',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Pro',
    price: 100,
    description:
      'For scale and operations-unlimited usage, advanced AI support, and streamlined workflows built for high-volume teams.',
    features: [
      'Everything in Growth +',
      'AI Suggestions (unlimited)',
      'Invoicing (unlimited)',
      'Client Management (unlimited)',
      'Team Members (unlimited)',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
];

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Founder, BrightPath Coaching',
    text: 'Servix OS helped me launch my coaching business in a single afternoon. The AI set up everything-website, invoices, client portal.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'E-Commerce Seller',
    text: 'I used to juggle Shopify, QuickBooks, and three other tools. Now everything is in one place, and the AI suggestions help me make smarter calls about where to spend my time and money.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Freelance Designer',
    text: 'As a solo freelancer, Servix OS is like having a business partner. It handles contracts, invoicing, and even reminds me to follow up with clients.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'CEO, GrowthStack Agency',
    text: 'We moved our entire team to Servix OS. The online office and AI insights save our team real time every week on the operational work that used to eat our days.',
    rating: 5,
  },
];

export type FAQ = {
  q: string;
  a: string;
};

export const faqs: FAQ[] = [
  {
    q: 'What is Servix OS?',
    a: 'Servix OS is an AI entrepreneurship platform. Whether you already run a business or are still deciding what to build, it helps you discover opportunities, start your business, run day-to-day operations, and grow-all with one connected AI engine guiding you along the way.',
  },
  {
    q: "I don't know what business to start-can Servix OS still help?",
    a: "Yes. Servix OS is designed to help you explore ideas and opportunities before you've decided what to build, not just run a business you already have.",
  },
  {
    q: 'How is this different from Shopify or Amazon?',
    a: 'Unlike Shopify (which helps you build a store) or Amazon (which helps you sell products), Servix OS helps you run the entire business with AI support-from discovering an idea to daily operations and decision-making.',
  },
  {
    q: 'Who is this for?',
    a: 'People who want to become entrepreneurs but don’t know where to start, as well as existing service business owners, e-commerce sellers, freelancers, and small teams who want to save time.',
  },
  {
    q: 'Do I need business experience to use this?',
    a: 'No. Servix OS is designed so that anyone can start and run a business, even with little to no prior experience.',
  },
  {
    q: 'What does the AI engine actually do?',
    a: 'Your AI engine understands your business, prioritizes what needs attention, guides you on next steps, helps prepare actions like follow-ups or contracts, tracks the results, and is continually being improved to learn from outcomes over time.',
  },
  {
    q: 'Is the AI running my business completely?',
    a: 'No. You are always in control. The AI acts like a guide or advisor, helping you make smarter and faster decisions.',
  },
  {
    q: "Can I override the AI's decisions?",
    a: 'Yes. You can edit, approve, or ignore any AI suggestion or draft at any time.',
  },
  {
    q: 'Can I start an online store on this platform?',
    a: "Yes. You can create and manage an online store similar to what you'd build on Shopify, but with AI assistance built in.",
  },
  {
    q: 'Does it help me find products to sell?',
    a: 'Yes. Servix OS can suggest product ideas, trends, and opportunities to help you get started faster.',
  },
  {
    q: 'Does it handle orders and customers?',
    a: 'Yes. You can manage orders, track sales, and communicate with customers-all from one dashboard.',
  },
  {
    q: 'Can I run a service business too?',
    a: 'Yes. You can manage bookings, clients, team members, and projects inside your online office.',
  },
  {
    q: 'Can my team use this platform?',
    a: 'Yes. You can add team members, assign roles, and collaborate within your business workspace.',
  },
  {
    q: 'How much does it cost?',
    a: 'We offer flexible subscription plans based on your needs, with options for individuals, growing businesses, and teams.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. You can try Servix OS before committing to a paid plan.',
  },
  {
    q: 'Is my business data secure?',
    a: 'Yes. We use industry-standard security practices to keep your data safe.',
  },
  {
    q: 'Do I own my business and data?',
    a: 'Yes. You fully own your business, customers, and data at all times.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply sign up, follow the guided setup, and Servix OS will help you shape and launch your business step by step.',
  },
  {
    q: 'What makes Servix OS unique?',
    a: 'Most platforms give you tools. Servix OS gives you a single AI engine that understands your business and helps you run it-from your first idea to day-to-day growth.',
  },
];

export type FooterLinkGroup = {
  heading: string;
  links: {
    label: string;
    href: string;
  }[];
};

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    heading: 'Product',
    links: [
      { label: 'AI Engine', href: '/#ai-engine' },
      { label: 'AI Suggestion Panel', href: '/#ai-suggestions' },
      { label: 'Platform', href: '/#journey' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Join the Waitlist', href: '/waitlist' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
];

export const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Facebook', href: '#' },
];

export const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Servix OS',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'AI entrepreneurship platform that helps you discover a business idea, start, run, and grow a business-all in one place.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter',
      price: 29,
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Growth',
      price: 79,
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Pro',
      price: 100,
      priceCurrency: 'USD',
    },
  ],
} as const;
