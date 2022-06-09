import { ListStyled } from './ListStyled';

export interface ListProps {
  fontWeight?: string;
  padding?: string;
}

const List: React.FC<ListProps> = (props) => {
  return (
    <>
      <ListStyled {...props}>{props.children}</ListStyled>
    </>
  );
};

export default List;
