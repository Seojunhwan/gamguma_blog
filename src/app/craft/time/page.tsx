import { Time } from './_components/time';

export default function TimePage() {
  return (
    <div
      className='flex h-full flex-grow items-center justify-center p-14'
      style={{
        background:
          'radial-gradient(98.65% 146.65% at 50% 92.63%, rgba(255, 211, 117, 0.10) 0%, rgba(255, 211, 117, 0.00) 60%), #121213',
      }}
    >
      <Time />;
    </div>
  );
}
