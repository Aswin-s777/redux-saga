import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import "./table.css";
import Tablehead from "./Tablehead";
import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  POP,
  PUSH,
  SET_DATA,
} from "../Store";

const ReactReduxCounter = (props) => {
  // const [data, setData] = useState({});

  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((result) => {
      console.log("Data fetched", result.data);
      props.setData(result.data);
    });
  };

  const removeData = () => {
    props.removeData();
  };

  return (
    <div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
      <div style={{  position: "100px 200px " }}>
        <h1 style={{ color: "red" }}>
          USING REACT REDUX COUNTER AND DATABASE
        </h1>
      </div>
      <h1>Count is - {props.count}</h1>
      <button onClick={props.increment}>increment</button>
      <button onClick={props.decrement}>decrement</button>
      <h1>Lenth of the Array - {props.test.length}</h1>

      <button onClick={props.push}>push</button>
      <button onClick={props.pop}>pop</button>
      <br></br>
      <h1>Data From Database</h1>
      <button onClick={getData}>getData</button>
      <button onClick={removeData}>removeData </button>

      <table className="out" cellSpacing="0">
        {props.table}
        <tbody style={{ height: "300px" }}>
          {props.data.length > 0 &&
            props.data.map((x, i) => (
              <div key={i}>
                <tr>
                  {" "}
                  <td className="id"> {x.id}</td>{" "}
                  <td className="tittle">{x.title} </td>{" "}
                  <td className="body">{x.body}</td>
                </tr>
              </div>
            ))}
        </tbody>
      </table>
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
      dispatch({ type: SET_DATA, data: result, table: <Tablehead /> });
    },
    removeData: () => {
      console.log("inside remove");
      dispatch({ type: "removeData" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxCounter);
