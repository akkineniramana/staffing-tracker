import React from 'react';
import { connect } from "react-redux";
import OpportunitiesListItem from './OpportunitiesListItem';
import Table from './Table/Table';

const columns = [
  {
    name: "name",
    displayName: "Name",
    width: "25%"
  },
  {
    name: "domain",
    displayName: "Domain",
    width: "5%"
  },
  {
    name: "startData",
    displayName: "Start Date",
    width: "10%"
  },
  {
    name: "infyManager",
    displayName: "Infosys Manager",
    width: "10%"
  },
  {
    name: "sponsor",
    displayName: "Sponsor",
    width: "10%"
  },
  {
    name: "demand",
    displayName: "Demand",
    width: "50%"
  }
];

const OpportunitiesList = (props) => (
    <div>
        <Table data={props.opportunities} columns={columns}/>
    </div>
)

const mapStateToProps = (state) => {
  return { opportunities: state.opportunities };
}
export default connect(mapStateToProps)(OpportunitiesList)

// export default Opportunities;