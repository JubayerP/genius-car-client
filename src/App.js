import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Routes/Routes';

function App() {
  
  return (
    <div className="max-w-screen-xl mx-auto">
      <Toaster />
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
