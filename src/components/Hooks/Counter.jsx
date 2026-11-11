import {useState} from 'react'

const Counter = () => {
    let initialvalue=0;
    const [count, setCount] = useState(initialvalue);

    let count01=0;

    // const increment=()=>{
    //     count++;
    //     console.log(count);
    // }


    const increment=()=>{
        setCount(count+1);
    }

    
  return (
    <div>
      <h>Counter: {count}</h>
      <button onClick={increment}>
        Increment
      </button>
    </div>
  )
}

export default Counter
