export interface Social {
  email?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
}

export type SocialKeys = keyof Social;
