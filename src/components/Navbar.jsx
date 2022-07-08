import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-black'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/' className='flex items-center'>
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            eMag
          </span>
        </Link>
        <div className='flex md:order-2'>
          {location.pathname === '/login' ? (
            <></>
          ) : !localStorage.getItem('token') ? (
            <Link
              to={'/login'}
              className='text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800'
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
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to='/categories'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Categories
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
  );
};
