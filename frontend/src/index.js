import React from 'react';
import ReactDOM from 'react-dom';
import "./style/bootstrap.min.css"
import './style/index.css';
import store from './store/store';
import {Provider} from 'react-redux'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';


let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
