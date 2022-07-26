import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query';

import Styled from './ErrorFallbackStyled';

export interface ErrorFallbackProps {
  message: string;
}

const ErrorFallback = ({ message }: ErrorFallbackProps) => {
  return (
    <Styled.Root>
      <Styled.Message>
        <Styled.ErrorTitle>Oops!</Styled.ErrorTitle>
      </Styled.Message>
      <Styled.Divider />
      <Styled.ErrorText>ERROR | {message}</Styled.ErrorText>
    </Styled.Root>
  );
};

export default ErrorFallback;
