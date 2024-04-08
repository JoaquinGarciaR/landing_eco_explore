import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme.js";
import {Toaster} from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Toaster />
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          {/*<CssBaseline />*/}
          <App />
      </ThemeProvider>
  </React.StrictMode>
)
