import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/router'
import { createGlobalStyle } from 'styled-components'

import { Provider } from 'react-redux'
import { store } from './utils/store'

const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;
    color: inherit;
    box-sizing: border-box;
  }

  html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }

  body {
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
