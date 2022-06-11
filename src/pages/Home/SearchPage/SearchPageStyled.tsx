import styled from '@emotion/styled';
import { SearchPageProps } from './SearchPage';

export const SearchPageStyled = styled.div<SearchPageProps>`
  padding: 50px 20px 0px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .recent-search {
    visibility: ${(props) => (props.recentSearch ? 'visible' : 'hidden')};
    .recent-search_top {
      margin: 20px 0px;
      display: flex;
      justify-content: space-between;
    }
    .recent-search_keywords {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0px 20px;
    }
  }
  .justify-space-between {
    svg {
      width: 18px;
    }
  }
`;
