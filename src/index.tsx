import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { compose } from "recompose";

import "./style/style.css";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import App from "./components/app/app";
import { reducer, Operation } from "./reducer";
import createApi from "./api";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(createApi())),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__?.()
  )
);

store.dispatch(Operation.loadTk());
store.dispatch(Operation.loadFilms());
store.dispatch(Operation.loadAwaitFilm());

render(
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
