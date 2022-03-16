import { StyledImage } from './ImageSyled';

export interface ImageProps {
  imgUrl: string;
  width?: string;
  height?: string;
  borderRedius?: string;
}

const Image = (props: ImageProps) => {
  return (
    <>
      <StyledImage {...props}></StyledImage>
    </>
  );
};

export default Image;
