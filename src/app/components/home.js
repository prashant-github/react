import React from "react";

export class Home extends React.Component{
  render(){
    return(
        <div>
          <p>This is the component</p>
          {"2" == "2" ? "true" : "no"}
        </div>
    );
  }
}
