import { useRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { InputPhotoStyled } from './InputPhotoStyled';

export interface InputPhotoProps {
  register?: UseFormRegisterReturn;
  buttonNode?: React.ReactNode;
  setPickedPhotos?: (value: FileList) => void;
}

const InputPhoto = (props: InputPhotoProps) => {
  const InputFileRef = useRef<HTMLInputElement>(null);

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && props.setPickedPhotos) {
      props.setPickedPhotos(e.target.files);
    }
  };

  const clickInputPicture = () => {
    InputFileRef.current?.click();
  };

  return (
    <>
      <InputPhotoStyled>
        <input
          {...props.register}
          ref={InputFileRef}
          id="hidden-input-file"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileSelected}
        />
        <div onClick={clickInputPicture}>{props.buttonNode}</div>
      </InputPhotoStyled>
    </>
  );
};

export default InputPhoto;
