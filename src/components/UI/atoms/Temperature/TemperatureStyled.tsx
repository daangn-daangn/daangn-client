import styled from '@emotion/styled';
import { TemperatureProps } from './Temperature';

export const TemperatureStyled = styled.div<TemperatureProps>`
  color: ${(props) => props.color};
  font-weight: 600;
  width: ${(props) => (props.type === 'product' ? '85px' : '100%')};
  display: inline-flex;
  flex-direction: column;
  svg {
    stroke: ${(props) => props.color};
    fill: ${(props) => props.color};
  }
  progress {
    appearance: none;
    width: auto;
  }
  progress::-webkit-progress-bar {
    background: ${(props) => props.theme.$black10};
    border-radius: 10px;
    width: ${(props) => (props.type === 'product' ? '50px' : '100%')};
    height: 8px;
    margin-top: 3px;
  }
  progress::-webkit-progress-value {
    border-radius: 10px;
    background: ${(props) => props.color};
  }
  .flex-div {
    display: flex;
    gap: 5px;
    justify-content: flex-end;
    align-items: center;
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
  .first-temperature {
    width: 66px;
    position: absolute;
    left: calc((100% * 0.365) - 33px);
    margin-bottom: -10px;
    .mark {
      color: ${(props) => props.theme.$black60};
      font-size: 0.2rem;
      font-weight: 500;
      text-align: center;
      line-height: 125%;
    }
  }
  .chat-degree-div {
    border: 1.55px solid ${(props) => props.color};
    border-radius: 20px;
    padding: 3px 6px;
    display: inline-block;
    text-align: center;
    width: 51px;
    font-size: 0.68rem;
  }
`;
