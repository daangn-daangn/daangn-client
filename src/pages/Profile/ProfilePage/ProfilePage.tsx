import { useNavigate, useParams } from 'react-router-dom';
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
import TabBar from '@organisms/TabBar/TabBar';
import ReviewBox from '@molecules/ReviewBox/ReviewBox';
import List from '@atoms/List/List';
import useMe from 'hooks/queries/user/useMe';
import Spinner from '@atoms/Spinner/Spinner';
import useReviewsLoad from 'hooks/queries/review/useReviewsLoad';
import useUserInfo from 'hooks/queries/user/useUserInfo';
import ErrorBoundary from 'components/ErrorBoundary';
import ErrorFallback from '@molecules/ErrorFallback/ErrorFallback';
import { ERROR_MSG } from 'constants/message';

const ProfilePage = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const { data: me } = useMe();
  const { data: user } = useUserInfo({ userId: Number(userId) });
  if (!user) {
    return <Spinner />;
  }
  return (
    <>
      <ProfilePageStyled>
        <NavBar type={me?.id === user.id ? '나의 당근' : '프로필'} />
        <div className="profile-box">
          <div className="profile-box_image_name">
            <Image imgUrl={user.profile_url} borderRedius="50%" width="70px" height="70px" />
            <Title fontWeigt="700" fontSize="0.95rem">
              {user.nickname}
            </Title>
          </div>
          {me?.id === user.id && (
            <Button
              width="100%"
              fontSize="0.9rem"
              background="white"
              hoverBackground="#f5f5f5"
              fontColor="black"
              border="1px solid #e0dfde"
              onClick={() => {
                navigate('edit', { state: { ...me } });
              }}
            >
              프로필 수정
            </Button>
          )}
          <div className="profile-box_manner">
            <p>매너온도</p>
            <Temperature degree={user.manner} type="user" />
          </div>
          {me?.id === user.id && (
            <div className="profile-box_user_history">
              <div className="history-item" onClick={() => navigate('/profile/sell')}>
                <div className="history-item_icon-wrap">
                  <Receipt />
                </div>
                <p>판매내역</p>
              </div>
              <div className="history-item" onClick={() => navigate('/profile/buy')}>
                <div className="history-item_icon-wrap">
                  <Bag />
                </div>
                <p>구매내역</p>
              </div>
              <div className="history-item" onClick={() => navigate('/profile/like')}>
                <div className="history-item_icon-wrap">
                  <Heart />
                </div>
                <p>관심목록</p>
              </div>
            </div>
          )}
        </div>
        <div className="user-activity">
          {user.location} 1회 인증, 경기도 부천시 원미구 미인증 (최근 30일)
          <br />
          최근 3일 이내 활동 (2020년 11월 20일 가입)
        </div>
        {me?.id === user.id && (
          <List fontWeight="700">
            <div className="justify-space-between" onClick={() => navigate('/profile/sell')}>
              판매상품 <Next className="next-svg" />
            </div>
          </List>
        )}
        <List fontWeight="700">
          <div className="justify-space-between" onClick={() => navigate('manner')}>
            받은 매너 평가 <Next className="next-svg" />
          </div>
        </List>
        <List fontWeight="700">
          <div className="justify-space-between" onClick={() => navigate('review')}>
            받은 거래 후기 <Next className="next-svg" />
          </div>
          <ErrorBoundary fallback={<ErrorFallback message={ERROR_MSG.LOAD_REVIEW_ALL} />}>
            <ReviewContainer userId={Number(userId)} />
          </ErrorBoundary>
        </List>
        <TabBar />
      </ProfilePageStyled>
    </>
  );
};

const ReviewContainer = ({ userId }: { userId: number }) => {
  const { data, isFetchingNextPage, ref } = useReviewsLoad({
    userId,
    refetchOnWindowFocus: false,
  });
  return (
    <>
      {data?.pages.map((page, index) => (
        <div key={index} className="reviews-wrap">
          {page.data.map((review) => (
            <ReviewBox key={review.id} review={review} />
          ))}
        </div>
      ))}
      {isFetchingNextPage ? '로딩중..' : <div ref={ref}></div>}
    </>
  );
};

export default ProfilePage;
