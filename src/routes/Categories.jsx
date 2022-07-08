import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:1337/api/categories');
      const json = await res.json();
      setCategories(json.data);
    };
    fetchData();
  }, []);
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Categories</h1>
      <ul className='flex flex-col gap-2 justify-center items-center'>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.attributes.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
