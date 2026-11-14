import React,{useEffect,useState} from 'react'
import axios from 'axios'

const UseEffect = () => {
//    const [count, setCount] = useState(0);
const [users, setUsers] = useState([]);

useEffect(()=>{
  axios.get('https://dummyjson.com/users')
  .then((res)=>{
    console.log(res.data.users);
    setUsers(res.data.users)
  })
  .catch((err)=>{
    console.error(err);
  })
},[])

  return (
    <div>
       <h1> USERES DETAILS PAGE</h1>
       <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>

        </thead>
        <tbody>
            {users.map((user)=>(
                // {console.log(user)}
                <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.email}</td>
             </tr>
            ))}

        </tbody>
       </table>
    </div>
  )
}

export default UseEffect
