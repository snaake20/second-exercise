
export const Order = (props) => {
    const { title, price} = props;
    return(
    <div className='border-b-2 border-gray last:border-b-0 bg-white flex'>
      <div>
        <p>{title}</p>
        <p>Pret: {price}</p>
      </div>
    </div>
    )
}
