import React from "react";
import Todos from "./Components/Todos";

function App() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <h1 className="header__brand">
            <a className="header__text" href="#">
              Baki Kaam
            </a>
          </h1>
        </div>
      </header>
      <section className="todos">
        <div className="container">
          <Todos />
        </div>
      </section>
    </div>
  );
}

export default App;
