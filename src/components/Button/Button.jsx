import { LoadMore } from './Button.styled';

export const Button = ({ onClick, type = 'submit', children }) => {
  return (
    <LoadMore onClick={onClick} type={type}>
      {children}
    </LoadMore>
  );
};
