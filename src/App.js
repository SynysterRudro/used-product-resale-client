
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import router from './Routes/Router';

function App() {
  return (
    <div className='w-11/12 mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
