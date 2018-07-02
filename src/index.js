import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import { userLoggedIn } from "./actions/auth";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
if (localStorage.weconnectJWT) {
  const user = { access_token: localStorage.weconnectJWT };
  store.dispatch(userLoggedIn(user));
}

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
