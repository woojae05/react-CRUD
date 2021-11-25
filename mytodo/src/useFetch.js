import {useState,useEffect } from 'react';

const useFetch=(callback,url)=>{
    const [loading,setloading] = useState(true)
  
    const fetchInitialDate = async ()=>{
      setloading(true)
      const response = await fetch(url)
      const initialData = await response.json();
      callback(initialData)      
      setloading(false) 
    }
    useEffect(()=>{
      fetchInitialDate();
    },[])
    
    return loading
  }

export default useFetch