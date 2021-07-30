import React, { useEffect ,useState} from "react";
import { connect } from "react-redux";
import { GET_USERS, SET_USERS,remove_data,Removedata,array2} from "../reducer/action";
import axios from "axios";

export function Users(props) {
  //useEffect(() => {
  //  props.getUsers();
  //}, []);
  const [id, setid] = useState("")
  const [two, settwo] = useState("")
 const inm=(e)=>{
setid(e.target.value);

 }
 const but=()=>{
settwo(id);
props.arr2();
 };
 const but1=()=>{
  settwo(id);
  props.arr2();
   };
 
  return <div className="container">
    <input type="number" onChange={inm}></input>
    <button onClick={but} style={{color:"red"}}>next</button>
    {
     
      props.data2.map((use,j)=>
      use.id ==two && ( <div> {use.id}  {use.title} </div>))
      
      

     
      
   }
   
   
    </div>
}
  


const mapStateToProps = (state) => {
  return {
    data: state.users.data || [],
    data2: state.users.data2 || [],
  };
};

// const getUserDetails = () => {
//   return (dispatch, getState) => {
//     axios.get(`https://jsonplaceholder.typicode.com/users`).then((result) => {
//       console.log("Data fetched", result.data);
//       dispatch({ type: SET_USERS, value: result.data });
//     });
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
        dispatch({ type: GET_USERS});
        
    },
    removedata:()=>{
      dispatch({ type: Removedata});
    },
    arr2:()=>{
      dispatch({type:array2})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);