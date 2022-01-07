export const dateFormatter = (dateSrc: string) => {
  const date = new Date(dateSrc);
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDay()}일`;
};
