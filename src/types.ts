import { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  number: string;
}

export interface ComparisonPoint {
  feature: string;
  generic: string;
  custom: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}