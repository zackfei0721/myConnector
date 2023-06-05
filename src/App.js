import logo from './logo.svg';
import './App.css';
import React from 'react';

const ReduxContext = React.createContext();

//Implement the custom myConnect
const myConnect = (mapStateToProps) => (Component) => {
  return (props) => {
    const {state, dispatch} = React.useContext(ReduxContext);
    const stateToProps = mapStateToProps(state, props);
    return <Component {...props} {...stateToProps} dispatch={dispatch} />
  }
};

// Define the reducer
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

// Define the Counter component
const Counter = ({ count, dispatch }) => (
  <div>
    <h4>Count: {count}</h4>
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>+ 1</button>
  </div>
);

const ConnectedCounter = myConnect((state) => ({ count: state.count }))(Counter);

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  return (
    <ReduxContext.Provider value={{state, dispatch}}>
      <ConnectedCounter />
    </ReduxContext.Provider>
  );
};

export default App;

