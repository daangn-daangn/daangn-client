import styled from '@emotion/styled';

export const MapStyled = styled.div`
  width: 100%;
  height: 100%;
  #custon-overlay-button {
    background: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(33, 33, 33, 0.2);
    padding: 5px 10px;
    font-weight: 600;
    &:hover {
      background: ${(props) => props.theme.$black10};
    }
  }
`;
