/**
 * Typed access to the site's content. The content lives in `content.json`;
 * this file only describes the shape and re-exports it.
 *
 * Source of truth for the words and numbers is BAPN's content pack
 * (October 2026). Edit content.json, not the pages.
 */

import content from './content.json';

export type Coach = {
  slug: string;
  name: string;
  role: string;
  creds: string[];
  years: string;
  bio: string;
  focus: string;
  /** Basename of a file in src/assets/coaches/, or null for an initials tile. */
  photo: string | null;
};

export type Program = {
  slug: string;
  name: string;
  group: 'junior' | 'adult' | 'camp' | 'social';
  audience: string;
  summary: string;
  days: string[];
  time: string;
  price: string;
  basis: string;
  capacity: number;
  entry: 'open' | 'selection';
  note: string;
  featured?: boolean;
};

export type TermFee = {
  group: string;
  standard: string;
  individual: string;
  family: string;
  sessions: string;
};

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  alt: string;
  blurb: string;
  features: string[];
  featured?: boolean;
};

export type Memberships = {
  intro: string;
  termFees: TermFee[];
  plans: Plan[];
  referral: { headline: string; body: string; rules: string[] };
};

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
  /** Basename of a file in src/assets/photos/ */
  photo: string;
};

export type Partner = {
  slug: string;
  name: string;
  tier: string;
  href: string;
  blurb: string;
  logo: string;
  logoBg: 'light' | 'dark';
};

export type Tier = {
  name: string;
  label: string;
  cash: string;
  product: string;
  perks: string[];
  featured?: boolean;
};

export type Social = { label: string; href: string };

export type Site = {
  name: string;
  longName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  venue: { name: string; address: string; suburb: string; mapQuery: string };
  legal: { entity: string; nzbn: string; tradingAs: string };
  socials: Social[];
};

export type Stat = { value: string; label: string };

export const site: Site = content.site;
export const stats: Stat[] = content.stats;
export const coaches: Coach[] = content.coaches as Coach[];
export const programs: Program[] = content.programs as Program[];
export const memberships: Memberships = content.memberships;
export const news: NewsItem[] = content.news;
export const partners: Partner[] = content.partners as Partner[];
export const sponsorship: { intro: string; tiers: Tier[] } = content.sponsorship;
export const schools: {
  intro: string;
  offers: { title: string; body: string }[];
  schools: { name: string; note: string }[];
} = content.schools;

/** Site navigation is structural, not content — it stays in code. */
export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Membership', href: '/membership' },
  { label: 'Schools', href: '/schools' },
  { label: 'News', href: '/news' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
];

/** The primary call to action everywhere on the site. */
export const cta = { label: 'Sign up', href: '/sign-up' };
