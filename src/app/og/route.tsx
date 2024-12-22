import { createBaseUrl } from '@/utils/url';
import fs from 'fs/promises';
import { ImageResponse } from 'next/og';
import { type NextRequest } from 'next/server';
import path from 'path';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const title = req.nextUrl.searchParams.get('title');
  const font = await fs.readFile(path.join(process.cwd(), 'public', 'fonts', 'gangwon_bold.woff'));

  const response = new ImageResponse(
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
          padding: 80,
          textAlign: 'center',
          wordBreak: 'keep-all',
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

  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');

  return response;
}
