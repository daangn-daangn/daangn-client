import { useState, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { INewProduct } from 'interfaces/Product.interface';
import { NewProductPageStyled } from './NewProductPageStyled';
import Top from '@molecules/Top/Top';
import InputPhoto from '@molecules/InputPhoto/InputPhoto';
import Input from '@atoms/Input/Input';
import TextArea from '@atoms/TextArea/TextArea';
import Image from '@atoms/Image/Image';
import Button from '@atoms/Button/Button';
import { ReactComponent as Camera } from 'assets/camera.svg';
import { ReactComponent as Close } from 'assets/close.svg';
import { ReactComponent as Next } from 'assets/next.svg';

const NewProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as INewProduct;

  const [imagesBase64, setImagesBase64] = useState<any[]>([]);

  const { register, handleSubmit, setValue, reset, watch } = useForm<INewProduct>();

  const encodeFileToBase64 = (image: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (event: any) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  useEffect(() => {
    if (watch('images')) {
      setImagesBase64([]);
      Array.from(watch('images')).forEach((image) => {
        encodeFileToBase64(image).then((data) => setImagesBase64((prev) => [...prev, data]));
      });
      setValue('thumb_nail_image', watch('images')[0]);
    }
  }, [watch('images')]);

  useEffect(() => {
    /*
    state로 넘어온 값 있으면 해당 값으로 reset
    근데 state로 넘어온 값 없으면 로컬스토리지 확인해서 로컬스토리지에 쓰다만거 있으면 해당 값으로 reset
    */
    if (state) {
      reset({ ...state });
    } else if (window.localStorage.getItem('temporary_new_product')) {
      reset(JSON.parse(window.localStorage.getItem('temporary_new_product') || ''));
    }
  }, [state]);

  const deleteImage = (clickedImage: string) => {
    setImagesBase64(imagesBase64.filter((image) => image !== clickedImage));
  };

  const goCategoryPage = () => {
    navigate('category', { state: { ...watch() } });
  };

  const storeToLocalStorage = () => {
    const currentWrite = {
      title: watch('title'),
      category: watch('category'),
      price: watch('price'),
      description: watch('description'),
    };
    window.localStorage.setItem('temporary_new_product', JSON.stringify(currentWrite));
    // navigate('/product'); 홈으로 가는 코드
  };

  const onSubmit = (data: INewProduct) => {
    console.log(data);
  };

  return (
    <NewProductPageStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Top
          title="중고거래 글쓰기"
          left="close"
          leftClick={storeToLocalStorage}
          right={
            <Button
              background="white"
              hoverBackground="white"
              fontColor="#EE8548"
              fontWeight="500"
              fontSize="15px"
              padding="0px"
              type="submit"
            >
              완료
            </Button>
          }
        />
        <div className="input-photo-div borer-bottom-gray">
          <InputPhoto
            register={{ ...register('images') }}
            setPickedPhotos={(value) => setValue('images', value)}
            buttonNode={
              <div className="input-photo-div_button">
                <Camera />
                <div>
                  <span style={{ color: imagesBase64.length > 0 ? '#EE8548' : '' }}>{imagesBase64.length}</span>/10
                </div>
              </div>
            }
          />
          {imagesBase64.map((image, index) => (
            <div className="input-photo-div_image" key={index}>
              {index === 0 ? <div className="input-photo-div_image_thumbnail">대표 사진</div> : null}
              <div className="input-photo-div_image_close" onClick={() => deleteImage(image)}>
                <Close />
              </div>
              <Image imgUrl={image} height="70px" width="70px" />
            </div>
          ))}
        </div>
        <div className="borer-bottom-gray">
          <TextArea register={{ ...register('title') }} placeholder="글 제목" />
        </div>
        <div className="borer-bottom-gray">
          <div className="input-categoty-div" onClick={() => goCategoryPage()}>
            <p>{state?.category || '카테고리 선택'}</p>
            <Next width="10" />
          </div>
        </div>
        <div className="borer-bottom-gray">
          <Input
            register={{
              ...register('price', {
                onChange: (e) => {
                  console.log(e.target.value);
                  setValue('price', e.target.value.replace(/[^0-9]|(,)/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','));
                },
              }),
            }}
            placeholder="₩ 가격"
            border="none"
            autoComplete="off"
          />
        </div>
        <div className="input-description-div borer-bottom-gray">
          <TextArea
            register={{ ...register('description') }}
            placeholder="고잔동에 올릴 게시글 내용을 작성해주세요. (가품 및 판매금지품목은 게시가 제한될 수 있어요.)"
          />
        </div>
      </form>
    </NewProductPageStyled>
  );
};

export default NewProductPage;
