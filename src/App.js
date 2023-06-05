import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Provider, connect } from 'react-redux'; // default way to import connect()
import { createStore } from 'redux'; // default way to import createStore()

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

const store = createStore(reducer);

// Define the Counter component
const Counter = ({ count, dispatch }) => (
  console.log('Coutnter: ', {count, dispatch}),
  <div>
    <h4>Count: {count}</h4>
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>+ 1</button>
  </div>
);

// create connected Counter component using the custom myConnect
const ConnectedCounter = myConnect((state) => ({ count: state.count }))(Counter);
// create connected Counter component using the default connect()
const mapStateToProps = (state) => ({ count: state.count });
const DefaultConnectedCounter = connect(mapStateToProps)(Counter);

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  return (
    <>
      <ReduxContext.Provider value={{state, dispatch}}>
        <h2>Using myConnect: </h2>
        <ConnectedCounter />
      </ReduxContext.Provider>
      <Provider store={store}>
        <h2>Using default connect(): </h2>
        <DefaultConnectedCounter />
      </Provider>
    </>
    
  );
};

export default App;

