import Button from '@atoms/Button/Button';
import Label from '@atoms/Label/Label';
import Message from '@atoms/Message/Message';
import TextArea from '@atoms/TextArea/TextArea';
import Title from '@atoms/Title/Title';
import Top from '@molecules/Top/Top';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ReviewGivePageStyled } from './ReviewGivePageStyled';

interface IForm {
  content: string;
}

const ReviewGivePage = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log(data);
  };
  return (
    <ReviewGivePageStyled>
      <Top title="후기 남기기" left="prev" leftClick={() => navigate(-1)} />
      <div className="review-page-top">
        <Title fontWeigt="700" fontSize="22px">
          따뜻한 거래경험을 알려주세요!
        </Title>
        <span className="subtitle">남겨주신 거래후기는 상대방의 프로필에 공개돼요.</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextArea
          register={{
            ...register('content', {
              required: '후기를 남겨주세요!',
            }),
          }}
          placeholder="여기에 적어주세요"
          placeholder_color="#ffffff"
        />
        <Message message={errors?.content?.message} />
        <Button type="submit" height="50px" width="100%">
          후기 남기기
        </Button>
      </form>
    </ReviewGivePageStyled>
  );
};

export default ReviewGivePage;
