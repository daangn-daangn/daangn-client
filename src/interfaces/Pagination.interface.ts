export interface PageNation<T> {
  data: T;
  nextPage: number;
  isLast: boolean;
}
