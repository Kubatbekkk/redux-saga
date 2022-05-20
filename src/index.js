import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { compose, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import createSagaMiddleware from "@redux-saga/core"
import "./index.css"
import App from "./App"
import { rootReducer } from "./redux/rootreducer"
import { forbiddenWordsMiddleWare } from "./redux/middleWare"
import { sagaWatcher } from "./redux/sagas"

const saga = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenWordsMiddleWare, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

saga.run(sagaWatcher)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<React.StrictMode>{app}</React.StrictMode>)
