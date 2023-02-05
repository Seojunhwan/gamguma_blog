import Image from 'next/image';

import { cls, PROFILE_IMAGE } from '@utils';

type ProfileSize = 'xsm' | 'sm' | 'md' | 'lg';

interface Props {
  size?: ProfileSize;
}

const sizeMap: Record<ProfileSize, number> = {
  xsm: 8,
  sm: 12,
  md: 16,
  lg: 20,
};

export function ProfileImage({ size = 'md' }: Props) {
  return (
    <div className={cls(`w-${sizeMap[size]}`, 'overflow-hidden rounded-full')}>
      <Image src={PROFILE_IMAGE} alt='profile_image' width={3024} height={3024} />
    </div>
  );
}
