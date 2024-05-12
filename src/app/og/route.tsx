import { BASE_URL } from '@/constants/url';
import { ImageResponse } from 'next/og';
import { type NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const title = req.nextUrl.searchParams.get('title');
  const font = fetch(new URL('../../../public/fonts/gangwon_bold.woff', import.meta.url)).then((res) =>
    res.arrayBuffer(),
  );
  const fontData = await font;

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
          backgroundImage: `url(${BASE_URL}/images/og_background.png)`,
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
          data: fontData,
          style: 'normal',
        },
      ],
    },
  );
}
