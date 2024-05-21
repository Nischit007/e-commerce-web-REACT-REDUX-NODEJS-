import React from 'react'
import { Homeitems } from '../component/Homeitems'
import { useSelector } from 'react-redux'
import VideoComponent from '../component/VideoComponent';
import CarouselComponent from '../component/Carosel';


export const Home = () => {
 const item=useSelector(store=>store.items);

  return (
  <>
    {/* <VideoComponent></VideoComponent> */}
    
        <main>
    <div className="items-container">
     {item.map((item)=>
      <Homeitems key={item.id} item={item}></Homeitems>
     )}
     
      
      
    </div>
</main>
<CarouselComponent></CarouselComponent>
</>
  )
}
