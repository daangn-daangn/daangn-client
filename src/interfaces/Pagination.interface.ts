export interface PagiNation<T = any> {
  data: T;
  nextPage: number;
  isLast: boolean;
}

export interface PagiNationParams {
  page?: number;
}
