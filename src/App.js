import React from "react";
import {Header} from "./Componentes/Header";
import 'boxicons'
import { BrowserRouter as Router } from "react-router-dom";
import {Paginas} from "./Componentes/Paginas";
import { DataProvider } from "./context/Dataprovider";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
          <Header/>
          <Paginas/>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
