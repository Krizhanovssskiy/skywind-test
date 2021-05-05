import React from 'react';
import ReactDOM from 'react-dom';
import {RootStateProvider} from "./root-store/RootStateContext"
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <RootStateProvider>
      <App />
    </RootStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
