import styled from '@emotion/styled';

const ApplayoutStyled = styled.div`
  margin: 60px 0;
  padding: 0 20px;
`;

const Applayout: React.FC = ({ children }) => {
  return <ApplayoutStyled>{children}</ApplayoutStyled>;
};

export default Applayout;
