import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Login } from './routes/Login';
import { Products } from './routes/Products';
import { Category } from './routes/Category';
import { Product } from './routes/Product';
import { AddProductForm } from './routes/AddProductForm';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-black'>
          <div className='container flex flex-wrap justify-between items-center mx-auto'>
            <Link to='/' className='flex items-center'>
              <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                eMag
              </span>
            </Link>
            <div className='flex md:order-2'>
              {!localStorage.getItem('token') ? (
                <Link
                  to={'/login'}
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Login{' '}
                </Link>
              ) : (
                <p>Logged in as {localStorage.getItem('username')}</p>
              )}
            </div>
            <div className='justify-between items-center w-full md:flex md:w-auto md:order-1'>
              <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                <li>
                  <Link
                    to='/products'
                    className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
                    aria-current='page'
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to='/add-new-product'
                    className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Add a new Product
                  </Link>
                </li>
                <li>
                  <a
                    href='#'
                    className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Add a new Category
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/add-new-product' element={<AddProductForm />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/categories/:name' element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
