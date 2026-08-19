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
    desc: 'Have a go and test your superpowers',
    features: ['2 Users', '2 Files', 'Public Share & Comments', 'Chat Support', 'New income apps'],
    btn: 'Signup for free',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 8,
    desc: 'Experiment the power of infinite possibilities',
    badge: 'Save 20%',
    features: ['4 Users', 'All apps', 'Unlimited editable exports', 'Folders and collaboration', 'All incoming apps'],
    btn: 'Go to pro',
    popular: true,
  },
  {
    id: 'business',
    name: 'Business',
    price: 16,
    desc: 'Unlimit your potential and get maximum results',
    features: ['All the features of pro plan', 'Account success manager', 'Single Sign-On (SSO)', 'Co-conception pannel', 'Collaboration Security'],
    btn: 'Goto Business',
    popular: false,
  },
];

export const BENEFITS = [
  'Free Income Monitoring Monthly',
  'Online Learning',
  'Real-time Collaboration',
  'Saving Money For The Team',
  'Online Transaction',
];

export const FOOTER_COLUMNS = [
  {
    title: 'Support',
    links: ['Help centre', 'Account information', 'About', 'Contact us'],
  },
  {
    title: 'Help and Solution',
    links: ['Talk to support', 'Support docs', 'System status', 'Covid response'],
  },
  {
    title: 'Product',
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
    quote: 'I am very helped by this Taskio application, my work is more organized and easy to manage every day, so I highly recommend it for you',
    name: 'Isabel Claire',
    role: 'Founder at TechFlow',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80',
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

