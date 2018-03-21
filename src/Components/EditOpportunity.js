import React, { Component } from "react";
class EditOpportunity extends Component {
 constructor(props){
     super(props)
 }
  render() {
    return <div>EditOpportunity Component {this.props.match.params.id}</div>;
  }
}

export default EditOpportunity;
