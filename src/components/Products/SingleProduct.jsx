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
  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`http://localhost:1337/api/products/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };
  // console.log(category)
  return (
    <div
      id={`product-${id}`}
      className='border-b-2 border-gray last:border-b-0 bg-white flex flex-row '
    >
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
        <p>{title}</p>
        <p>Pretul: {price}</p>
        <p>Description: {description}</p>
        <Link to={`/categories/${category?.data.attributes.name}`}>
          {' '}
          Category: {category?.data.attributes.name}
        </Link>
      </div>
        <div className='flex flex-col justify-center items-center gap-1'>
          <Link
            to={`/product/${product.id}`}
            className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-sm px-2 pt-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800
          h-10'
          >
            View
          </Link>
          {!props.editing ? (
            <></>
          ) : (
            <>
              <button
                className='text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded text-sm px-2 text-center dark:bg-yellow-600 dark:red:bg-yellow-700 dark:focus:ring-yellow-800
          h-10'
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm px-2 text-center dark:bg-red-600 dark:red:bg-blue-700 dark:focus:ring-red-800
          h-10'
              >
                Delete
              </button>
            </>
          )}
        </div>
    </div>
  );
};
