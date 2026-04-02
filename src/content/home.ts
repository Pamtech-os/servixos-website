export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export type Feature = {
  icon: 'sparkles' | 'globe' | 'building2' | 'fileText' | 'users' | 'trendingUp';
  title: string;
  description: string;
  gradient: string;
};

export const features: Feature[] = [
  {
    icon: 'sparkles',
    title: 'AI-Driven Business Setup',
    description:
      'Create your business automatically with AI. Answer a few questions and watch your business come to life.',
    gradient: 'from-primary to-secondary',
  },
  {
    icon: 'globe',
    title: 'AI Website Builder',
    description:
      'Build your professional service website instantly. No coding required-just beautiful, ready-to-launch sites.',
    gradient: 'from-accent to-primary',
  },
  {
    icon: 'building2',
    title: 'Online Office',
    description:
      'Everything your business needs in one place with AI. Manage operations, team, and growth from a single dashboard.',
    gradient: 'from-secondary to-accent',
  },
  {
    icon: 'fileText',
    title: 'Contracts & Invoices',
    description:
      'Automatically generated professional documents. Send invoices and contracts in seconds, not hours.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: 'users',
    title: 'Client Management',
    description:
      'Track and manage all your customers effortlessly. Build relationships that drive repeat business.',
    gradient: 'from-accent to-secondary',
  },
  {
    icon: 'trendingUp',
    title: 'AI Insights & Suggestions',
    description:
      'Know how your business is doing and get actionable recommendations to improve and grow.',
    gradient: 'from-secondary to-primary',
  },
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
    title: 'Sign Up & Tell Us About Your Business',
    description:
      'Create your account in seconds. Answer a few simple questions about what you want to build.',
  },
  {
    num: '02',
    icon: 'wand2',
    title: 'AI Builds Everything For You',
    description:
      'Our AI creates your business setup, website, documents, and workflows-automatically.',
  },
  {
    num: '03',
    icon: 'rocket',
    title: 'Launch & Grow With AI Support',
    description:
      'Go live instantly. Your AI assistant helps you manage operations, clients, and growth every day.',
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
    text: 'Servix OS helped me launch my coaching business in a single afternoon. The AI set up everything-website, invoices, client portal. I was blown away.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'E-Commerce Seller',
    text: 'I used to juggle Shopify, QuickBooks, and three other tools. Now everything is in one place. The AI suggestions actually helped me double my revenue.',
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
    text: "We moved our entire team to Servix OS. The online office and AI insights save us at least 15 hours a week. Best decision we've made.",
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
    a: 'Servix OS platform is an AI-powered system that helps you start, run, and grow a business-all in one place. It combines an online office with an AI assistant that helps manage operations, customers, and growth.',
  },
  {
    q: 'How is this different from Shopify or Amazon?',
    a: 'Unlike Shopify (which helps you build a store) or Amazon (which helps you sell products), our platform helps you run the entire business with AI support-from setup to daily operations and decision-making.',
  },
  {
    q: 'Who is this for?',
    a: 'Beginners with no business experience, entrepreneurs who want to save time, service business owners, e-commerce sellers, freelancers, and small teams.',
  },
  {
    q: 'Do I need business experience to use this?',
    a: 'No. The platform is designed so that anyone can start and run a business, even with little to no prior experience.',
  },
  {
    q: 'What does the AI actually do?',
    a: 'Your AI helps you: set up your business, manage tasks and operations, suggest pricing and strategies, track performance, answer questions and guide decisions.',
  },
  {
    q: 'Is the AI running my business completely?',
    a: 'No. You are always in control. The AI acts like a COO or advisor, helping you make smarter and faster decisions.',
  },
  {
    q: "Can I override the AI's decisions?",
    a: 'Yes. You can edit, approve, or ignore any AI suggestion at any time.',
  },
  {
    q: 'Can I start an online store on this platform?',
    a: "Yes. You can create and manage an online store similar to what you'd build on Shopify, but with AI assistance built in.",
  },
  {
    q: 'Does it help me find products to sell?',
    a: 'Yes. The platform can suggest product ideas, trends, and opportunities to help you get started faster.',
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
    a: 'Yes. You can try the platform before committing to a paid plan.',
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
    a: 'Simply sign up, follow the guided setup, and the AI will help you build and launch your business step by step.',
  },
  {
    q: 'How long does it take to launch a business?',
    a: 'You can get started in minutes and launch much faster than traditional methods, depending on your setup.',
  },
  {
    q: 'What makes this platform unique?',
    a: 'Most platforms give you tools. We give you a system that helps run your business with you.',
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
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'FAQ', href: '#faq' },
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
    'AI-powered platform that helps you start, run, and grow a business in one place.',
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
