
export const Product = (props) => {
    const {id, name, price, bio} = props;
    const product = {
      id: props.id,
      name: props.name,
      price: props.price,
    }
    const onChangeHandler = (e) => {
      props.onClick(product, e.target.checked)
    }

  return (
    <div id={`product-${id}`} className='border-b-2 border-gray last:border-b-0 bg-white flex'>
      <div id='product__cart' className='flex flex-col align-center justify-center border-r-2 border-gray p-2'>
        <input type='checkbox' id={`product__cart-add${id}`}  onChange={onChangeHandler} checked={props.checked}/>
        <label htmlFor={`product__cart-add${id}`}>Add to Cart</label>
      </div>
      <div className='product__info p-2'>
        <p>{name}</p>
        <p className='product__price'>Pretul: {price}</p>
        <p>Bio: {bio ? 'da' : 'nu'}</p>
      </div>
    </div>
    
  )
}

