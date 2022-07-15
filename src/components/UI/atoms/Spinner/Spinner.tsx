import { SpinnerStyled } from './SpinnerStyled';

const Spinner = () => {
  return (
    <>
      <SpinnerStyled>
        <div className="loader">Loading...</div>
      </SpinnerStyled>
    </>
  );
};

export default Spinner;
