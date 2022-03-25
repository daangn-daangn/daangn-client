import { Meta, Story } from "@storybook/react";
import ProductDetail, { ProductDetailProps } from "./ProductDetail";

export default {
  title: 'Templates/ProductDetail',
  component: ProductDetail,
} as Meta;

const Template: Story<ProductDetailProps> = (args) => (
  <>
    <ProductDetail {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  slideImages: ["https://play-lh.googleusercontent.com/6Adeoocj4FktXRmkcFY8j6sknDBK_eoCjsMv6EPJI_ZLhLUeAmZH_r5QxKBBa8xoxgni", "https://img.pixers.pics/pho(s3:700/PI/23/28/700_PI2328_929d479296b1a4e351ad083979e06dca_5b7aba17b76ce_.,700,700,jpg)/shower-curtains-hello-kitty.jpg.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3he9XCrjKds0D-MuWkEmH9NEk3NjxMBqZTOgXwSBT4DZu2RX6-T-ZNFfEXtnIHnMuuCQ&usqp=CAU"],
  sellerDetail: {
    name: "유키링",
    profileUrl: "https://img1.cgtrader.com/items/3095532/6fb947cfc0/large/hello-kitty-sanrio-3d-model-low-poly-obj-ztl.jpg",
    location: "하라주쿠",
    manner: 38.6,
  },
  productDetail: {
    title: '아이폰 삽니다',
    category: '디지털기기',
    description: '원가 18,900갤럭시로 갈아타면서 판매해요~ 한번도 사용안한 새상품입니다',
    created_at: new Date(),
    view: 256,
    favorite: 21,
    chat: 4,
  },
  isLike: true,
  productPrice: 6000,
};