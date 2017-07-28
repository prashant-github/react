import React from 'react';
import { render } from "react-dom";
import { Header } from "./app/components/Header";

class App extends React.Component{
  render(){
    return(
      <div className="container">
           <div className="row">
              <Header />
           </div>
      </div>
    );
  }
}

render(<App />, window.document.getElementById("root"));
