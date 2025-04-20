import Root from "./components/root/Root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp';
import Home from './components/home/Home';

const App = () => {
  

  const router = createBrowserRouter([
    {path: '/', element: <Root />
      
    },
    {path:'/login',element: <>
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Login />
      <Home />
     
    </div>
    </>},
    {path:'/signup',element:<>
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <SignUp />
      <Home />
    </div>
    </>}
  ])

  return (
    <div className='smooth-scroll'>
      <RouterProvider router={router} />
      
        
    </div>
  );
}

export default App;