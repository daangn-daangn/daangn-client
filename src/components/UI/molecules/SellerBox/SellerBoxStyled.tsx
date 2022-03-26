import styled from "@emotion/styled";
import { SellerBoxProps } from "./SellerBox";

export const SellerBoxStyled = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0px;
  overflow-x: hidden;
  border-bottom: 1px solid ${(props) => props.theme.$black20};
  .seller-inform {
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .seller-inform_name {
      color: ${(props) => props.theme.$black};
      font-weight: 700;
      font-size: 1rem;
    }
    .seller-inform_location {
      color: ${(props) => props.theme.$black80};
      font-weight: 300;
      font-size: 0.7rem;
    }
  }
  .seller-temperature {
    margin-left: auto;
  }
`;