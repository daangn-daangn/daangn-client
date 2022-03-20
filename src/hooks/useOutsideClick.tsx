import { useEffect } from 'react';

const useOutsideClick = (ref: React.MutableRefObject<HTMLDivElement>, setFocus: (value: boolean) => void) => {
  useEffect(() => {
    function handleOutsideClick(event: React.BaseSyntheticEvent | MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        setFocus(false);
      }
    }
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, [ref]);
}

export default useOutsideClick;