import { StickyHeader, TimelineStyled } from './TimelineStyled';

export interface TimelineProps {
  time: string;
}

const Timeline = ({ time }: TimelineProps) => {
  return (
    // <StickyHeader>
    <TimelineStyled>
      <div className="timeline_bar"></div>
      <div className="timeline_time">{time}</div>
      <div className="timeline_bar"></div>
    </TimelineStyled>
    // </StickyHeader>
  );
};

export default Timeline;
