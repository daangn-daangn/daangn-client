import { StyledImage } from './ImageStyled';

export interface ImageProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  imgUrl: string;
  width?: string;
  height?: string;
  borderRedius?: string;
  innerContent?: string;
}

const Image = (props: ImageProps) => {
  return (
    <>
      <StyledImage {...props}>{props.innerContent}</StyledImage>
    </>
  );
};

export default Image;
