import styled from '@emotion/styled';

export const StyledDealBox = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid ${(props) => props.theme.$black10};
  padding: 15px 20px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  gap: 15px;
  .line {
    width: 1px;
    height: 30px;
    background-color: ${(props) => props.theme.$black30};
  }
  .dealBox_priceWrapper {
    flex: 1;
  }
`;
