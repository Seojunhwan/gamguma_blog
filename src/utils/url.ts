import { CDN_URL } from '@/constants/url';

export function createCDNUrl(url: string) {
  return `${CDN_URL}/${url}`;
}
