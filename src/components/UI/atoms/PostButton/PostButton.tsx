import { useState, useRef } from 'react';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import { PostButtonStyled, ModalStyled } from './PostButtonStyled';

export interface PostButtonProps {
  toggle?: boolean;
}

const PostButton = (props: PostButtonProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const ModalOut = useRef() as React.MutableRefObject<HTMLDivElement>;
  useOutsideClick(ModalOut, setToggle);

  return (
    <>
      {toggle ? <ModalStyled /> : null}
      <PostButtonStyled toggle={toggle} ref={ModalOut}>
        {toggle ? (
          <div className="modal-box">
            <div className="Item">🔖 내 물건 팔기</div>
          </div>
        ) : null}
        <button onClick={(e) => setToggle(!toggle)}>{toggle ? 'x' : '+'}</button>
      </PostButtonStyled>
    </>
  );
};

export default PostButton;
