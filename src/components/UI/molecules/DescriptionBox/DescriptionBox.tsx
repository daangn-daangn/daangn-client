import { IProduct } from '../../../../interfaces/Product.interface';
import Time from '../../atoms/Time/Time';
import Title from '../../atoms/Title/Title';
import { StyledDescriptionBox } from './DescriptionBoxStyled';

export interface DescriptionBoxProps {
  productDetail: Pick<IProduct, 'category' | 'chat' | 'created_at' | 'description' | 'favorite' | 'title' | 'view'>;
}

const DescriptionBox = ({ productDetail }: DescriptionBoxProps) => {
  return (
    <StyledDescriptionBox>
      <Title fontWeigt="700" fontSize="1.1rem">
        {productDetail.title}
      </Title>
      <div className="DescriptionBox_categoryAndTime">
        <span>{productDetail.category}</span>
        <span>&#183;</span>
        <Time time={productDetail.created_at} />
      </div>
      <p>{productDetail.description}</p>
      <div className="DescriptionBox_status">
        <span>채팅 {productDetail.chat}</span>
        <span>&#183;</span>
        <span>관심 {productDetail.favorite}</span>
        <span>&#183;</span>
        <span>조회 {productDetail.view}</span>
      </div>
    </StyledDescriptionBox>
  );
};

export default DescriptionBox;
