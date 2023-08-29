import { type ReactNode } from 'react';

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      {/* 다음 포스트 or 연관 포스트 */}
    </>
  );
}
