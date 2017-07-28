import React from 'react';
import { render } from "react-dom";
import { Header } from "./app/components/Header";
import { Home } from "./app/components/Home";

class App extends React.Component{
  render(){
    let content = "";
    if(false){
         content = <p>This is true</p>;
    }
    else {
       content = <p>This is not false</p>
    }
    return(
      <div className="container">
           <div className="row">
              <Header />
           </div>
           <div className="row">
              <Home />
              <Home />
           </div>
           <div className="main">
                <p>Name dsd the cheese: {this.props.dish.name}</p>
                <p>How is the taste: {this.props.dish.taste}</p>
                <p>whats is the cost: {this.props.dish.price}</p>
           </div>
      </div>
    );
  }
}
var cheese = [name: "sandwish", taste: "good", price: "350"];

render(<App  dish={cheese}/>, window.document.getElementById("root"));
