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
import { encodeFileToBase64 } from 'utils/encodeImage';
import { categoryList } from 'utils/categoryFilter';
import { postNewProduct } from 'apis/product/api';

const NewProductPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as INewProduct;

  const [imagesBase64, setImagesBase64] = useState<{ image: File; url: string }[]>([]);

  const { register, handleSubmit, setValue, reset, watch } = useForm<INewProduct>();

  useEffect(() => {
    if (watch('product_images')) {
      setImagesBase64([]);
      Array.from(watch('product_images')).forEach((image) => {
        encodeFileToBase64(image).then((data) =>
          setImagesBase64((prev) => [...prev, { image: image, url: data as string }]),
        );
      });
      setValue('thumb_nail_image', watch('product_images')[0]);
    }
  }, [watch('product_images')]);

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

  const deleteImage = (clickedImage: File) => {
    const dataTranster = new DataTransfer();

    Array.from(watch('product_images'))
      .filter((file) => file !== clickedImage)
      .forEach((file) => {
        dataTranster.items.add(file);
      });

    setValue('product_images', dataTranster.files);
  };

  const goCategoryPage = () => {
    navigate('category', { state: { ...watch() } });
  };

  const storeToLocalStorage = () => {
    const currentWrite = {
      title: watch('title'),
      category: watch('categoryId'),
      price: watch('price'),
      description: watch('description'),
    };
    window.localStorage.setItem('temporary_new_product', JSON.stringify(currentWrite));
    // navigate('/product'); 홈으로 가는 코드
    navigate('/');
  };

  const onSubmit = (data: INewProduct) => {
    console.log(data);
    postNewProduct(data)
      .then((res) => {
        // 성공시 홈으로?
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        //에러시
      });
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
            register={{ ...register('product_images') }}
            setPickedPhotos={(value) => setValue('product_images', value)}
            buttonNode={
              <div className="input-photo-div_button">
                <Camera />
                <div>
                  <span style={{ color: imagesBase64.length > 0 ? '#EE8548' : '' }}>{imagesBase64.length}</span>/10
                </div>
              </div>
            }
          />
          {imagesBase64.map((base64, index) => (
            <div className="input-photo-div_image" key={index}>
              {index === 0 ? <div className="input-photo-div_image_thumbnail">대표 사진</div> : null}
              <div className="input-photo-div_image_close" onClick={() => deleteImage(base64.image)}>
                <Close />
              </div>
              <Image imgUrl={base64.url} height="70px" width="70px" />
            </div>
          ))}
        </div>
        <div className="borer-bottom-gray">
          <TextArea register={{ ...register('title') }} placeholder="글 제목" />
        </div>
        <div className="borer-bottom-gray">
          <div className="input-categoty-div" onClick={() => goCategoryPage()}>
            <p>{categoryList.find((category) => category.id === state?.categoryId)?.name || '카테고리 선택'}</p>
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
