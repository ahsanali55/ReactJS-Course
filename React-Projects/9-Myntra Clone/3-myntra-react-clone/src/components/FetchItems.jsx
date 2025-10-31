import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStatusActions } from '../store/fetchStatusSlice';
import { itemActions } from '../store/ItemSlice';

const FetchItems = () => {
    const fetchStatus  = useSelector((state) => state.fetchStatus);
    // console.log(fetchStatus)
      
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (fetchStatus.fetchDone) return;
        const controller = new AbortController();
        const signal = controller.signal;
        
        dispatch(fetchStatusActions.markFetchingStarted());    // loading spinner started
        fetch('http://localhost:8080/items',)
        .then((res) => res.json())
        .then((data) => {
            
            dispatch(fetchStatusActions.markFetchingFinished()); // loading spinner ended
            dispatch(fetchStatusActions.markFetchDone());   // fetching complete.
            dispatch(itemActions.addInitialItems(data.items));
            // console.log("data ",data.items)
        } 
    )

        return () => {
            console.log('Cleaning up useEffect');
            controller.abort();
        }
    }, [fetchStatus])


    // console.log(fetchStatus)
  return (
    <>
      
    </>
  )
}

export default FetchItems
