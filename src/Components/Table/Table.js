import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow"

const Table = props => (
  <table className="table">
    <thead>
      <TableHeader columns={props.columns} />
    </thead>
    <tbody>
      <TableRow tableData={props.data} />
    </tbody>
  </table>
);

export default Table;



