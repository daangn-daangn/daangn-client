import { putNotificationRead, PutNotificationReadParams } from 'apis/notification/api';
import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

const useNotificationRead = (option?: UseMutationOptions<AxiosResponse<unknown>, Error, PutNotificationReadParams>) => {
  return useMutation(putNotificationRead, option);
};

export default useNotificationRead;
