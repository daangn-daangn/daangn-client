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

export interface MyProductBoxProps {
  type: 'sell' | 'buy' | 'like';
  stateSelects?: string[];
  moreSelects?: { content: string; function: () => void }[];
  product: Pick<IProduct, 'id' | 'thumb_nail_image' | 'title' | 'location' | 'created_at' | 'price' | 'likes'>;
}

const MyProductBox = ({ type, stateSelects, moreSelects, product }: MyProductBoxProps) => {
  const [showStateModal, setShowStateModal] = useState<boolean>(false);

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
            <More width="18" height="18" fill="#949494" onClick={() => setShowStateModal(true)} />
          ) : (
            <Like isLike={true} width="18px" height="18px" />
          )}
          <Like isLike={true} count={product.likes.length} />
        </div>
      </StyledMyProductBox>
      {type !== 'like' ? (
        <StyledSelectState>
          {stateSelects?.map((select) => (
            <div className="product_state_select" key={select}>
              {select}
            </div>
          ))}
        </StyledSelectState>
      ) : null}
      {showStateModal && <SelectModal setModal={setShowStateModal} selects={moreSelects || []} />}
    </>
  );
};

export default MyProductBox;
