import React from 'react'
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import {itemsActions} from "../store/itemsSlice"
import { fetchStatusActions } from '../store/FetchStatusSlice'

export const Fetchitems = () => {
   const fetchStatus= useSelector((store)=>store.fetch);
   const dispatch=useDispatch()
   useEffect(() => {
 if(fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted())

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({items}) => {
        dispatch(fetchStatusActions.markFetchDone())
        
        dispatch(fetchStatusActions.markFetchingFinished())
        dispatch(itemsActions.addInitialItems(items))
        
      });

    return () => {
     
      controller.abort();
    };
  }, [fetchStatus]);
  return (
    <>
 
    </>
  )
}
