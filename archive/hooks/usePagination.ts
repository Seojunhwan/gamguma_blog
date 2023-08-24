export const usePagination = (currentPage: number, paginationLength: number) => {
  const pages = Array.from({ length: paginationLength }, (_, i) => i + 1);

  // const slicedPages = pages.slice(
  //   Math.max(0, currentPage - OFFSET / 2),
  //   Math.min(paginationLength, currentPage + OFFSET / 2),
  // );

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === paginationLength;
  const previousPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return {
    pages,
    isFirstPage,
    isLastPage,
    previousPage,
    nextPage,
  };
};
