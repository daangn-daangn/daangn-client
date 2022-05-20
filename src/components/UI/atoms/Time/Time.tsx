import { StyledTime } from './TimeStyled';
import 'moment/locale/ko';
import moment from 'moment';

export interface TimeProps {
  time: Date;
  exactTime?: boolean;
}

const Time = ({ time, exactTime }: TimeProps) => {
  return (
    <>
      <StyledTime>{exactTime ? moment(time).format('a hh:mm') : moment(time).fromNow()}</StyledTime>
    </>
  );
};

export default Time;
