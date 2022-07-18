import { categoryList } from 'utils/categoryFilter';
import { IProduct } from '../../../../interfaces/Product.interface';
import Time from '../../atoms/Time/Time';
import Title from '../../atoms/Title/Title';
import { StyledDescriptionBox } from './DescriptionBoxStyled';

export interface DescriptionBoxProps {
  productDetail: Pick<
    IProduct,
    'category_id' | 'chatting_count' | 'created_at' | 'description' | 'favorite_count' | 'title' | 'view_count'
  >;
}

const DescriptionBox = ({ productDetail }: DescriptionBoxProps) => {
  return (
    <StyledDescriptionBox>
      <Title fontWeigt="700" fontSize="1.1rem">
        {productDetail.title}
      </Title>
      <div className="DescriptionBox_categoryAndTime">
        <span>{categoryList.find((category) => category.id == productDetail.category_id)?.name}</span>
        <span>&#183;</span>
        <Time time={productDetail.created_at} />
      </div>
      <p>{productDetail.description}</p>
      <div className="DescriptionBox_status">
        <span>채팅 {productDetail.chatting_count}</span>
        <span>&#183;</span>
        <span>관심 {productDetail.favorite_count}</span>
        <span>&#183;</span>
        <span>조회 {productDetail.view_count}</span>
      </div>
    </StyledDescriptionBox>
  );
};

export default DescriptionBox;
