export type HeroContent = {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type FeaturesSectionContent = {
  title: string;
  items: FeatureItem[];
};

export type TestimonialSectionContent = {
  title: string;
  subtitle: string;
};

export type FooterSectionContent = {
  cta: string;
};

export type NavbarContent = {
  brand: string;
};

export type SiteContent = {
  hero: HeroContent;
  features: FeaturesSectionContent;
  testimonials: TestimonialSectionContent;
  footer: FooterSectionContent;
  navbar: NavbarContent;
};

export const defaultContent: SiteContent = {
  hero: {
    title: "Grow Your Agency with AgencyFlow",
    subtitle:
      "Manage clients, projects, and campaigns in one streamlined dashboard. The modern SaaS workspace built for agencies.",
    primaryCta: "Start Free Trial",
    secondaryCta: "Book a Demo",
  },
  features: {
    title: "Why AgencyFlow?",
    items: [
      {
        title: "Centralized Client Management",
        description: "Onboard, organize, and access client information in seconds.",
      },
      {
        title: "Project & Campaign Tracking",
        description: "Monitor project status and campaign performance at a glance.",
      },
      {
        title: "Collaborative Team Workspace",
        description: "Empower your team with shared tools, notes, and tasks.",
      },
    ],
  },
  testimonials: {
    title: "Trusted by Leading Agencies",
    subtitle: "Join agencies who streamlined their operations with AgencyFlow.",
  },
  footer: {
    cta: "Ready to bring clarity to your agency?",
  },
  navbar: {
    brand: "AgencyFlow",
  },
};

export const siteContent: SiteContent = defaultContent;
export function getContent(): SiteContent {
  return siteContent;
}