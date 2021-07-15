import logo from './logo.svg';
import './App.css';

import ReactReduxthunk from './Redux-thunk/ReactReduxthunk';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      {/* <ReactReduxCounter />   */}
        <ReactReduxthunk />   
      {/* <Users /> */}
    </div>
  );
}

export default App;
