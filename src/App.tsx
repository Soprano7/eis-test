import React from "react";
import "./App.css";
import { MetersPage } from "./pages/MetersPage";
import { mobxStore } from "./shared/store/Store";
import { Provider } from "mobx-react";
function App() {
  return (
    <>
      <Provider store={mobxStore}>
        <MetersPage />
      </Provider>
    </>
  );
}

export default App;
