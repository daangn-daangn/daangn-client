import { useState } from 'react';
import { StyledMyProductBox, StyledSelectState } from './MyProductBoxStyled';
import { IProduct } from 'interfaces/Product.interface';
import Image from '@atoms/Image/Image';
import Title from '@atoms/Title/Title';
import Time from '@atoms/Time/Time';
import Price from '@atoms/Price/Price';
import Like from '@atoms/Like/Like';
import { ReactComponent as More } from 'assets/more.svg';
import SelectModal from '@molecules/SelectModal/SelectModal';
import { useSetRecoilState } from 'recoil';
import { selectProductIdState } from 'stores/Profile';

export interface ISelectWithProductId {
  content: string;
  function: (productId: number) => void;
}

export interface ISelectNoParameter {
  content: string;
  function: () => void;
}

export interface MyProductBoxProps {
  type: 'sell' | 'buy' | 'like';
  stateSelects?: ISelectWithProductId[];
  moreSelects?: ISelectNoParameter[];
  product: Pick<IProduct, 'id' | 'thumb_nail_image' | 'title' | 'location' | 'created_at' | 'price' | 'favorite_count'>;
}

const MyProductBox = ({ type, stateSelects, moreSelects, product }: MyProductBoxProps) => {
  const [showStateModal, setShowStateModal] = useState<boolean>(false);
  const setSelectProductId = useSetRecoilState(selectProductIdState);
  const onClickMoreButton = () => {
    setShowStateModal(true);
    setSelectProductId(product.id);
  };
  return (
    <>
      <StyledMyProductBox {...{ type, product }}>
        <Image imgUrl={product.thumb_nail_image} />
        <div className="product_info">
          <Title>{product.title}</Title>
          <div className="product_info__detail">
            <span className="product_info__detail-location">{product.location} &#183;</span>
            <Time time={product.created_at} />
          </div>
          <Price productPrice={product.price} />
        </div>
        <div className="product_state">
          {type !== 'like' ? (
            <More width="18" height="18" fill="#808080" onClick={onClickMoreButton} />
          ) : (
            <Like isFavorite={true} width="18px" height="18px" />
          )}
          <Like isFavorite={true} count={product.favorite_count} />
        </div>
      </StyledMyProductBox>
      {type !== 'like' ? (
        <StyledSelectState>
          {stateSelects?.map((select) => (
            <div className="product_state_select" key={select.content} onClick={() => select.function(product.id)}>
              {select.content}
            </div>
          ))}
        </StyledSelectState>
      ) : null}
      {showStateModal && <SelectModal setModal={setShowStateModal} selects={moreSelects || []} />}
    </>
  );
};

export default MyProductBox;
