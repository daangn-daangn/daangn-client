import styled from "@emotion/styled";
import { TemperatureProps } from "./Temperature";

export const TemperatureStyled = styled.div<TemperatureProps>`
  color: ${(props) => props.color};
  font-weight: 600;
  width: 80px;
  svg {
    stroke: ${(props) => props.color};
    fill: ${(props) => props.color};
  }
  progress { 
    appearance: none; 
  }
  progress::-webkit-progress-bar { 
    background: ${(props) => props.theme.$black20};
    border-radius: 10px;
    width: 50px;
    height: 4px;
    margin-top: 3px;
  } 
  progress::-webkit-progress-value { 
    border-radius: 10px;
    background: ${(props) => props.color};
  }
  .flex-div {
    display: flex;
  }
  .degree-div {
    display: inline;
    text-align: center;
    width: 50px;
    margin-right: 5px;
  }
  .manner-temperature {
    color: ${(props) => props.theme.$black50};
    font-size: 0.01rem;
    font-weight: 300;
    text-decoration: underline;
    text-align: right;
    cursor: pointer;
  }
`;