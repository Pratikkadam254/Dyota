export interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  primary?: boolean;
  isCalButton?: boolean;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface ProcessStep {
  title: string;
  icon: React.ElementType;
  description: string;
} 