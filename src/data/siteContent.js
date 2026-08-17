export const NAV_ITEMS = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Product', href: '#features', active: false },
  { label: 'FAQ', href: '#support', active: false },
  { label: 'Blog', href: '#features', active: false },
  { label: 'About Us', href: '#benefits', active: false },
];

export const PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    desc: 'Have a go and see your app perform',
    features: ['2 Users', '2GB Storage', 'Public Share & Comments', 'Chat Support', 'New updates outline'],
    btn: 'Sign up for free',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 8,
    desc: 'Experiment the power of professional automation',
    badge: 'Save 20%',
    features: ['4 Users', '10GB Storage', 'Public Share & Comments', 'Chat Support & Analytics', 'Advanced Security'],
    btn: 'Go to Pro',
    popular: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: 16,
    desc: 'Unleash maximum performance for teams',
    features: ['10 Users & Manager', '100GB Cloud Storage', 'Direct Custom Domain', '24/7 Priority Support', 'Collaboration Teams'],
    btn: 'Goto Business',
    popular: false,
  },
];

export const BENEFITS = [
  'Free Course Entry With Registration',
  'Online Learning & Workspace Templates',
  'Live & Interactive Sessions',
  'Savings Money For The Team',
  'Seamless Integrations With 50+ Apps',
];

export const FOOTER_COLUMNS = [
  {
    title: 'Support',
    links: ['Help centre', 'Account information', 'About', 'Contact us'],
  },
  {
    title: 'Helpful Links',
    links: ['Terms & conditions', 'Privacy policy', 'Security', 'Status'],
  },
  {
    title: 'Products',
    links: ['Update', 'Security', 'Beta test', 'Pricing product'],
  },
];

export const PARTNERS = [
  { name: 'Unsplash', Icon: 'UnsplashIcon' },
  { name: 'Notion', Icon: 'NotionIcon' },
  { name: 'INTERCOM', Icon: 'IntercomIcon' },
  { name: 'descript', Icon: 'DescriptIcon' },
  { name: 'grammarly', Icon: 'GrammarlyIcon' },
];

export const TESTIMONIALS = [
  {
    quote: 'I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in in my life , i recommend it to you 🌟',
    name: 'John Richard',
    role: 'Founder at TechFlow',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80',
  },
  {
    quote: 'Biccas has transformed how our remote team operates. Task management, cloud sync and live analytics in one clean dashboard!',
    name: 'Sarah Jenkins',
    role: 'VP of Product at Acme',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
  },
  {
    quote: 'The collaboration features are unmatched. Our productivity increased 40% in just 2 weeks of using Biccas.',
    name: 'Marcus Williams',
    role: 'CTO at FinTech Co',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
  },
  {
    quote: 'Best SaaS tool we have ever used. The analytics alone are worth the price.',
    name: 'Alicia Kim',
    role: 'Head of Growth',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80',
  },
];
