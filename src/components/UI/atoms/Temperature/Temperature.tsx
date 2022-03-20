import { ReactComponent as Smile } from '../../../../assets/smile.svg';
import { TemperatureStyled } from './TemperatureStyled';

export interface TemperatureProps {
  degree: number;
  color?: string;
}

const Temperature = (props: TemperatureProps) => {
  return (
    <>
      <TemperatureStyled 
        degree={props.degree}
        color={props.degree <= 37 ? "#2F68B8" : props.degree <= 50 ? "#71AE6F": "#D18E26"}>
        <div className="flex-div">
          <div className="degree-div ">
            <div>{props.degree}°C</div>
            <progress value={props.degree} max="100"></progress>
          </div>
        <Smile width="25" height="25" stroke-width="8" />
        </div>
        <p className="manner-temperature">매너온도</p>
      </TemperatureStyled>
    </>
  );
};

export default Temperature;