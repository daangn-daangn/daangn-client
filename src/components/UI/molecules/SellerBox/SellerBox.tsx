import Image from '../../atoms/Image/Image';
import Temperature from '../../atoms/Temperature/Temperature';
import { SellerBoxStyled } from './SellerBoxStyled';

export interface SellerBoxProps {
  sellerName: string;
  sellerImgUrl: string;
  location: string;
}

const SellerBox = (props: SellerBoxProps) => {
  return (
    <>
      <SellerBoxStyled {...props} >
        <Image
          imgUrl={props.sellerImgUrl}
          width="40px"
          height="40px"
          borderRedius="50%"
        />
        <div className="seller-inform">
          <p className="seller-inform_name">{props.sellerName}</p>
          <p className="seller-inform_location">{props.location}</p>
        </div>
        <div className="seller-temperature">
          <Temperature degree={38.6} />
        </div>
      </SellerBoxStyled>
    </>
  );
};
export default SellerBox;