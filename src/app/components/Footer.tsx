import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'next-view-transitions';
import config from '../../../config.json';
import { IconButton, SwitchCase } from '@/components/common';
import { type SocialKeys } from '@/interfaces/Social';

export const Footer = () => {
  return (
    <footer className='z-10 mt-12 w-full'>
      <div className='mx-auto flex w-full max-w-5xl flex-col items-center justify-between border-t-[1px] border-gray-1200 px-2 pb-14 pt-12 sm:flex-row dark:border-gray-200'>
        <span className='text-sm text-neutral-900 dark:text-gray-1100'>
          &copy; {new Date().getFullYear()} by {config.title}
        </span>
        <ul className='mt-8 flex space-x-6 sm:mt-0'>
          {Object.entries(config.social).map(([social, link]) => (
            <li key={social}>
              <Link href={(social === 'email' ? 'mailto:' : '') + link} target='_blank'>
                <IconButton
                  className='flex items-center justify-center rounded-md p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-200 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:stroke-neutral-800 dark:[&_svg]:stroke-gray-1100'
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
          ))}
        </ul>
      </div>
    </footer>
  );
};
