import {useState,useEffect } from 'react';

const useFetch=(callback,url)=>{ 
    const [loading,setloading] = useState(true)  
  
    const fetchInitialDate = async ()=>{ // sever로 부터 data 받아오는 함수
      setloading(true)
      const response = await fetch(url)
      const initialData = await response.json();
      callback(initialData)
          
      setloading(false) 
    }

    useEffect(()=>{ // 처음 시작할 떄 1번 렌더링
      fetchInitialDate();
    },[])
    
    return loading 
  }

export default useFetch