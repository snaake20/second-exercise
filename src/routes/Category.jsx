import { useParams } from 'react-router-dom';
import { Products } from './Products';

export const Category = () => {
  const params = useParams();
  console.log(params);
  return <Products category={params.name} />;
};
