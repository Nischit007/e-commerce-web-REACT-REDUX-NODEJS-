import React from 'react'
import { Header } from '../component/Header';
import { Footer } from '../component/Footer';
import { Outlet } from 'react-router-dom';
import { Fetchitems } from '../component/Fetchitems';
import { useSelector } from 'react-redux';
import { LoadingSpin } from '../component/LoadingSpin';

export const App = () => {
  const fetchStatus= useSelector((store)=>store.fetch);

  return (
    <>
    <Header></Header>
    
    
    <Fetchitems></Fetchitems>
    {fetchStatus.currentlyFetching ?<LoadingSpin></LoadingSpin> :<Outlet></Outlet>}

<Footer></Footer>
</>
  )
}
export default App;