import { TimelineStyled } from './TimelineStyled';
import 'moment/locale/ko';
import moment from 'moment';

export interface TimelineProps {
  time: Date;
}

const Timeline = ({ time }: TimelineProps) => {
  return (
    <>
      <TimelineStyled>
        <div className="timeline_bar"></div>
        <div className="timeline_time">{moment(time).format('YYYY월 M월 DD일')}</div>
        <div className="timeline_bar"></div>
      </TimelineStyled>
    </>
  );
};

export default Timeline;
