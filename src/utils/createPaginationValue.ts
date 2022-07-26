export const createPaginationValue = <T = any>({
  data,
  page,
  offset = 20,
}: {
  data: T[];
  page: number;
  offset?: number;
}) => {
  return { data, nextPage: page + 1, isLast: data.length < offset };
};
