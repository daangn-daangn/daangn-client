import { useState, useRef } from 'react';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import { PostButtonStyled, ModalStyled } from './PostButtonStyled';
import { ReactComponent as Close } from 'assets/close.svg';
import { ReactComponent as Plus } from 'assets/plus.svg';
import Button from '@atoms/Button/Button';
import { Link } from 'react-router-dom';

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
            <Link to="/product/new">
              <div className="Item">🔖 내 물건 팔기</div>
            </Link>
          </div>
        ) : null}
        <button onClick={(e) => setToggle(!toggle)}>{toggle ? <Close /> : <Plus />}</button>
      </PostButtonStyled>
    </>
  );
};

export default PostButton;
