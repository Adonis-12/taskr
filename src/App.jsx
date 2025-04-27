import Root from "./components/root/Root";
import {
  createBrowserRouter,
  RouterProvider,
  useParams
} from "react-router";
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp';
import Home from './components/home/Home';
import LoginNav from "./components/loginnav/LoginNav";
import NotFound from "./components/notfound/NotFound";
import UserDashboard from "./components/userdashboard/UserDashboard";

const App = () => {

  const {userType} = useParams();
  
  function validParam(){
    if(userType==='user' || userType==='helper'){
      return true;
    }
  }
  const router = createBrowserRouter([
    {path: '/', element: <Root />
      
    },
    {path:'/login/:userType',element: <>
    
    <div className="grid grid-cols-1 place-content-center h-screen">
      <LoginNav  />
      <Login />
      <Home />
     
    </div>
    </>},
    {path:'/signup/:userType',element:<>
      <div className="grid grid-cols-1 place-content-center h-screen">
      <LoginNav  />
      <SignUp />
      <Home />
    </div>
    </>},
    {
      path:'/dashboard/:id',element:<UserDashboard />
    },
    {
      path:'*', element:
      <NotFound />
    }

  ])

  return (
    <div className='smooth-scroll'>
      <RouterProvider router={router} />
      
        
    </div>
  );
}

export default App;