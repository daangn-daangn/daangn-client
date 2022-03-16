import styled from '@emotion/styled';
import { TitleProps } from './Title';

export const StyledTitle = styled.h3<TitleProps>`
  color: ${(props) => props.theme.$black};
  font-weight: ${(props) => `${props.fontWeigt}` || '700'};
  font-size: ${(props) => `${props.fontSize}rem` || '1rem'};
`;
