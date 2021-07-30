import logo from './logo.svg';
import './App.css';

import ReactReduxthunk from './Redux-thunk/ReactReduxthunk';
import Users from './components/Users';
import Even from './components/Even';

function App() {
  return (
    <div className="App">
      {/* <ReactReduxCounter />   */}
        {/* <ReactReduxthunk />    */}
        <div className="io">
       <Users /> 
       </div>
       <Even />
    </div>
  );
}

export default App;
