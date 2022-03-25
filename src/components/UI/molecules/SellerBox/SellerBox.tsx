import Image from '../../atoms/Image/Image';
import Temperature from '../../atoms/Temperature/Temperature';
import { SellerBoxStyled } from './SellerBoxStyled';
import { ISeller } from '../../organisms/DetailBox/DetailBox';

export interface SellerBoxProps {
  sellerDetail: Pick<ISeller, 'name' | 'profileUrl' | 'location' | 'manner'>;
}

const SellerBox = ({ sellerDetail }: SellerBoxProps) => {
  return (
    <>
      <SellerBoxStyled {...sellerDetail}>
        <Image imgUrl={sellerDetail.profileUrl} width="40px" height="40px" borderRedius="50%" />
        <div className="seller-inform">
          <p className="seller-inform_name">{sellerDetail.name}</p>
          <p className="seller-inform_location">{sellerDetail.location}</p>
        </div>
        <div className="seller-temperature">
          <Temperature type="product" degree={sellerDetail.manner} />
        </div>
      </SellerBoxStyled>
    </>
  );
};
export default SellerBox;
