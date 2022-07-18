import Image from '@atoms/Image/Image';
import Temperature from '@atoms/Temperature/Temperature';
import { SellerBoxStyled } from './SellerBoxStyled';
import { IUser } from 'interfaces/User.interface';
import useUserInfo from 'hooks/queries/user/useUserInfo';
import Spinner from '@atoms/Spinner/Spinner';

export interface SellerBoxProps {
  // sellerDetail: Pick<IUser, 'nickname' | 'profile_url' | 'location' | 'manner'>;
  sellerId: number;
}

const SellerBox = ({ sellerId }: SellerBoxProps) => {
  const { data } = useUserInfo({ userId: sellerId, refetchOnWindowFocus: false });
  if (!data) {
    return <Spinner />;
  }
  // const
  return (
    <>
      <SellerBoxStyled>
        <Image imgUrl={data.profile_url} width="40px" height="40px" borderRedius="50%" />
        <div className="seller-inform">
          <p className="seller-inform_name">{data.nickname}</p>
          <p className="seller-inform_location">{data.location}</p>
        </div>
        <div className="seller-temperature">
          <Temperature type="product" degree={data.manner} />
        </div>
      </SellerBoxStyled>
    </>
  );
};
export default SellerBox;
