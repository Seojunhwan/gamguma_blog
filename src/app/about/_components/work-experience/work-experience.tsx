import { X } from 'lucide-react';
import { Button, IconButton } from '@/components/common';
import { createCDNUrl } from '@/utils/url';
import Image from 'next/image';
import { Modal, ModalClose, ModalContent, ModalTrigger } from '../shared';

interface WorkExperienceItem {
  logo: string;
  company: string;
  position: string;
  period: string;
  description: string;
  details: Array<{
    team: string;
    description: string;
  }>;
}

const WORK_EXPERIENCE: WorkExperienceItem[] = [
  {
    logo: createCDNUrl('/images/work-experience/team-sparta.png'),
    company: 'Team Sparta',
    position: 'Software Engineer',
    period: '2023.09 - Present',
    description: '대충 설명',
    details: [
      {
        team: '항해 99',
        description: '대충 설명',
      },
    ],
  },
  {
    logo: createCDNUrl('/images/work-experience/toss.png'),
    company: 'Toss',
    position: 'UX Engineer Assistant',
    period: '2023.01 - 2023.07',
    description: '대충 설명',
    details: [
      {
        team: 'PC Design Platform Team',
        description: '대충 설명',
      },
      {
        team: 'UX-Ops Team',
        description: '대충 설명',
      },
      {
        team: 'Mobile Design Platform Team',
        description: '대충 설명',
      },
    ],
  },
];

export function WorkExperience() {
  return (
    <ul className='flex flex-col gap-8'>
      {WORK_EXPERIENCE.map((item) => (
        <WorkExperienceItem key={item.company} {...item} />
      ))}
    </ul>
  );
}

function WorkExperienceItem({ logo, company, position, period }: WorkExperienceItem) {
  return (
    <li className='flex items-center justify-between'>
      <div className='flex flex-col gap-2'>
        <figure className='flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm'>
          <Image src={logo} alt={`${company} 로고`} width={80} height={80} />
        </figure>
        <div className='flex flex-col justify-center gap-1'>
          <div className='flex items-center'>
            <p className='text-sm font-medium'>{company}</p>
            <span role='separator' className='mx-1'>
              -
            </span>
            <span className='text-xs'>{position}</span>
          </div>
          <p className='text-xs'>{period}</p>
        </div>
      </div>

      <Modal mode='full'>
        <ModalTrigger>
          <Button variant='ghost' size='sm'>
            자세히 보기
          </Button>
        </ModalTrigger>
        <ModalContent>
          <ModalClose>
            {/* TODO: 바텀 오버레이로 닫기 버튼 띄우기 */}
            <IconButton label='닫기' variant='ghost' className='absolute right-2 top-2'>
              <X className='h-6 w-6 stroke-neutral-600' strokeWidth={1.5} />
            </IconButton>
          </ModalClose>
          <span className='flex h-full w-full items-center justify-center text-2xl'>🚧</span>
        </ModalContent>
      </Modal>
    </li>
  );
}
