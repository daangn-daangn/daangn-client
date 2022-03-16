import { StyledTime } from './TimeStyled';
import 'moment/locale/ko';
import moment from 'moment';

export interface TimeProps {
  time: Date;
}

const Time = ({ time }: TimeProps) => {
  return (
    <>
      <StyledTime>{moment(time).fromNow()}</StyledTime>
    </>
  );
};

export default Time;
