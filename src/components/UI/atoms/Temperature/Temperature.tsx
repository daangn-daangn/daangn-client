import { ReactComponent as Smile } from 'assets/smile.svg';
import { TemperatureStyled } from './TemperatureStyled';

type TemperatureType = 'product' | 'user' | 'chat';

export interface TemperatureProps {
  type?: TemperatureType;
  degree: number;
  color?: string;
}

const Temperature = (props: TemperatureProps) => {
  return (
    <>
      <TemperatureStyled
        type={props.type}
        degree={props.degree}
        color={props.degree <= 37 ? '#2F68B8' : props.degree <= 50 ? '#71AE6F' : '#D18E26'}
      >
        {props.type === 'product' ? (
          <>
            <div className="flex-div">
              <div className="degree-div">
                <div>{props.degree}°C</div>
                <progress value={props.degree} max="100"></progress>
              </div>
              <Smile width="25" height="25" strokeWidth="8" />
            </div>
            <p className="manner-temperature">매너온도</p>
          </>
        ) : props.type === 'user' ? (
          <>
            <div className="flex-div">
              <div className="first-temperature">
                <div className="mark">
                  첫 온도 36.5°C
                  <br />▼
                </div>
              </div>
              <div>{props.degree}°C</div>
              <Smile width="25" height="25" strokeWidth="8" />
            </div>
            <progress value={props.degree} max="100"></progress>
          </>
        ) : (
          <>
            <div className="chat-degree-div">{props.degree}°C</div>
          </>
        )}
      </TemperatureStyled>
    </>
  );
};

export default Temperature;
