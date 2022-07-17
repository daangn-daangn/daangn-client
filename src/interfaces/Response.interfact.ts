export interface ResposeSuccessType<T> {
  error: null;
  success: true;
  response: T;
}

export interface ResposeErrorType {
  error: any;
  success: false;
  response: null;
}
