interface INotiCodeCommon {
  id: number;
  created_at: Date;
  view: boolean;
}

export interface INotiCodeZero extends INotiCodeCommon {
  noti_code: 0;
  noti_type: '찜한 상품이 거래 완료된 경우';
  product_id: number;
  price: null;
  title: string;
  thumb_nail_image: string;
  reviewer_id: null;
  nickname: null;
  profile_url: null;
}

export interface INotiCodeOne extends INotiCodeCommon {
  noti_code: 1;
  noti_type: '찜한 상품의 가격이 낮아진 경우';
  product_id: number;
  price: number;
  title: string;
  thumb_nail_image: string;
  reviewer_id: null;
  nickname: null;
  profile_url: null;
}

export interface INotiCodeTwo extends INotiCodeCommon {
  noti_code: 2;
  noti_type: '판매자가 판매완료로 상태를 변경한 경우';
  product_id: number;
  price: null;
  title: string;
  thumb_nail_image: string;
  reviewer_id: null;
  nickname: null;
  profile_url: null;
}

export interface INotiCodeThree extends INotiCodeCommon {
  noti_code: 3;
  noti_type: '구매후기를 남긴 경우';
  product_id: null;
  price: null;
  title: null;
  thumb_nail_image: null;
  reviewer_id: number;
  nickname: string;
  profile_url: string;
}

export type NotificationType = INotiCodeZero | INotiCodeOne | INotiCodeTwo | INotiCodeThree;
