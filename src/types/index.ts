export interface Project {
  id:          string;
  title:       string;
  slug:        string;
  description: string;
  longDesc?:   string;
  tags:        string[];
  accentColor: string;
  image:       string;
  liveUrl?:    string;
  repoUrl?:    string;
  year:        number;
  featured:    boolean;
}

export interface Skill {
  id:         string;
  name:       string;
  level:      number;
  category:   SkillCategory;
  icon?:      string;
}

export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'devops'
  | 'design'
  | 'tools';

export interface Experience {
  id:          string;
  company:     string;
  role:        string;
  period:      string;
  description: string[];
  tags:        string[];
  current:     boolean;
}

export interface NavItem {
  label:  string;
  href:   string;
  index:  string;
}

export interface ContactForm {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url:      string;
  icon:     string;
}
