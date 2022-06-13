import { useState } from 'react';
import TopSearch from '@molecules/TopSearch/TopSearch';
import Title from '@atoms/Title/Title';
import Button from '@atoms/Button/Button';
import List from '@atoms/List/List';
import { SearchPageStyled } from './SearchPageStyled';
import { ReactComponent as Close } from 'assets/close.svg';

export interface SearchPageProps {
  recentSearch?: boolean;
}

const SearchPage = () => {
  const [recentSearch, setRecentSearch] = useState<string[]>(JSON.parse(localStorage.getItem('Recent-Search') || '[]'));

  const deleteRecentSearch = (keyword: string) => {
    const deleted = recentSearch.filter((search) => search !== keyword);
    setRecentSearch(deleted);
    localStorage.setItem('Recent-Search', JSON.stringify(deleted));
  };

  const clearRecentSearch = () => {
    setRecentSearch([]);
    localStorage.removeItem('Recent-Search');
  };

  return (
    <SearchPageStyled recentSearch={recentSearch.length > 0 ? true : false}>
      <TopSearch />
      <div className="recent-search">
        <div className="recent-search_top">
          <Title fontWeigt="700">최근 검색어</Title>
          <Button
            background="white"
            hoverBackground="white"
            fontColor="#545454"
            fontWeight="400"
            fontSize="0.9rem"
            padding="0"
            onClick={() => clearRecentSearch()}
          >
            모두 지우기
          </Button>
        </div>
        <div className="recent-search_keywords">
          {recentSearch.map((keyword, idx) => (
            <List padding="18px 0px" key={idx}>
              <div className="justify-space-between">
                <span>{keyword}</span>
                <Close onClick={() => deleteRecentSearch(keyword)} />
              </div>
            </List>
          ))}
        </div>
      </div>
    </SearchPageStyled>
  );
};

export default SearchPage;
