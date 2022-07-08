import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../data/fakeData.json';

export const Product = () => {
  const params = useParams();
  // console.log(params)
  const [product, setProduct] = useState({});

  useEffect(() => {
    const product = fakeData.data.find((p) => p.id == params.id);
    setProduct(product);

    return () => {};
  }, []);
  console.log(product);
  return (
    <>
      <div className='flex flex-col justify-center items-center '>
        <h1>{product.attributes?.title}</h1>
        <p>{product.attributes?.description}</p>
        <p>{product.attributes?.price}</p>
        <p>{product.attributes?.category?.attributes?.name}</p>
      </div>
    </>
  );
};
