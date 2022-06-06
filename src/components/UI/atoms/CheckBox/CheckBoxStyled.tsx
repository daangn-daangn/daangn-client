import styled from '@emotion/styled';

interface CheckBoxStyledProps {
  ischecked: boolean;
}

export const CheckBoxStyled = styled.div<CheckBoxStyledProps>`
  display: flex;
  align-items: center;
  & > .checkBox_Wrapper {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.ischecked && props.theme.mainColor};
    margin-right: 7px;
    border: ${(props) => !props.ischecked && '1.5px solid #c4c2c2'};
    path {
      stroke: ${(props) => !props.ischecked && '#c4c2c2'};
    }
  }
  & > span {
    flex: 1;
    color: ${(props) => props.theme.$black90};
    font-weight: 500;
  }
`;
