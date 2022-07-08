import { useSearchParams } from 'react-router-dom';
import { Products } from './Products';

export const Category = () => {
  const params = useSearchParams();
  console.log(params);
  return <Products />;
};
