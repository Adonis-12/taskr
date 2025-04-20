import { useEffect, useState, useMemo } from 'react';
import Navigation from './components/navigation/Navigation';
import LandingPage from './components/landingPage/LandingPage';
import FindHelper from './components/findHelper/FindHelper';
import Footer from './components/footer/Footer';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router";
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  // console.log(users);

  // const ServicesPage = ({ users, loading, error }) => {
  //   if (loading) return <div>Loading...</div>;
  //   if (error) return <div>Error fetching data</div>;
  //   return <FindHelper users={users} />;
  // };

  // const router = createBrowserRouter([
  //   {path:'/login',Component: <Login />}
  // ])

  return (
    <div className='smooth-scroll'>
      {/* <RouterProvider router={router} /> */}
      <Navigation />
        <LandingPage />
        <FindHelper users={users} />
        <div className='flex w-full gap-5 justify-between'>
          <Login />
          <SignUp  />
        </div>
        <Footer />
        
    </div>
  );
}

export default App;