import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddProductForm = () => {
  const navigate = useNavigate()
  const initialStateProduct = {
    data: {
      title: '',
      price: '',
      description: '',
      _category: '',
    },
  };
  const [product, setProduct] = useState(initialStateProduct);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:1337/api/categories');
      const json = await res.json();
      setCategories(json.data);
    };
    fetchData();
  }, []);
  // console.log(categories)

  const handleSumbit = (e) => {
    e.preventDefault();

    // console.log(product);

    var raw = JSON.stringify(product);

    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: raw,
    };

    fetch('http://localhost:1337/api/products', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
    
    setProduct(initialStateProduct);
    navigate('/products')
  };

  return (
    <div className='flex justify-center items-center mt-40'>
      <form
        onSubmit={handleSumbit}
        className='flex flex-col gap-2 justify-center items-center bg-white border-4 border-gray-500 rounded-lg shadow-lg p-5 max-w-xs'
      >
        <div className='flex flex-row gap-1 justify-center items-center'>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            className='border-2'
            id='title'
            value={product.data.title}
            onChange={(event) =>
              setProduct((state) => ({
                data: {
                  ...state.data,
                  title: event.target.value,
                },
              }))
            }
          />
        </div>
        <div className='flex flex-row gap-1 justify-center items-center'>
          <label htmlFor='price'>Price:</label>
          <input
            type='text'
            className='border-2'
            id='price'
            value={product.data.price}
            onChange={(event) =>
              setProduct((state) => ({
                data: {
                  ...state.data,
                  price: event.target.value,
                },
              }))
            }
          />
        </div>
        <div className='flex flex-col gap-1 justify-center items-center'>
          <label htmlFor='description'>Description:</label>
          <textarea
            id='description'
            className='border-2'
            value={product.data.description}
            onChange={(event) =>
              setProduct((state) => ({
                data: {
                  ...state.data,
                  description: event.target.value,
                },
              }))
            }
          />
        </div>
        <div className='flex flex-row gap-1 justify-center items-center'>
          <label htmlFor='category'>Category:</label>
          <select
            id='category'
            onChange={(event) =>
              setProduct((state) => ({
                data: {
                  ...state.data,
                  _category: event.target.value,
                },
              }))
            }
          >
            <option>Select category</option>
            {categories.map((category) => (
              <option
                key={category.id}
                className='border-2'
                value={category.slug}
                onChange={(event) =>
                  setProduct((state) => ({
                    data: {
                      ...state.data,
                      _category: event.target.value,
                    },
                  }))
                }
              >
                {category.attributes.name}
              </option>
            ))}
          </select>
        </div>
        {/* <div className='flex flex-row gap-1 justify-center items-center'>
          <label htmlFor='image'>Image:</label>
          <input type='image' className='border-2' id='image' value='send image' />
        </div> */}
        <div>
          <button className='border-2 border-red-500 rounded bg-red-500 text-white ' type='submit'>
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};
