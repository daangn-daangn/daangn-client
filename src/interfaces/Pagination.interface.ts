export interface PageNation<T = any> {
  data: T;
  nextPage: number;
  isLast: boolean;
}
