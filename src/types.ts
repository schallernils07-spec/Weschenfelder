export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'cooking' | 'wash-cool' | 'equipment' | 'service';
  icon: string;
  image: string;
  imageLabel?: string;
  isPhoto?: boolean;
  features: string[];
  brands?: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface TargetGroup {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
}

export interface BrandItem {
  name: string;
  category: 'thermal' | 'wash' | 'cool' | 'coffee-water' | 'furniture-prep' | 'all';
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}
