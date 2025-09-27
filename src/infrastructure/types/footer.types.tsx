export interface FooterLink {
  to: string;
  text: string;
  isExternal?: boolean;
}

export interface ExternalLink {
  url: string;
  text: string;
  onClick: () => void;
}

export interface ContactInfo {
  schedules: string[];
  phones: Array<{
    number: string;
    icon: string;
  }>;
  email: {
    address: string;
    icon: string;
  };
  additionalInfo: string[];
}

export interface SocialIcon {
  name: string;
  viewBox: string;
  path: string;
  className: string;
}

export interface FooterSection {
  title: string;
  type: "links" | "external" | "contact" | "info";
  items?: FooterLink[];
  externalItems?: ExternalLink[];
  contactInfo?: ContactInfo;
  customContent?: React.ReactNode;
}
