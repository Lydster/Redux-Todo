import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers'
import TodoList from './components/TodoList'

import './App.css';

const store = createStore(reducer)



function App() {
    return (
      <div className="App">
        <h1>Time To-Do!</h1>
        <TodoList />
      </div>
    );
  }

export default App;


const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, 
  rootElement);