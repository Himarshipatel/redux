import React,{useRef} from 'react';
//import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,addUser,removeUser} from "./actions";

const App = () => {
  
  const count = useSelector(state=>state.counterReducer);
  const users = useSelector(state=>state.userReducer);
  const dispatch = useDispatch();
  const userRef = useRef(null);
  
  const handelSubmit = (e) => {
    e.preventDefault();

    dispatch(addUser(userRef.current.value));
    userRef.current.value="";
  };
  
  return (
    <div>
      <h1>counter</h1>
     <button onClick={()=>dispatch(increment())}>+</button>
      {count}
     <button onClick={()=>dispatch(decrement())}>-</button>
     <h1>User</h1>
      <form onSubmit={handelSubmit}> 
        <input type="text" placeholder="username" ref={userRef} />
      </form>
      <ul>
        {users.map((user,index)=>(
          <li key={index}>
            {user.name}
           <button onClick={()=>dispatch(removeUser(index))}>Delete</button>
          </li>
          
        ))}
      </ul>

    </div>
  );
}

export default App;
