import { StyledTitle } from './TitleStyled';

export interface TitleProps {
  fontSize?: string;
  fontWeigt?: string;
}

const Title: React.FC<TitleProps> = ({ children, fontSize, fontWeigt }) => {
  return (
    <>
      <StyledTitle fontSize={fontSize} fontWeigt={fontWeigt}>
        {children}
      </StyledTitle>
    </>
  );
};

export default Title;
