import { MannerPageStyled } from './MannerPageStyled';
import Top from '@molecules/Top/Top';
import List from '@atoms/List/List';
import { ReactComponent as Smile } from 'assets/smile-color.svg';
import { ReactComponent as Sad } from 'assets/sad-color.svg';
import { ReactComponent as People } from 'assets/people.svg';

export const scores = Array.from({ length: 11 }, (_, i) => String(i - 5) + '점');
export const dummyManner: { score: string; count: number }[] = [];
scores.forEach((score) => {
  dummyManner.push({ score: score, count: Math.floor(Math.random() * 10) });
});

const MannerPage = () => {
  return (
    <MannerPageStyled>
      <Top title="매너 상세" left="prev" />
      <div>
        <h2 className="sub-title">
          <Smile />
          받은 매너 점수
        </h2>
        {dummyManner
          .slice(5, 11)
          .reverse()
          .map((manner, idx) => (
            <List padding="23px 0px" key={idx}>
              <div className="justify-space-between">
                <div className="manner-score">{manner.score}</div>
                <div className="manner-score__people-count">
                  <People />
                  <span>{manner.count}</span>
                </div>
              </div>
            </List>
          ))}
      </div>
      <div>
        <h2 className="sub-title">
          <Sad />
          받은 비매너 점수
        </h2>
        {dummyManner.slice(0, 5).map((manner, idx) => (
          <List padding="23px 0px" key={idx}>
            <div className="justify-space-between">
              <div className="manner-score">{manner.score}</div>
              <div className="manner-score__people-count">
                <People />
                <span>{manner.count}</span>
              </div>
            </div>
          </List>
        ))}
      </div>
    </MannerPageStyled>
  );
};

export default MannerPage;
