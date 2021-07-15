import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GET_USERS, SET_USERS,remove_data,Removedata,array2} from "../reducer/action";
import axios from "axios";

export function Users(props) {
  //useEffect(() => {
  //  props.getUsers();
  //}, []);
 
  return <div className="container">
    <button onClick={props.getUsers}>fetchdata</button>
  <button onClick={props.removedata}>removedata</button><br></br>
  <button onClick={props.arr2}>Array2</button>
    <marquee direction="up">
    <h3 className="text-danger bg-info">
    Length of first array {props.data.length}
  
  
  Length of second array {props.data2.length}
   
   <ul>
   {
      props.data2.map((use,j)=><li><div key={j}>
      {use.id} {use.title}
      </div>
      </li>
      )
   }
   </ul>

    {
        
        props.data.map((user,i)=><div key={i}>
            {user.name} {user.email}
            {/* <table style={{width:"100%"}} className="table-bordered table-hover">
              <thead>
                  <tr>
                      <td><b>name</b></td>
                      <td><b>username</b></td>
                      <td><b>email</b></td>
                  </tr>
              </thead>
              <tbody>
              {props.data.map(a=>(
               
           
                  <tr className="black">
                      <td>{a.name}</td>
                      <td>{a.username}
</td>
                      <td>{a.email}</td>
                  </tr> ))}
                  
              </tbody>
           </table> */}
            
        </div>
        )
    }
    
</h3>
</marquee>
  </div>;
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