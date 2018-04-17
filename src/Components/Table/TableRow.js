import React, { Component } from 'react';
import Modal from '../Modal';
import OppEditModal from '../OppEditModal';
class TableRow extends Component {
  constructor(props) {
    super(props);
    this.rolesAbbreviation = {
      "Technology Analyst": "TA",
      "Tech Lead": "Lead",
      "Project Manager": "PM"
    };
    this.state = {
        openModal : false,
        value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  openModal = () => {
      console.log("inside open modal");
      this.setState({openModal: true})
  }
  closeModal = () => (
      this.setState({openModal: false})
  )
  handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
  formatDemandData = demands => {
    if (demands.length != 0) {
      return demands.map((demand, index) => (
        <span key={index}>
          {this.rolesAbbreviation[demand.role]} - {demand.location} -{" "}
          {demand.fulfilled}({demand.total})
        </span>
      ));
    } else {
      return <button className="demand-btn">Add Demand</button>;
    }
  };
  getTableData = tableData =>
    tableData.map((data, index) => (
      <tr key={index}>
        <td>
          <div className="opp-heading">{data.opp.name}</div>
          <div className="opp-types">
            <span className="badge badge-success opp-subtype">
              {data.opp.type}
            </span>
            <span className="badge badge-success opp-subtype">
              {data.opp.status}
            </span>
            <span className="badge badge-success opp-subtype" onClick={this.openModal}>Edit</span>
            <span className="badge badge-danger opp-subtype">Delete</span>
            <Modal isOpen={this.state.openModal} onClose={this.closeModal} width="900" height="700">
                <OppEditModal editOpp={tableData[index]} closeModal={this.closeModal} handleChange={this.handleChange} opp={this.state.value}/>
            </Modal>
          </div>
        </td>
        <td>{data.domain}</td>
        <td>{data.startDate}</td>
        <td>{data.infyManager}</td>
        <td>{data.sponsor}</td>
        <td>{this.formatDemandData(data.demands)}</td>
      </tr>
    ));
  render() {
    return this.getTableData(this.props.tableData);
  }
}

export default TableRow;