import { useNavigate } from 'react-router-dom';
import { ProfilePageStyled } from './ProfilePageStyled';
import NavBar from '@organisms/NavBar/NavBar';
import Temperature from '@atoms/Temperature/Temperature';
import Image from '@atoms/Image/Image';
import Title from '@atoms/Title/Title';
import Button from '@atoms/Button/Button';
import { ReactComponent as Next } from 'assets/next.svg';
import { ReactComponent as Receipt } from 'assets/receipt.svg';
import { ReactComponent as Bag } from 'assets/bag.svg';
import { ReactComponent as Heart } from 'assets/heart.svg';
import { IUser } from 'interfaces/User.interface';
import TabBar from '@organisms/TabBar/TabBar';
import ReviewBox, { dummyReview } from '@molecules/ReviewBox/ReviewBox';

const dummyUser: IUser = {
  id: 1,
  nickname: '유키링',
  profileUrl:
    'https://img1.cgtrader.com/items/3095532/6fb947cfc0/large/hello-kitty-sanrio-3d-model-low-poly-obj-ztl.jpg',
  location: '서울 강남',
  manner: 38.6,
};

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <ProfilePageStyled>
        <NavBar type="나의 당근" />
        <div className="profile-box">
          <div className="profile-box_image_name">
            <Image imgUrl={dummyUser.profileUrl} borderRedius="50%" width="70px" height="70px" />
            <Title fontWeigt="700" fontSize="0.95rem">
              {dummyUser.nickname}
            </Title>
          </div>
          <Button
            width="100%"
            fontSize="0.9rem"
            background="white"
            hoverBackground="#f5f5f5"
            fontColor="black"
            border="1px solid #e0dfde"
            onClick={() => {
              navigate('edit', { state: { ...dummyUser } });
            }}
          >
            프로필 수정
          </Button>
          <div className="profile-box_manner">
            <p>매너온도</p>
            <Temperature degree={dummyUser.manner} type="user" />
          </div>
          <div className="profile-box_user_history">
            <div className="history-item" onClick={() => navigate('sell')}>
              <div className="history-item_icon-wrap">
                <Receipt />
              </div>
              <p>판매내역</p>
            </div>
            <div className="history-item" onClick={() => navigate('buy')}>
              <div className="history-item_icon-wrap">
                <Bag />
              </div>
              <p>구매내역</p>
            </div>
            <div className="history-item" onClick={() => navigate('like')}>
              <div className="history-item_icon-wrap">
                <Heart />
              </div>
              <p>관심목록</p>
            </div>
          </div>
        </div>
        <div className="user-activity">
          {dummyUser.location} 1회 인증, 경기도 부천시 원미구 미인증 (최근 30일)
          <br />
          최근 3일 이내 활동 (2020년 11월 20일 가입)
        </div>
        <div className="user-item justify-space-between" onClick={() => navigate('sell')}>
          판매상품 <Next className="next-svg" />
        </div>
        <div className="user-item justify-space-between">
          받은 매너 평가 <Next className="next-svg" />
        </div>
        <div className="user-item">
          <div className="justify-space-between" onClick={() => navigate('review')}>
            받은 거래 후기 <Next className="next-svg" />
          </div>
          <div className="reviews-wrap">
            <ReviewBox review={dummyReview} />
            <ReviewBox review={dummyReview} />
          </div>
        </div>
        <TabBar />
      </ProfilePageStyled>
    </>
  );
};
export default ProfilePage;