import { useNavigate, useLocation } from 'react-router-dom';
import { SellHistoryPageStyled } from './SellHistoryPageStyled';
import Top from '@molecules/Top/Top';
import MyProductBox from '@molecules/MyProductBox/MyProductBox';
import { dummyProduct } from 'pages/ProductDetailPage/ProductDetailPage';
import NavStateBar from '@molecules/NavStateBar/NavStateBar';

const MyProductBoxSelects = {
  판매중: {
    stateSelects: ['끌어올리기', '예약중', '거래완료'],
    moreSelects: [
      { content: '게시물 수정', function: () => console.log('게시물 수정') },
      { content: '숨기기', function: () => console.log('숨기기') },
      { content: '삭제', function: () => console.log('삭제') },
    ],
  },
  거래완료: {
    stateSelects: ['후기 보내기'],
    moreSelects: [
      { content: '판매중', function: () => console.log('판매중') },
      { content: '게시글 수정', function: () => console.log('게시물 수정') },
      { content: '숨기기', function: () => console.log('숨기기') },
      { content: '삭제', function: () => console.log('삭제') },
    ],
  },
  숨김: {
    stateSelects: ['숨기기 해제'],
    moreSelects: [
      { content: '게시글 수정', function: () => console.log('게시물 수정') },
      { content: '삭제', function: () => console.log('삭제') },
    ],
  },
};

const SellHistoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { ProductState: string };

  const navStates = [
    { menu: '판매중', onClick: () => navigate('', { state: { ProductState: '판매중' } }) },
    { menu: '거래완료', onClick: () => navigate('', { state: { ProductState: '거래완료' } }) },
    { menu: '숨김', onClick: () => navigate('', { state: { ProductState: '숨김' } }) },
  ];

  return (
    <>
      <SellHistoryPageStyled>
        <div className="sell-history-page-top">
          <Top title="판매내역" left="prev" leftClick={() => navigate('/profile')} />
          <NavStateBar states={navStates} />
        </div>
        {/* 게시글 없는 경우 나중에 추가 */}
        <MyProductBox
          type="sell"
          product={dummyProduct}
          stateSelects={
            MyProductBoxSelects[(state?.ProductState as keyof typeof MyProductBoxSelects) || '판매중'].stateSelects
          }
          moreSelects={
            MyProductBoxSelects[(state?.ProductState as keyof typeof MyProductBoxSelects) || '판매중'].moreSelects
          }
        />
      </SellHistoryPageStyled>
    </>
  );
};
export default SellHistoryPage;
