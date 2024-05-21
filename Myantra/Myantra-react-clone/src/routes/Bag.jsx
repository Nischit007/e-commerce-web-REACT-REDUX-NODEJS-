import React from 'react'

import { BagSummary } from '../component/BagSummary'
import { Bagitems } from '../component/Bagitems';
import { useSelector } from 'react-redux';




export const Bag = () => {
 const bagItems= useSelector(store=>store.bag);
 const items= useSelector(store=>store.items);

 const finalItems=items.filter((items)=>{
  const itemsIndex=bagItems.indexOf(items.id)
  return itemsIndex >=0;
 })
  return (
    
      
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map(item=><Bagitems item={item}></Bagitems>)}
          
        </div>
        <BagSummary></BagSummary>
    
        

      </div>
    </main>
    
    
  )
}
export default Bag;