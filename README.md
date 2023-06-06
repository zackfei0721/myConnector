# Questions:

## What Redux?
Redux is a predictable state container for JavaScript apps. It helps developers manage the state of their apps in a predictable way. Redux uses a single immutable store to hold all the states in the app, and a reducer to take the previous states and actions to return a next state, making them predictable.



## What is Flux, difference with Redux?
Flux is a design pattern for client-side web applications introduced by Facebook. It promotes a unidirectional data flow using a dispatcher, multiple stores, views (React components), and actions. Unlike Flux, Redux eliminates the dispatcher and uses pure reducer functions to handle state changes and control data flow. Redux also uses a single store instead of multiple stores.



## What is context API?
Context API in React allows data to be passed through the component tree without having to manually pass props down at every level, effectively serving as global state for components. It can help mitigate the problem of prop drilling and state lifting. Prop drilling refers to the process of passing data from top of a React component tree to lower components through props. The process will become problematic if the tree goes deeper and nests in a more complicated way. State lifting involves moving state to a common ancestor component when multiples components need to share the same state, and excessive lifting could make the parent components complex and bloated.



## What is the advantage and disadvantage of Redux?
Pros: Predictable state management; Great debugging capability(RTK); Allows developers to customize how actions and dispatched and handled



Cons: Might requires lots of boilerplate codes to set up and use; new concepts introduced in Redux might be complex to newcomers; Redux is usually beneficial in large projects where state management is much more complex



## What is the advantage and disadvantage of Context API?
Pros: Compared with Redux, Context API requires less boilerplate codes to set up and use; as it doesnt introduce many new concepts as Redux, context API is simpler to grasp for beginners.



Cons: Lack of customizable capabilities and more complex to debug than Redux; might not re-render sometimes when the states change in some edge cases; not ideal for high-frequency updates as mentioned specifically by the React team.



## How to connect a React component with Redux store
To connect a React component with the Redux store, we can use the connect function from react-redux. We also need a mapStateToProps function to transform the Redux store state into props for the connected component to use. Then, we can use connect() to the component, connect it with props and the dispatch function for dispatching actions to the Redux store. Actions are handled by reducer functions, which determine how the state should change in response to an action.
