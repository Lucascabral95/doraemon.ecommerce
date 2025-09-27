export interface TrustedShopsLink {
  url: string;
  text: string;
  target?: "_blank" | "_self";
}

export interface TrustedShopsConfig {
  certificateId: string;
  rating: number;
  ratingText: string;
  links: TrustedShopsLink[];
}

export interface ProteccionCompradorState {
  activeModal: boolean;
}
