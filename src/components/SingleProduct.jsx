import { Link } from 'react-router-dom';

export const Product = (props) => {
  const { id, title, price, description, category } = props;
  // console.log(category.attributes.name)
  const product = {
    id: props.id,
    title: props.title,
    price: props.price,
  };
  const onChangeHandler = (e) => {
    props.onClick(product, e.target.checked);
  };

  return (
    <div id={`product-${id}`} className='border-b-2 border-gray last:border-b-0 bg-white flex'>
      <div
        id='product__cart'
        className='flex flex-col align-center justify-center border-r-2 border-gray p-2'
      >
        <input
          type='checkbox'
          id={`product__cart-add${id}`}
          onChange={onChangeHandler}
          checked={props.checked}
        />
        <label htmlFor={`product__cart-add${id}`}>Add to Cart</label>
      </div>
      <div className='product__info p-2'>
        <Link to={`/product/${product.id}`}>{title}</Link>
        <p className='product__price'>Pretul: {price}</p>
        <p>Description: {description}</p>
        <Link to={`/categories/${category.attributes.slug}`}> Category: {category.attributes.name}</Link>
      </div>
    </div>
  );
};
