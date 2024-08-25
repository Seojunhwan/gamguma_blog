'use client';

import { Separator } from '@/components/common/separator/separator';
import { Motion } from '@/components/motion';
import { useInterval } from '@/hooks/useInterval';
import { cn } from '@/utils/cn';
import { composeRefs } from '@/utils/compose-refs';
import { PanInfo, clamp, useAnimate } from 'framer-motion';
import { SVGAttributes, useCallback, useEffect, useRef, useState } from 'react';

const timezones = [
  {
    city: 'Seoul',
    timeZone: 'Asia/Seoul',
  },
  {
    city: 'London',
    timeZone: 'Europe/London',
  },
  {
    city: 'Wellington',
    timeZone: 'Pacific/Auckland',
  },
  {
    city: 'New York',
    timeZone: 'America/New_York',
  },
];

function useCurrentTime() {
  const [time, setTime] = useState(() => new Date());

  useInterval(() => setTime(new Date()), 1000);

  return time;
}

function getTimezoneOffset(time: Date, timeZone: string) {
  const targetDate = new Date(time.toLocaleString('en-US', { timeZone }));

  const hoursDifference = targetDate.getHours() - time.getHours();
  const formattedDifference = hoursDifference > 0 ? `+${hoursDifference}` : `${hoursDifference}`;

  return formattedDifference;
}

export function Time() {
  const currentTime = useCurrentTime();
  const [customTime, setCustomTime] = useState<Date>(currentTime);

  const time = customTime || currentTime;

  const offset = getTimezoneOffset(time, 'Asia/Seoul');

  return (
    <div className='flex w-full max-w-[270px] flex-col gap-5 overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.03)] bg-white bg-opacity-[0.03] py-4 backdrop-blur-[42px]'>
      <div className='flex items-center justify-end px-4'>
        <span className='text-[9px] text-[#FF9D1D]'>{offset}H</span>
      </div>
      <TimeCylinder time={time} updateTime={setCustomTime} currentTime={currentTime} />
      <div className='flex flex-col gap-2 px-4'>
        <Separator divider={<hr className='h-[1px] w-full bg-[#353637]' />}>
          {timezones.map((timezone) => (
            <TimeDisplay key={timezone.city} {...timezone} time={time} />
          ))}
        </Separator>
      </div>
    </div>
  );
}

