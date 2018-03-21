import React, { Component } from "react";
class EditDemand extends Component {
  constructor(props){
      super(props)
  }
  render() {
    return <div>EditDemand Component  {props.match.params.id}</div>;
  }
}

export default EditDemand;
