import { Route, Routes } from 'react-router-dom';
import { Login } from './routes/Login';
import { Products } from './routes/Products';
import { Category } from './routes/Category';
import { Product } from './routes/Product';
import { AddProductForm } from './routes/AddProductForm';
import { Navbar } from './components/Navbar';
import { Categories } from './routes/Categories';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/login' element={<Login />} />
          <Route path='/add-new-product' element={<AddProductForm />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/categories/:name' element={<Category />} />
        </Routes>
    </>
  );
}

export default App;
