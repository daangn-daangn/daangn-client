import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { TopSearchStyled } from './TopSearchStyled';
import { ReactComponent as Back } from 'assets/back.svg';
import Input from '@atoms/Input/Input';
import Button from '@atoms/Button/Button';
import { useRecoilState } from 'recoil';
import { searchParamsState } from 'stores/Home';
import { createSearchParamFn } from 'utils/createSearchParamFn';

interface ISearch {
  keyword: string;
}

export interface TopSearchProps {}

const TopSearch = (props: TopSearchProps) => {
  const [searchParams, setSearchParams] = useRecoilState(searchParamsState);
  const { register, handleSubmit } = useForm<ISearch>();
  const navigate = useNavigate();
  const onClickLeft = useCallback(() => {
    navigate(-1);
  }, []);

  const onSubmit = (data: ISearch) => {
    // 검색 결과로 이동하는 api
    saveKeyword(data.keyword);
    setSearchParams((prevSearchParams) => ({ ...prevSearchParams, title: data.keyword }));
    navigate({
      pathname: '/',
      search: createSearchParamFn({
        title: data.keyword,
        categories: searchParams.categories.join(),
        minPrice: searchParams.minPrice?.replaceAll(',', ''),
        maxPrice: searchParams.maxPrice?.replaceAll(',', ''),
      }),
    });
  };

  const saveKeyword = (keyword: string) => {
    // 최근 검색 기록 있는 경우
    if (localStorage.getItem('Recent-Search')) {
      let Prevs: string[] = JSON.parse(localStorage.getItem('Recent-Search') || '[]');
      Prevs = Prevs.filter((PrevKeyword) => PrevKeyword !== keyword);
      Prevs = [keyword, ...Prevs];
      localStorage.setItem('Recent-Search', JSON.stringify(Prevs));
    }
    // 최근 검색 기록 없는 경우
    else {
      localStorage.setItem('Recent-Search', JSON.stringify([keyword]));
    }
  };

  return (
    <TopSearchStyled>
      <a onClick={onClickLeft}>
        <Back />
      </a>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={{ ...register('keyword') }}
          height="35px"
          placeholder="고잔동 근처에서 검색"
          background="#f5f5f5"
          border="none"
          autoComplete="off"
        />
        <Button
          background="white"
          hoverBackground="white"
          fontColor="#EE8548"
          fontWeight="400"
          fontSize="1rem"
          padding="0"
          width="40px"
          type="submit"
        >
          검색
        </Button>
      </form>
    </TopSearchStyled>
  );
};

export default TopSearch;
