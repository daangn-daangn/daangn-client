import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const ApplayoutStyled = styled.div`
  padding: 0 20px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Applayout: React.FC = () => {
  return (
    <ApplayoutStyled>
      <Outlet />
    </ApplayoutStyled>
  );
};

export default Applayout;
