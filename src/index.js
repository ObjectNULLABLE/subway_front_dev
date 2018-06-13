import React from "react";
import Logger from "redux-logger";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReduxToastr from "react-redux-toastr";

import "./index.css";
import "semantic-ui-css/semantic.min.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

import App from "./containers/App.js";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  reducer,
  applyMiddleware(Logger),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <div>
      <Router>
        <App />
      </Router>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
      />
    </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
