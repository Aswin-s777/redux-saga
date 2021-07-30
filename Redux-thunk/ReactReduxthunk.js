import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import "./tablethunk.css";
import Tablehead from "../React-redux/Tablehead";

import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  POP,
  PUSH,
  SET_DATA,
} from "../Thunkstore";
import Tableheadthunk from "./Tableheadthunk";

const ReactReduxCounter = (props) => {
  // const [data, setData] = useState({});

  // const getData = () => {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts`).then((result) => {
  //     console.log("Data fetched", result.data);
  //     props.setData(result.data);
  //   });
  // };

  const removeData = () => {
    props.removeData();
  };

  return (
    <div>
        <h1>REACT REDUX USING THUNK</h1>
        <div className="div11">
        <div className="div12"></div>
        <div className="div13">
            
      <h1>Count is - {props.count}</h1>
      <table className="button1" cellSpacing="30px">
        <tr>
          <td>
            
            <button className="button" onClick={props.increment}>INCREMENT</button>
          </td>
          <td>
            <button className="button" onClick={props.decrement}>DECREMENT</button>
          </td>
        </tr>
      </table>
      </div>
      </div>
        <div className="div21">
            <div className="div22"></div>
            <div className="div23">
      <h1>Lenth of the Array - {props.test.length}</h1>
      <table className="button2">
        <tr>
          <td>
            <button className="button" onClick={props.push}>PUSH</button>
          </td>
          <td>
            
            <button className="button" onClick={props.pop}>POP</button>
          </td>
        </tr>
      </table>
      </div>
      </div>
      {/* <button onClick={getData}>getData</button> */}
      <div className="div31">
          <div className="div32"></div>
          <div className="div33">
      <h1>DATABASE DETAILS</h1>
      <table className="button3">
          <tr>
     <td> <button className="button" onClick={props.setData}>GETDATA</button></td>
    <td>  <button className="button" onClick={removeData}>REMOVEDATA</button></td>
      </tr>
      </table>
      <br></br>
      <table className="out1" cellSpacing="0">
        {props.table}
        <tbody style={{ height: "300px" }}>
          {props.data.length > 0 &&
            props.data.map((x, i) => (
              <div key={i}>
                <tr>
                  <td className="id"> {x.id}</td>
                  <td className="tittle">{x.title} </td>
                  <td className="body">{x.body}</td>
                </tr>
              </div>
            ))}
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    test: state.tester,
    data: state.storage.data || [],
    table: state.storage.table,
  };
};

//Thunk
const thunkGetDataFun = (status) => {
  return (dispatch, getState) => {
    //parameters are fixed
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((result) => {
      console.log(status, getState());
      console.log("Data fetched", result.data);
      dispatch({ type: SET_DATA, data: result.data, table: <Tableheadthunk /> }); //data is fixed while getting
    });
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: COUNTER_INCREMENT });
    },
    decrement: () => {
      dispatch({ type: COUNTER_DECREMENT });
    },
    push: () => {
      dispatch({ type: PUSH, value: Math.random() });
    },
    pop: () => {
      dispatch({ type: POP });
    },
    setData: (result) => {
      dispatch(thunkGetDataFun("Thunk function called"));
    },
    removeData: () => {
      console.log("inside remove");
      dispatch({ type: "removeData" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxCounter);
