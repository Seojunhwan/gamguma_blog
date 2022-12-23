export const dateFormatter = (dateSrc: string) => {
  const date = new Date(dateSrc.replace(/-/g, '/'));
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
};

export const dateToTimeFormatter = (dateSrc: Date) => {
  return `${dateSrc.getFullYear()}-${
    dateSrc.getMonth() + 1
  }-${dateSrc.getDate()} ${dateSrc.getHours()}:${dateSrc.getMinutes()}`;
};

export const throttle = (callback: Function, delay: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return () => {
    if (timer) return;
    timer = setTimeout(() => {
      callback();
      timer = null;
    }, delay);
  };
};

export const cls = (...classnames: string[]) => {
  return classnames.join(' ');
};
