import React, { useEffect, useState } from 'react';
import { Product } from '../components/Products/SingleProduct';
// import fakeData from '../data/fakeData.json';
import { Order } from '../components/Order/Order';
import { Button } from '../components/Order/Button';
import {fetchProducts} from '../utils/fetches';

export const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [order, setOrder] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // setProducts(fakeData.data);
    fetchProducts().then((res)=>setProducts(res));
  }, [setProducts]);
  const handleClick = (product, isChecked) => {
    if (isChecked === true) {
      setOrderList((prev) => [...prev, product]);
      setOrder((prev) => [...prev, product.id]);
    } else {
      setOrderList((prev) => prev.filter((p) => p.id !== product.id));
      setOrder((prev) => prev.filter((p) => p !== product.id));
    }
  };

  const clear = () => {
    setOrderList([]);
    setOrder([]);
  };
  
  return (
    <>
      <div className='flex justify-end mr-5 mt-5'>
        {!localStorage.getItem('token') ? <></> : <button // add ! for it to actually work
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          onClick={() => setIsEditing(!isEditing)}
        >
          Edit
        </button>}
      </div>
      <div className='flex gap-2 border-4 border-gray rounded my-5 mx-5'>
        <div className='flex flex-col justify-center w-2/3 border-r-0 '>
          {props.category !== undefined
            ? products
                .filter(
                  (product) => product.attributes.category.data.attributes.name === props.category,
                )
                .map((product) => {
                  const { title, price, description, category } = product.attributes;
                  return (
                    <Product
                      key={product.id}
                      id={product.id}
                      title={title}
                      price={price}
                      description={description}
                      category={category}
                      onClick={handleClick}
                      checked={orderList.some((p) => p.id === product.id)}
                      editing={isEditing}
                    />
                  );
                })
            : products.map((product) => {
                // console.log(product)
                const { title, price, description, category } = product.attributes;
                return (
                  <Product
                    key={product.id}
                    id={product.id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    onClick={handleClick}
                    checked={orderList.some((p) => p.id === product.id)}
                    editing={isEditing}
                  />
                );
              })}
        </div>
        <div className='w-1/3 my-5 flex flex-col border-l-2 '>
          {!orderList.length ? (
            <p className='flex justify-center items-center h-3/4 m-0 p-0'>
              {' '}
              No products in basket...{' '}
            </p>
          ) : (
            orderList.map((order) => {
              // console.log(order)
              const { id, title, price } = order;
              return <Order key={id} title={title} price={price} onClick={handleClick} />;
            })
          )}
          {orderList.length ? <Button order={order} onClick={clear} /> : null}
        </div>
      </div>
    </>
  );
};
