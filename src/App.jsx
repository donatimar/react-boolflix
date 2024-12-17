import React from "react";
import { AppProvider } from "./contexts/AppContext";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <AppProvider>
      <div className="container">
        <Header />
        <Main />
      </div>
    </AppProvider>
  );
}

export default App;