function TimeDisplay({
  city,
  timeZone,
  time: timeFromProps,
}: {
  city: string;
  timeZone: string;
  time: Date;
}) {
  const time = timeFromProps.toLocaleTimeString('en-US', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  // const formatter = new Intl.DateTimeFormat('en-US', {
  //   timeZone,
  //   timeZoneName: 'shortOffset',
  // });

  // const offset =
  //   formatter.formatToParts(currentTime).find((part) => part.type === 'timeZoneName')?.value || '';

  // const formattedOffset = offset.replace('GMT', '');

  const targetDate = new Date(timeFromProps.toLocaleString('en-US', { timeZone }));

  const hoursDifference = targetDate.getHours() - timeFromProps.getHours();
  const formattedDifference = hoursDifference > 0 ? `+${hoursDifference}` : hoursDifference;

  return (
    <div className='flex w-full flex-col gap-[2px]'>
      <span className='text-[9px] font-normal tracking-[-0.27px] text-[#717576]'>
        Today, {formattedDifference}H
      </span>
      <div className='flex items-center justify-between text-white'>
        <span className='text-[20px] font-medium capitalize tracking-[-0.6px]'>{city}</span>
        <span className='text-[20px] font-medium tracking-[-0.6px]'>{time}</span>
      </div>
    </div>
  );
}

const HOURS = 24;
const TEMP = 4;

const ticks = Array.from({ length: HOURS * TEMP + 1 }).map((_, i) => {
  return {
    id: i,
    time: i % TEMP === 0 ? i / TEMP : null,
    accent: i % TEMP === 0,
  };
});

const OFFSET_PIXEL = 5;
const BEFORE_GRADIENT =
  'before:bg-gradient-to-r before:from-[#1B1B1B] before:from-10% before:to-transparent before:to-100% before:w-[40px] before:absolute before:left-0 before:bottom-[-2px] before:h-[39px] before:z-10';
const AFTER_GRADIENT =
  'after:bg-gradient-to-l after:from-[#1B1B1B] after:from-10% after:to-transparent after:to-100% after:w-[40px] after:absolute after:right-0 after:bottom-[-2px] after:h-[39px] after:z-10';

function TimeCylinder({
  time,
  updateTime,
  currentTime,
}: {
  time: Date;
  updateTime: (time: Date) => void;
  currentTime: Date;
}) {
  const [scope, animate] = useAnimate();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTickRef = useRef<number | null>(null);
  const [dragConstraints, setDragConstraints] = useState<{ left: number; right: number }>({
    left: 0,
    right: 0,
  });

  useEffect(
    function initPosition() {
      if (!wrapperRef.current) return;

      const halfWidth = half(wrapperRef.current.clientWidth);

      const currentHour = time.getHours();
      const currentMinute = time.getMinutes();
      const totalMinutes = currentHour * 60 + currentMinute;

      // 전체 틱 수 계산
      const totalTicks = HOURS * TEMP;

      // 현재 시간에 해당하는 틱 인덱스 계산 (소수점 포함)
      const tickIndex = (totalMinutes / (24 * 60)) * totalTicks;

      // 스크롤 위치 계산
      const tickWidth = 1 + OFFSET_PIXEL;
      const scrollPosition = -tickIndex * tickWidth + halfWidth;

      animate(scope.current, { x: Math.round(scrollPosition) });
    },
    [animate, scope, time],
  );

  useEffect(function initBoundary() {
    if (!wrapperRef.current || !containerRef.current) return;

    const halfWidth = half(wrapperRef.current.clientWidth);
    const scrollWidth = containerRef.current.clientWidth;
    setDragConstraints({ left: -scrollWidth + halfWidth, right: halfWidth });
  }, []);

  const handleDrag = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!wrapperRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
  }, []);

  const calculateCurrentTimePosition = useCallback(() => {
    if (!containerRef.current) return 999;

    const totalMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    const tickWidth = 1 + OFFSET_PIXEL;
    const containerWidth = containerRef.current.clientWidth;

    const position = (totalMinutes / (24 * 60)) * containerWidth;

    return Math.min(position, containerWidth - tickWidth);
  }, [currentTime]);

  return (
    <div className={cn('relative flex w-full cursor-pointer', BEFORE_GRADIENT, AFTER_GRADIENT)}>
      <Motion.div
        ref={wrapperRef}
        className='flex w-full'
        whileHover={{ scale: 1.17 }}
        whileDrag={{ scale: 1.17 }}
      >
        <Motion.div
          ref={composeRefs(scope, containerRef)}
          className={`flex gap-[${OFFSET_PIXEL}px] relative`}
          drag='x'
          dragConstraints={dragConstraints}
          onDrag={handleDrag}
        >
          {ticks.map((tick) => (
            <div key={tick.id} className='relative flex items-center'>
              <span className='absolute left-0 top-[-17px] translate-x-[-50%] select-none text-[9px] font-normal tracking-[-0.27px] text-[#717576]'>
                {tick.time}
              </span>
              <Tick accent={tick.accent} />
            </div>
          ))}
          <CurrentTimePointer
            className='absolute bottom-[-8px] translate-x-[-50%]'
            style={{ left: calculateCurrentTimePosition() }}
          />
        </Motion.div>
      </Motion.div>
      <TickPointer />
    </div>
  );
}

function Tick({ accent }: { accent?: boolean }) {
  return (
    <div
      className={cn('h-[12px] w-[1px] flex-shrink-0 bg-white', {
        'h-[14px]': accent,
        'bg-opacity-30': !accent,
      })}
    />
  );
}

function TickPointer() {
  return <div className='absolute left-[50%] top-0 h-[24px] w-[1px] translate-y-[-25%] bg-[#ff9d1d]' />;
}

function CurrentTimePointer(props: SVGAttributes<SVGSVGElement>) {
  return (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' width='7' height='6' viewBox='0 0 7 6' fill='none'>
      <path
        d='M3.09852 0.540851C3.29843 0.271544 3.70157 0.271544 3.90148 0.540851L6.80474 4.45198C7.04964 4.7819 6.81415 5.25 6.40326 5.25H0.596739C0.185853 5.25 -0.0496422 4.7819 0.195262 4.45198L3.09852 0.540851Z'
        fill='#FF9D1D'
      />
    </svg>
  );
}

function half(value: number) {
  return value / 2;
}
