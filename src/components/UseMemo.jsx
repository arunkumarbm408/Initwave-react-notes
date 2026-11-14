import React, {useState,useMemo,useCallback} from 'react'

const UseMemo = () => {
  const [number, setnumber]=useState(6);
  const [count, setcount]=useState(0);

  const squareLogic=useMemo(()=>{
    console.log("Square logic is running");
    return number*number;
  }, [number]);


  const handleClick= useCallback(()=>{
    console.log("Button clicked");
  },[])

  return (
    <div>
        <h1>Number: {number}</h1>
        <p>Count: {count}</p>
        {/* <h2>Square of {number} is: {squareLogic}</h2> */}

        <button onClick={()=>setnumber(number+1)}>edit number</button>

        <h2>Count: {count}</h2>

        <button onClick={()=>setcount(count+1)}>Increment count</button>

        <button onClick={handleClick}>Click IT</button>
    </div>
  )
}

export default UseMemo
