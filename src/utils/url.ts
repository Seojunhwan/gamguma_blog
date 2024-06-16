import { CDN_URL, BASE_URL } from '@/constants/url';

export function createCDNUrl(url: string) {
  return `${CDN_URL}/${url}`;
}

export function createBaseUrl(title: string) {
  return `${BASE_URL}/og?title=${title}`;
}
