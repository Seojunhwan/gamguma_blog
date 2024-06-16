import { createBaseUrl } from '@/utils/url';
import fs from 'fs/promises';
import { ImageResponse } from 'next/og';
import { type NextRequest } from 'next/server';
import path from 'path';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const title = req.nextUrl.searchParams.get('title');
  const font = await fs.readFile(path.join(process.cwd(), 'public', 'fonts', 'gangwon_bold.woff'));

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundSize: '1200px 630px',
          backgroundImage: `url(${createBaseUrl('/images/og_background.png')})`,
        }}
      >
        <div
          style={{
            display: 'flex',
            fontFamily: 'Gangwon',
            fontSize: 64,
            color: '#fafafa',
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Gangwon',
          data: font,
          style: 'normal',
        },
      ],
    },
  );
}
