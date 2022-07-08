import React, { useEffect, useState } from 'react'
import { Product } from '../components/SingleProduct'
// import fakeData from '../data/fakeData.json'
import { Order } from '../components/Order'
import { Button } from '../components/Button'

export const Products = (props) => {
  const [products, setProducts] = useState([])
  const [orderList, setOrderList] = useState([])
  const [order, setOrder] = useState([])
  
  
  useEffect(() => {
    // setProducts(fakeData.data)
    const fetchData = async () => {
      const res = await fetch('http://localhost:1337/api/products')
      const json = await res.json()
      setProducts(json.data)
    }
    fetchData()
  }, [setProducts])

  const handleClick = (product, isChecked) => {
    if (isChecked === true) {
      setOrderList((prev) => [...prev, product])
      setOrder((prev) => [...prev, product.id])
    } else {
      setOrderList((prev) => prev.filter((p) => p.id !== product.id))
      setOrder((prev) => prev.filter((p) => p !== product.id))
    }
    // console.log(orderList)
  }
  const clear = () => {
    setOrderList([])
    setOrder([])
  }

  // console.log(products)
  return (
    <div className='flex gap-2 border-4 border-gray rounded my-5 mx-5'>
      <div className='flex flex-col justify-center w-2/3 border-r-0 '>
        {!props.category ? products.map((product) => {
          // console.log(product)
          const { title, price, description, category } = product.attributes
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
            />
          )
        }) : products.filter((product) => product.attributes.category === props.category).map((product) => {
          const { title, price, description, category } = product.attributes
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
            />
          )
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
            const { id, title, price } = order
            return <Order key={id} title={title} price={price} onClick={handleClick} />
          })
        )}
        {orderList.length ? <Button order={order} onClick={clear} /> : null}
      </div>
    </div>
  )
}