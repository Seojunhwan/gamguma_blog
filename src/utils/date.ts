import { DAY, HOUR, MINUTE } from '@/constants/time';

export const getNewDate = (date: string | Date, dateFn: (date: Date) => void) => {
  const newDate = new Date(date);
  dateFn(newDate);
  return newDate;
};

export const getRelativeDate = (date: string | Date) => {
  const relativeFormat = new Intl.RelativeTimeFormat('ko', {
    numeric: 'auto',
    style: 'long',
  });

  const today = new Date();
  const targetDate = new Date(date);

  const { diffDay, diffHour, diffMinute } = getDifferenceDate(today, targetDate);

  if (diffMinute < 5) {
    return '방금 전';
  } else if (diffMinute < 60) {
    return relativeFormat.format(-diffMinute, 'minute');
  } else if (diffHour < 24) {
    return relativeFormat.format(-diffHour, 'hour');
  } else if (diffDay < 7) {
    return relativeFormat.format(-diffDay, 'day');
  }

  return targetDate.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};

export const getDifferenceDate = (date1: string | Date, date2: string | Date) => {
  const targetDate1 = new Date(date1);
  const targetDate2 = new Date(date2);

  const diff = Math.abs(targetDate1.getTime() - targetDate2.getTime());
  const diffDay = Math.floor(diff / DAY);
  const diffHour = Math.floor(diff / HOUR);
  const diffMinute = Math.floor(diff / MINUTE);

  return {
    diff,
    diffDay,
    diffHour,
    diffMinute,
  };
};

export const dateFormatter = (dateSrc: string) => {
  const date = new Date(dateSrc.replace(/-/g, '/'));
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
};

export const dateToTimeFormatter = (dateSrc: Date) => {
  return `${dateSrc.getFullYear()}-${
    dateSrc.getMonth() + 1
  }-${dateSrc.getDate()} ${dateSrc.getHours()}:${dateSrc.getMinutes()}`;
};
