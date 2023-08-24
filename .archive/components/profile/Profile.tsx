import { ComponentProps } from 'react';

import { ProfileImage } from '.';

interface Props {
  imageSize?: ComponentProps<typeof ProfileImage>['size'];
}

export function Profile({ imageSize }: Props) {
  return (
    <div className='flex items-center space-x-3'>
      <ProfileImage size={imageSize} />
      <span className='font-semibold text-gray-700'>서준환</span>
    </div>
  );
}
