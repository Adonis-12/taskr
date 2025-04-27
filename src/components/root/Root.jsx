import { useEffect, useState } from 'react';
import Navigation from '../navigation/Navigation';
import LandingPage from '../landingPage/LandingPage';
import FindHelper from '../findHelper/FindHelper';
import Footer from '../footer/Footer';
// import UserDashboard from '../userdashboard/UserDashboard';


function Root() {
    const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const componentIds = {
    landing: 'id_1',
    find: 'id_2',
    footer: 'id_3'
  }


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
  console.log(users,1)

  // console.log(users);

  // const ServicesPage = ({ users, loading, error }) => {
  //   if (loading) return <div>Loading...</div>;
  //   if (error) return <div>Error fetching data</div>;
  //   return <FindHelper users={users} />;
  // };
  return (
    <>
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Navigation componentIds={componentIds}/>
        <LandingPage id={componentIds.landing} componentIds={componentIds}/>
        <FindHelper users={users} id={componentIds.find}/>
        <Footer id={componentIds.footer}/>
  
        </div>
      </>
  )
}

export default Root