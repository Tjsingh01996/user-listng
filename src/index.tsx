import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/Store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let persistor = persistStore(store)
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <PersistGate persistor={persistor} >
          <CssBaseline />
          <App />
        </PersistGate>
      </ThemeProvider>
    </Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
