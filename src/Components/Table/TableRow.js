import React from 'react';
const TableRow = (props) => {
    const rolesAbbreviation = {
        "Technology Analyst" : "TA",
        "Tech Lead" : "Lead",
        "Project Manager" : "PM"
    }
    const formatDemandData = (demands) => {
        if(demands.length != 0 ){
             return demands.map((demand,index) => (
                    <span key={index}>
                    {rolesAbbreviation[demand.role]} - {demand.location} - {demand.fulfilled}({demand.total})
                    </span>
                )
            )
        } else{
            return <button className="demand-btn">Add Demand</button>
        }
       
    }
    const getTableData = (tableData) => (
        tableData.map((data,index) => (
            <tr key={index}>
                <td>{data.opp.name}
                   
                </td>
                <td>{data.domain}</td>
                <td>{data.startDate}</td>
                <td>{data.infyManager}</td>
                <td>{data.sponsor}</td>
                <td>{formatDemandData(data.demands)}</td>
            </tr>
        ))
    )
    return (
       getTableData(props.tableData)
    )
}

export default TableRow;