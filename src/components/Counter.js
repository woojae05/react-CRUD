import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [input,setInput] = useState("");

//   mount : 생김 : 급식 랭킹 , 메뉴 []
// update : update : [state]

  // useEffect(() => {
  //   console.log("Effect");
  // }, []);

//   useEffect(()=>{
//     // axios.get()
//     console.log("get api")
//   },[]);

useEffect(()=>{
  console.log("count 값이 바뀜 : "+count);
},[count]);
  
useEffect(()=>{
  console.log(input);
},[input])
console.log("rendering");

  const onClickIncrease = () => {
    setCount(count + 1);
  };

  const onClickDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClickIncrease}>+</button>
      <button onClick={onClickDecrease}>-</button>
      <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
    </div>
  );
}

export default Counter;
