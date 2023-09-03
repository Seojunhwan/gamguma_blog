import { IconButton } from '@/components/Common/IconButton';
import { SwitchCase } from '@/components/Common/SwitchCase';
import config from '@/config.json';
import { type SocialKeys } from '@/interfaces/Social';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='z-10 mt-12 w-full'>
      <div className='mx-auto flex w-full max-w-5xl flex-col items-center justify-between border-t-[1px] px-10 pb-14 pt-12 sm:flex-row'>
        <span className='text-sm text-gray-600'>
          &copy; {new Date().getFullYear()} by {config.title}
        </span>
        <ul className='mt-8 flex space-x-6 sm:mt-0'>
          {Object.entries(config.social).map(
            ([social, link]) =>
              link && (
                <li key={social}>
                  <Link href={(social === 'email' ? 'mailto:' : '') + link} target='_blank'>
                    <IconButton
                      className='flex items-center justify-center rounded-md p-2 transition-colors hover:bg-gray-50 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:stroke-gray-500'
                      label={`${social} 버튼`}
                    >
                      <SwitchCase
                        case={social as SocialKeys}
                        caseBy={{
                          email: <Mail />,
                          linkedin: <Linkedin />,
                          github: <Github />,
                          instagram: <Instagram />,
                        }}
                      />
                    </IconButton>
                  </Link>
                </li>
              ),
          )}
        </ul>
      </div>
    </footer>
  );
};
